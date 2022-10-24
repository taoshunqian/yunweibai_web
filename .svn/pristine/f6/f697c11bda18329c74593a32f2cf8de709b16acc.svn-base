<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <!-- <CellGroup inset style="margin: 10px" class="cellGroup">
    <Cell title="矩形标定" value=""></Cell>
  </CellGroup>

  <CellGroup inset style="margin: 10px" class="cellGroup">
    <Cell title="角度标定" value=""></Cell>
  </CellGroup> -->

  <Button type="primary" style="width: 90%;margin-left: 5%;margin-top: 50%" size="large" @click="calibrationFn(3)">开始标定</Button>

  <StickyBottom :guide="guide" @BottomNext="BottomNext" />
</template>

<script setup>
import TabHeaders from "@/components/tab.vue";
import StickyBottom from "@/components/stickyBottom.vue";
import { Button } from "vant"; // Checkbox
import { defineComponent, ref } from "vue";
import { postAN } from "@/utlis/AdApi";


// 标题
const navTitle = ref("DSM2 标定");
const guide = ref(true);

const calibrationFn = (num) => {
  postAN.calibrationFn(num);
};

// const EndModel = () => {
//   postAN.finishWeb();
// };

defineComponent({
  name: "yunweibao-Demarcate",
});
</script>

<style>
* {
}
</style>
