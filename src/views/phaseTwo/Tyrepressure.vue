<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <!-- <AlarmConfig  /> -->

  <CellGroup inset class="cell-group" v-for="(item,index) in tyrepressureInfo" :key="index" @click="getRouter(item)">
    <Cell :title="$t('Tyrepressure.template[0]') + item[0]" />
    <Cell>
      <template #title>
        <ul>
            <li>{{ $t('Tyrepressure.template[1]') }}: <span>{{item[1]}}</span></li>
            <li>{{ $t('Tyrepressure.template[2]') }}: <span>{{ item[2] }} Kpa</span></li>
        </ul>
      </template>
      <template #right-icon>
        <ul>
            <li>{{ $t('Tyrepressure.template[3]') }}: {{ item[3] }} </li>
        </ul>
      </template>
    </Cell>
  </CellGroup>


  <StickyBottom
  />
</template>


<script setup>
/*
报警器 和 刷卡器 共用
*/
// import AlarmConfig from "@/components/AlarmConfig.vue";
import { Cell,  CellGroup } from "vant";
import { defineComponent, ref, onMounted } from "vue";


import mixins from '@/mixins/index.js'
let {  t, postAN, TabHeaders,StickyBottom,router,callJSResult_Status }= mixins();
const navTitle = ref(t('Tyrepressure.navTitle'));
const tyrepressureInfo = ref([]);

const getRouter = (item) => {
    console.log(item);
    router.push({
      path: "/TyrepressureDerails",
      query: {
        index : item[0]
      },
    });
}

// 命名空间
defineComponent({
  name: "yunweibao-CodeStream",
});

// -------------------------------------------------------------------
// 安卓回调函数r
const callJSResult = (str) => {
  // alert(str)
  var cmds = str.split(";")[0];
  var cmdArr = cmds.split(",").splice(1);
  console.warn(cmdArr);
  var allArr = [];
  cmdArr.forEach((item) => {
    allArr.push(item.split("*"));
  })
  tyrepressureInfo.value = allArr;

  //postAN.ANSend("$IOINFO");

};


// 向安卓发送指令
const androidStatus_fn = () => {
  postAN.ANSend("$TPMSTABLE");
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
  margin-top: 10px;
}

</style>