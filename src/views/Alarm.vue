<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false"  />
  <CellGroup
    inset
    style="margin: 10px"
    class="cellGroup"
    v-for="(item, index) in alarmInfo"
    :key="index"
    @click="setAlarmInfo(item,index)"
  >
    <Cell>
      <template #title>
        <p style="margin: 0px; padding-top: 5px; font-size: 13px">
          {{ $t('alarm.title[0]') }}: {{ item[0] }}
        </p>
        <p style="margin: 0px">{{ $t('alarm.title[1]') }}: 
          <span :style="{ 'color':  item[2] == '1' ? '#5fb878' : 'red' }">{{ startFn(item[2]) }}</span>
          </p>
        <p style="margin: 0px; padding-top: 5px; font-size: 13px">
          {{ $t('alarm.title[2]') }} : {{ item[4] }}
        </p>
        <p style="margin: 0px; padding-top: 5px; font-size: 13px">
          {{ $t('alarm.title[3]') }}: {{ item[8] + " S" }}
        </p>

        <p style="margin: 0px; padding-top: 5px; font-size: 13px">
          {{ $t('alarm.title[4]') }}: {{ item[12] }}
        </p>
      </template>

      <template #right-icon>
        <div style="font-size: 13px">
          <label style="margin-right: 10px; font-size: 13px"
            >{{ $t('alarm.title[5]') }}:
             
             <span :style="{ 'color':  item[1] == '1' ? '#5fb878' : 'red' }">{{ startFn(item[1]) }}</span>
             </label
          >

          <p style="margin-top: 5px">{{ $t('alarm.title[6]') }}: {{ typeFn(item[6]) }}</p>

          <p style="margin-top: -8px">{{ $t('alarm.title[7]') }}:
            <span :style="{ 'color':  item[9] == '1' ? '#5fb878' : 'red' }">{{ alarmFn(item[9]) }}</span>
             </p>

          <p style="margin-top: -8px">{{ $t('alarm.title[8]') }}: {{ cameraTypeFn(item[11]) }}</p>

          <p style="margin-top: -8px">{{ $t('alarm.title[9]') }}: {{ item[13] + " S" }}</p>
        </div>
      </template>
    </Cell>
  </CellGroup>

  <!-- <StickyBottom @BottomSubmit="BottomSubmit" @BottomSearch="BottomSearch" /> -->
</template>

<script setup>

// import StickyBottom from "@/components/stickyBottom.vue";
import { CellGroup, Cell } from "vant"; // Checkbox
import { defineComponent, ref, onMounted } from "vue";
// import {  getQueryString2 } from "@/utlis/QueryStr";
import mixins from '../mixins/index.js'
let {  t,router,postAN,TabHeaders,callJSResult_Status }=mixins();

// 标题
const navTitle = ref(t('alarm.navTitle'));
const nowCmd = ref(""); // 当前使用的指令
const alarmInfo = ref([]);

// 命名空间
defineComponent({
  name: "yunweibao-Alarm",
});

const setAlarmInfo = (e,index) => {
    router.push({
    path: "/AlarmInfo",
    query: {
      item: e,
      allAlarm: alarmInfo.value,
      index: index,
      cmd: nowCmd.value
    },
  });
}

const startFn = (e) => {
  let str = "";
  if (e == "0") {
    str = t('alarm.start[0]');
  } else if (e == "1") {
    str = t('alarm.start[1]');
  }
  return str;
};

const typeFn = (e) => {
  let str = "";
  if (e == "0") {
    str = t('alarm.type[0]');
  } else if (e == "1") {
    str = t('alarm.type[1]');
  }
  return str;
};

const alarmFn = (e) => {
  let str = "";
  if (e == "0") {
    str = t('alarm.alarm[0]');
  } else if (e == "1") {
    str = t('alarm.alarm[1]');
  } else if (e == "2") {
    str = t('alarm.alarm[2]');
  }
  return str;
};

const cameraTypeFn = (e) => {
  let str = "";
  if (e == "0") {
    str = t('alarm.cameraType[0]');
  } else if (e == "1") {
    str = t('alarm.cameraType[1]');
  } else if (e == "2") {
    str = t('alarm.cameraType[2]');
  }
  return str;
};

// -------------------------------------------------------------------
// 安卓回调函数
const callJSResult = (str) => {
  var cmds = str.split(";")[0];
  var cmdArr = cmds.split(",").splice(2);
  const alarmArr = [];
  for (var i = 0; i < cmdArr.length; i++) {
    var item = cmdArr[i].split("~");
    alarmArr.push(item);
  }
  alarmInfo.value = alarmArr;
};

// 向安卓发送指令
const androidStatus_fn = () => {
  postAN.ANSend("$IOINFO");
  // return;
  // var param = getQueryString2("param").split("@"); // 解析出指令
  // nowCmd.value = param[1];
  // postAN.ANSend(param[1]);
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
