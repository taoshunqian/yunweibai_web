<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>test</div>
</template>

<script setup>
// import axios from "axios";
import { defineComponent, onMounted } from "vue";
import { GetDevicePictureUploadStrategy } from '@/api/http';
defineComponent({
  name: "yunweibao-mock",
});
const getData = () => {
  GetDevicePictureUploadStrategy({"deviceId": "13910107777"});
};
onMounted(() => {
    getData();
});
</script>

<style>
</style>
