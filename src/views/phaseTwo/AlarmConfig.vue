<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <CellGroup
    inset
    class="cell-group"
    v-for="(item, index) in AlarmConfigInfo"
    :key="index"
    @click="getRouter(item)"
  > 
    <Cell :title=" $t('AlarmConfig.title') + ' ' + item[0]" :value="filtersCOlumns(item[1])" is-link />
  </CellGroup>
</template>


<script setup>
import TabHeaders from "@/components/tab.vue";
import { Cell, CellGroup,Toast } from "vant";
import { postAN } from "@/utlis/AdApi";
import { defineComponent, ref, onMounted } from "vue";
import router from "@/router";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const navTitle = ref(t('AlarmConfig.navTitle'));
let showType = 0;
const AlarmConfigInfo = ref([]);

const columns = t('AlarmConfig.columns').split(",");

const filtersCOlumns = (val) => {
  return columns[val] ?? t('AlarmConfig.filtersCOlumnsTitle');
}

const getRouter = (item) => {
  console.log(showType);
  router.push({
    path: "/AlarmConfigDetails",
    query: {
      index: item[0],
    },
  });
};

// 命名空间
defineComponent({
  name: "yunweibao-CodeStream",
});

// -------------------------------------------------------------------
// 安卓回调函数r
const callJSResult = (str) => {
  var cmds = str.split(";")[0];
  var cmdArr = cmds.split(",").splice(1);
  console.warn(cmdArr);
  var allCmd = [];
  cmdArr.forEach((item) => {
    var it = item.split("*");
    allCmd.push(it);
  })
  AlarmConfigInfo.value = allCmd;
  // alert(cmdArr)
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
  postAN.ANSend("$IOSIGNALTYPEV3");
};
androidStatus_fn();

onMounted(() => {
  window.callJSResult = callJSResult;
  window.callJSResult_Status = callJSResult_Status;
});
</script>

<style scoped lang="scss">
ul {
  li {
    margin-bottom: 5px;
  }
}
.cell-group {
  margin: 10px;
}
</style>