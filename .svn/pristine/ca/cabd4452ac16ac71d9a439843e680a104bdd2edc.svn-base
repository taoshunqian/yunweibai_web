<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <CellGroup
    inset
    style="margin: 10px"
    v-for="(item, index) in cellList"
    :key="index"
  >
    <Cell :title="item[0]" :value="item[1]" size="large" />
  </CellGroup>

</template>

<script setup>
import TabHeaders from "@/components/tab.vue";
import { CellGroup, Cell, Toast } from "vant"; // Checkbox
import { defineComponent, ref, onMounted } from "vue";
import { postAN } from "@/utlis/AdApi";
import { getQueryString } from "@/utlis/QueryStr";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

const i8nCellList = t('systemInfo.cellList');
var i8nItem = i8nCellList.split(",");
var items = [];
for(var i=0;i<i8nItem.length;i++) {
  items.push([i8nItem[i],""]);
}
const cellList = ref(items);

// 标题
const navTitle = ref(t('systemInfo.navTitle'));
// 命名空间
defineComponent({
  name: "yunweibao-SystemInfo",
});

// -------------------------------------------------------------------
// 安卓回调函数
const callJSResult = (str) => {
  var cmds = str.split(";")[0];
  var cmdArr = cmds.split(",").splice(1);
  console.log(cmdArr);
  for(var i=0;i<cmdArr.length;i++) {
      cellList.value[i][1] = cmdArr[i].split("*")[1];
  }
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
  var param = getQueryString("param").split("@"); // 解析出指令
  postAN.ANSend(param[1]);
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
