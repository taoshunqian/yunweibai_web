<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <AlarmConfig  />

  <CellGroup inset class="cell-group" v-for="(item,index) in 3" :key="index" @click="getRouter(item)">
    <Cell :title="'序号 ' + item" />
    <Cell>
      <template #title>
        <ul>
            <li>名称: <span>你好</span></li>
            <li>胎压: <span>15 Kpa</span></li>
        </ul>
      </template>
      <template #right-icon>
        <ul>
            <li>胎温: 20 </li>
            <li>电压: <span style="color:green;">24 V</span></li>
        </ul>
      </template>
    </Cell>
  </CellGroup>

  


  <StickyBottom
    :guide="guide"
    @BottomSubmit="BottomSubmit"
    @BottomSearch="BottomSearch"
    @BottomNext="BottomNext"
  />
</template>


<script setup>
/*
报警器 和 刷卡器 共用
*/
import TabHeaders from "@/components/tab.vue";
import StickyBottom from "@/components/stickyBottom.vue";
import AlarmConfig from "@/components/AlarmConfig.vue";
import { Cell,  CellGroup } from "vant";
import { defineComponent, ref, onMounted } from "vue";
import router from "@/router";

const navTitle = ref("胎压");


const getRouter = (item) => {
    console.log(item);
    router.push({
      path: "/TyrepressureDerails",
      query: {
      },
    });
}

// 命名空间
defineComponent({
  name: "yunweibao-CodeStream",
});

onMounted(() => {});
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