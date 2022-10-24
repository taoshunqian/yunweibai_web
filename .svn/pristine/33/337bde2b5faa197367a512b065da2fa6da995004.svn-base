<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <CellGroup inset style="margin: 10px" class="cellGroup">
    <Cell>
      <template #title>
        <label style="float: left; margin-right: 10px">{{
          $t("netWork3g4g.label[0]")
        }}</label>
        <Checkbox
          v-model="checked"
          shape="square"
          icon-size="15px"
          style="margin-top: 5px"
        ></Checkbox>
      </template>
    </Cell>
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Field
      :label="$t('netWork3g4g.label[1]')"
      type="tel"
      :placeholder="$t('netWork3g4g.placeholder[0]')"
      :label-width="200"
      input-align="right"
      v-model="diAl[1]"
      autosize
      maxlength="12"
    />
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Field
      :label="$t('netWork3g4g.label[2]')"
      :placeholder="$t('netWork3g4g.placeholder[1]')"
      input-align="right"
      v-model="diAl[2]"
      autosize
    />
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Field
      :label="$t('netWork3g4g.label[3]')"
      :placeholder="$t('netWork3g4g.placeholder[2]')"
      input-align="right"
      v-model="diAl[3]"
      autosize
    />
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Field
      :label="$t('netWork3g4g.label[4]')"
      :placeholder="$t('netWork3g4g.placeholder[3]')"
      input-align="right"
      v-model="diAl[4]"
      autosize
    />
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Field
      label="MTU"
      :placeholder="$t('netWork3g4g.placeholder[4]')"
      input-align="right"
      v-model="diAl[5]"
      autosize
    />
  </CellGroup>

  <CellGroup inset style="margin: 20px; height: 40px">
    <Button type="primary" style="width: 100%" @click="initClick">{{
      $t("netWork3g4g.button[0]")
    }}</Button>
  </CellGroup>
  <div class="van-ellipsis fontSize">
    {{
      $t("netWork3g4g.note")
    }}
  </div>

  <keep-alive>
    <StickyBottom
      :guide="guide"
      @BottomSubmit="BottomSubmit"
      @BottomSearch="BottomSearch"
      @BottomNext="BottomNext"
    />
  </keep-alive>
</template>

<script setup>
import TabHeaders from "@/components/tab.vue";
import StickyBottom from "@/components/stickyBottom.vue";
import { CellGroup, Field, Cell, Checkbox, Button, Toast } from "vant";
import { defineComponent, ref, onMounted } from "vue";
import { postAN } from "@/utlis/AdApi";
import { getQueryString } from "@/utlis/QueryStr";
import { useRoute } from "vue-router";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

let route = useRoute();
const guideRouter = route.query.guide;
const navTitle = ref(t("netWork3g4g.navTitle")); // 标题
const diAl = ref([]); // 获取到的参数集合
const guide = ref(false); // 是否是向导模式
const checked = ref(true);
const nowCmd = ref(""); // 当前使用的指令
const initCmd = ref([]);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1, 1);
console.log(fruits);

// 出厂设置
const initClick = () => {
  diAl.value.splice(1, 3);
  diAl.value.splice(1, 1, ...initCmd.value);
  BottomSubmit()
};

// 保存
const BottomSubmit = () => {
  diAl.value.splice(0, 1, +checked.value);
  var cmds = nowCmd.value + "," + diAl.value.join(",");
  postAN.ANsendSetting(cmds);
  return false;
};
// 查询
const BottomSearch = () => {
  Toast(t("toast[0]"));
  postAN.ANSend(nowCmd.value);
};

defineComponent({
  name: "yunweibao-SettingsIP",
});

// -------------------------------------------------------------------
// 安卓回调函数
const callJSResult = (str) => {
  var cmds = str.split(";")[0];
  var cmdArr = cmds.split(",").splice(1);
  console.log("返回数据 "+ cmdArr);
  diAl.value = cmdArr[2].split("*"); // 获取到所有的数据
  initCmd.value = cmdArr[0].split("*"); // 出厂设置
  checked.value = !!+diAl.value[0]; // 启用
};

// 安卓成功失败回调
const callJSResult_Status = (str) => {
  if (str.indexOf("Success") !== -1) {
    Toast.success(t("toast[1]"));
  } else {
    Toast.fail(t("toast[2]"));
  }
};
// 向安卓发送指令
const androidStatus_fn = () => {
  var param = "";
  if (guideRouter) {
    var guideIndex = sessionStorage.guideIndex;
    guide.value = true;
    var guideArr = JSON.parse(sessionStorage.guide);
    param = guideArr[guideIndex].split("@");
  } else {
    param = getQueryString("param").split("@"); // 解析出指令
  }
  console.log(nowCmd.value);
  nowCmd.value = param[1]; // 当前使用的指令
  postAN.ANSend(param[1]);
};

androidStatus_fn();

onMounted(() => {
  window.callJSResult = callJSResult;
  window.callJSResult_Status = callJSResult_Status;
});
</script>

<style>
.fontSize {
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  font-size: 12px;
  text-align: center;
  
}
</style>
