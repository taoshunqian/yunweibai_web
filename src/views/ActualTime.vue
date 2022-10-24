<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <CellGroup inset style="margin: 10px">
    <Cell
      :title="$t('actualTime.title[0]')"
      :value="$t('actualTime.value[0]')"
      :label="$t('actualTime.label[0]')"
      size="large"
    />
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Cell
      :title="$t('actualTime.title[1]')"
      :value="$t('actualTime.value[1]')"
      :label="$t('actualTime.label[1]')"
      size="large"
    />
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Cell
      :title="$t('actualTime.title[2]')"
      :value="$t('actualTime.value[2]') + actualInfo[3]"
      :label="$t('actualTime.label[2]') + actualInfo[2]"
      size="large"
    />
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Cell
      :title="$t('actualTime.title[3]')"
      :value="$t('actualTime.value[3]') + actualInfo[0]"
      :label="$t('actualTime.label[3]') + actualInfo[1]"
      size="large"
    />
  </CellGroup>

  <!-- <StickyBottom @BottomSubmit="BottomSubmit" @BottomSearch="BottomSearch" /> -->
</template>

<script setup>
import TabHeaders from "@/components/tab.vue";
import { CellGroup, Cell, Toast } from "vant"; // Checkbox
import { defineComponent, ref, onMounted } from "vue";
import { postAN } from "@/utlis/AdApi";
import { getQueryString } from "@/utlis/QueryStr";

import { useI18n } from 'vue-i18n';
const { t } = useI18n();


// 标题
const navTitle = ref(t('actualTime.navTitle'));
const actualInfo = ref([]);
const resultAll = ref("");
const sendNum = ref(0);
const statusDevices = [
  ["以太网", "WIFI", "3G", "4G", "2G", "无"],
  ["断电", "有", "异常", "无"],
  [
    "无",
    "定位中",
    "锁定",
    "天线拔出",
    "天线短路",
    "外部GPS在线",
    "外部GPS异常",
    "出错",
  ],
  ["断电", "无", "弱", "中", "强"],
  ["正常", "未开启", "视频丢失", "通道"],
  ["视频状态", "无", "视频输入", "无", "网络状态", "定位状态"],
];
// console.log(statusDevices);
// 命名空间
defineComponent({
  name: "yunweibao-ActualTime",
});

// -------------------------------------------------------------------
// 安卓回调函数
const callJSResult = (str) => {
  var cmds = str.split(";")[0];
  sendNum.value++;
  if (sendNum.value == 2) {
    var items = resultAll.value.split("!");
    // console.log(items[1]) // 视频输入
    // console.log(items[2]) // 视频状态

    // 网络状态 和 定位状态
    var cmdArr = items[0].split(",");
    var resArr = [];
    var arr = ["NETTYPE", "SIMSTATE", "GPSSTATE", "3G/4G"];
    for (var i = 0; i < cmdArr.length; i++) {
      var item = cmdArr[i].split("*");
      if (arr.indexOf(item[0]) !== -1) {
        var index = arr.indexOf(item[0]);
        item[1] = statusDevices[index][item[1]];
        resArr.push(item[1]);
      }
    }
    actualInfo.value = resArr;

    return false;
  }
  resultAll.value += cmds + "!";
};
// 安卓成功失败回调
const callJSResult_Status = (str) => {
  if (str.indexOf("Success") !== -1) {
    Toast.success(t('toast[1]'));
  } else {
    Toast.fail(t('toast[2]'));
  }
};

// 向安卓发送指令
const androidStatus_fn = () => {
  var param = getQueryString("param").split("@"); // 解析出指令
  postAN.ANSend(param[1]);
  postAN.ANSend("$VIDEOINPUTSTATUS,");
  postAN.ANSend("$RECORDSTATUS,");
};

onMounted(() => {
  window.callJSResult = callJSResult;
  window.callJSResult_Status = callJSResult_Status;
  androidStatus_fn();
});
</script>

<style>
.images {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* background: red; */
  width: 93%;
  margin: auto;
}
</style>
