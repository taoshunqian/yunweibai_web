<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <CellGroup
    inset
    style="margin: 10px"
    class="cellGroup"
    v-for="(item, index) in netWorkInfo"
    :key="index"
    v-show="item[2] == undefined ? true : false"
  >
    <Cell :title="item[0]" :value="item[1]" />
  </CellGroup>
</template>

<script setup>
import { CellGroup, Cell } from "vant"; // Checkbox
import { defineComponent, ref, onMounted } from "vue";
import { getQueryString } from "@/utlis/QueryStr";

import mixins from "../mixins/index.js";
let { t, postAN, TabHeaders, callJSResult_Status } = mixins();

const i8ntitleColumn = t("newWork.titleColumn");
const i8nColumn = t("newWork.columns");
// console.log(i8nColumn)
// const videoServe = ref(false);

var i8nColumnList = i8nColumn.split("!");
var i8nItems = [];
for (var i = 0; i < i8nColumnList.length; i++) {
  var item = i8nColumnList[i].split(",");
  i8nItems.push(item);
}

// console.log(i8nItems.toString())

const columns = i8nItems;
const titleColumn = i8ntitleColumn.split(","); // 标题

// 标题
const navTitle = ref(t("newWork.navTitle"));
const netWorkInfo = ref([]);
defineComponent({
  name: "yunweibao-SettingsIP",
});

// -------------------------------------------------------------------
// 安卓回调函数
const callJSResult = (str) => {
  var cmds = str.split(";")[0];

  var cmdArr = cmds.split(",").splice(1);
  let leng = cmdArr.length;
  var orderNumber = 1;
  let cmdItems = [];
  console.log("-------------------------");
  console.warn(cmds);
  for (var i = 0; i < leng; i++) {
    var item = cmdArr[i].split("*");
    var it = "";
    if (i < 9) {
      if (item[1] > columns[i].length) {
        it = columns[i][columns[i].length - 1];
      } else {
        it = columns[i][item[1]];
      }
    }
    if (i < 9) {
      if (item[0].indexOf("VIDEO") !== -1) {
        cmdItems.push([titleColumn[i], it, true]);
      } else {
        cmdItems.push([titleColumn[i], it]);
      }
    } else {
      if (item[0].indexOf("SATELLITENUM") !== -1) {
        cmdItems.push([titleColumn[columns.length - 1], item[1]]); // 卫星数
      } else {
        var value = columns[columns.length - 1][item[1]];
        cmdItems.push([t("newWork.serverName") + orderNumber, value]);
        orderNumber++;
      }
    }
  }

  let cmdArrItems = [];
  let showSate = false;
  cmdItems.forEach((item, index) => {
    if (index == 1) {
      if (cmdArr[leng - 1].indexOf("SATELLITENUM") !== -1) {
        cmdArrItems.push(cmdItems[leng - 1]);
        showSate = true;
      } else {
        cmdArrItems.push(item);
      }
    } else {
      cmdArrItems.push(item);
    }
  });
  if (showSate) {
    cmdArrItems.pop();
  }
  netWorkInfo.value = cmdArrItems;
};

// 向安卓发送指令
const androidStatus_fn = () => {
  try {
    var param = getQueryString("param").split("@"); // 解析出指令 // .split("@")
    postAN.ANSend(param[1]);
  } catch (e) {
    console.log(e);
  }
};
androidStatus_fn();

onMounted(() => {
  window.callJSResult = callJSResult;
  window.callJSResult_Status = callJSResult_Status;
});
</script>

<style>
</style>
