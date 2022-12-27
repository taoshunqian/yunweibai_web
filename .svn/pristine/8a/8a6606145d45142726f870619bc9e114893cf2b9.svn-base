<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <Grid  :column-num="3">
    <GridItem >
      <VanImage src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
    </GridItem>

    <GridItem >
      <VanImage src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
    </GridItem>
    
    <GridItem >
      <VanImage src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
    </GridItem>
  </Grid>

  <AlarmConfig model="2" />

  <StickyBottom
    :guide="guide"
    @BottomSubmit="BottomSubmit"
    @BottomSearch="BottomSearch"
    @BottomNext="BottomNext"
  />
</template>


<script setup>
import "@/views/phaseTwo/css/cssConfig.css";
/*
报警器 和 刷卡器 共用
*/
import TabHeaders from "@/components/tab.vue";
import StickyBottom from "@/components/stickyBottom.vue";
import AlarmConfig from "@/components/AlarmConfig.vue";

import { Image as VanImage, GridItem, Grid } from "vant";
import { defineComponent, ref, onMounted } from "vue";
const navTitle = ref(" 声光报警器 / 刷卡器");

// 命名空间
defineComponent({
  name: "yunweibao-BurglarAlarm",
});

onMounted(() => {});
</script>


<style scoped>
.cell-group {
  margin-top: 10px;
}
</style>