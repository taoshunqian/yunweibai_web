<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <CellGroup
    inset
    style="margin: 10px"
    class="cellGroup"
    v-for="(item, index) in oilList"
    :key="index"
    @click="getRouter(item)"
  >
    <Cell :title="$t('Oil3011.template[7]') + item[1]"></Cell>
    <Cell>
      <template #title>
        <ul>
          <li>{{ $t("Oil3011.template[1]") }}: {{ item[10] }}</li>
          <li>
            {{ $t("Oil3011.template[2]") }}: {{ columnsOilType[item[0]] }}
          </li>
          <li>{{ $t("Oil3011.template[3]") }}: {{ item[7] }} %</li>
        </ul>
      </template>

      <template #right-icon>
        <ul>
          <li>{{ $t("Oil3011.template[4]") }}: {{ item[11] }}</li>
          <li>{{ $t("Oil3011.template[5]") }}: {{ item[4] }} L</li>
          <li>{{ $t("Oil3011.template[6]") }}: {{ item[8] }} L</li>
        </ul>
      </template>
    </Cell>
  </CellGroup>
</template>


<script setup>
import { defineComponent, ref, onMounted } from "vue";
import { CellGroup, Cell } from "vant";
import mixins from "@/mixins/index.js";
let { t, postAN, TabHeaders, router, callJSResult_Status } = mixins();

const navTitle = ref(t("Oil3011.navTitle"));
const oilList = ref([]);
const columnsOilType = ["TUB", "N08", "PLUG", "ITALON"];

const getRouter = (item) => {
  router.push({
    path: "/OilBefore3011",
    query: {
      index: item[1],
    },
  });
};

// 命名空间
defineComponent({
  name: "yunweibao-Oil3011",
});

// -------------------------------------------------------------------
// 安卓回调函数r
const callJSResult = (str) => {
  var cmds = str.split(";")[0];
  var cmdArr = cmds.split(",").splice(1);
  var cmdList = [];
  cmdArr.forEach((item) => {
    cmdList.push(item.split("~"));
  });
  oilList.value = cmdList;
};

// 向安卓发送指令
const androidStatus_fn = () => {
  postAN.ANSend("$OILPARAMV3");
};
androidStatus_fn();

onMounted(() => {
  window.callJSResult = callJSResult;
  window.callJSResult_Status = callJSResult_Status;
});
</script>

<style scoped>
ul li {
  margin: 0px;
  padding-top: 5px;
}

.cell-group {
  margin: 10px;
}
.checkbox {
  margin-top: 0px;
  margin-bottom: 15px;
}
.trInfo {
  width: 30vh;
  text-align: center;
  height: 30px;
}
</style>