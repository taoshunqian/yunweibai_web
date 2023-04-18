<template>
  <img :src="image" class="image" :style="style" />
</template>

<script setup>
import { defineProps, ref } from "vue";
const porps = defineProps(["img", "style"]);
const image = ref("svg/" + porps.img + ".svg");
const style = ref(porps.style ?? "");
</script>

<style scoped>
.image {
  width: 35px;
  height: 35px;
  position: relative;
  /* left: calc(50% - 18px); */
  /* transform: translateX(-50px); */
  /* filter: drop-shadow(blue 0px 0); */
}
</style>