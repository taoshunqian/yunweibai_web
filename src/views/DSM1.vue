<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <Button
    type="primary"
    style="width: 90%; margin-left: 5%; margin-top: 30%"
    size="large"
    @click="calibrationFn(2)"
    :loading="loading"
    v-show="useData.indexOf('DSM') !== -1"
    >{{ $t("dsm.button[0]") }}</Button
  >

  <Button
    type="primary"
    style="width: 90%; margin-left: 5%; margin-top: 2%"
    size="large"
    @click="calibrationFn(3)"
    :loading="loading" 
    v-show="model != 'Ios' && useData.indexOf('DSM2') !== -1"
    >{{ $t("dsm.button[1]") }}</Button
  >

  <Button
    type="primary"
    style="width: 90%; margin-left: 5%; margin-top: 2%"
    size="large"
    @click="calibrationFn(4)"
    :loading="loading" v-show="model != 'Ios'  && useData.indexOf('BSD1') !== -1 "
    >{{ $t("dsm.button[2]") }}</Button
  >

  <Button
    type="primary"
    style="width: 90%; margin-left: 5%; margin-top: 2%"
    size="large"
    @click="calibrationFn(5)"
    :loading="loading" v-show="model != 'Ios'  && useData.indexOf('BSD2') !== -1"
    >{{ $t("dsm.button[3]") }}</Button
  >

  <Button
    type="primary"
    style="width: 90%; margin-left: 5%; margin-top: 2%"
    size="large"
    @click="calibrationFn(6)"
    :loading="loading" v-show="model != 'Ios'  && useData.indexOf('BSD3') !== -1"
    >{{ $t("dsm.button[4]") }}</Button
  >

  <StickyBottom :guide="guide" @BottomSubmit="BottomSubmit" />
</template>

<script setup>
import TabHeaders from "@/components/tab.vue";
import StickyBottom from "@/components/stickyBottom.vue";
import { Button, Toast, Dialog } from "vant"; // Checkbox
import { defineComponent, ref, onMounted } from "vue";
import { postAN } from "@/utlis/AdApi";

import { getQueryString } from "@/utlis/QueryStr";
import { useRoute } from "vue-router";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
const model = sessionStorage.model;

let route = useRoute();
const guideRouter = route.query.guide;

// import { useI18n } from "vue-i18n";
// const { t } = useI18n();

// 标题
const navTitle = ref(t("dsm.navTitle"));
const guide = ref(true);
const nowCmd = ref(""); // 当前使用的指令
const loading = ref(false);
const useData = ref([]);

const calibrationFn = (num) => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);

  postAN.calibrationFn(num, "");
};

const BottomSubmit = () => {
  Dialog.confirm({
    title: t("dsm.dialog[0]"),
    message: t("dsm.dialog[1]"),
    confirmButtonText: t("dsm.dialog[2]"),
    cancelButtonText: t("dsm.dialog[3]"),
  })
    .then(() => {
      // eslint-disable-next-line no-undef
      postAN.finishWeb();
    })
    .catch(() => {
      // on cancel
    });
};

defineComponent({
  name: "yunweibao-Demarcate",
});

// -------------------------------------------------------------------
// 安卓回调函数
const callJSResult = (str) => {
  var cmds = str.split(";")[0];
  var cmdArr = cmds.split(",").splice(1);
  var data = cmdArr[cmdArr.length - 1].split("*")[1];
  useData.value = data.split("-");
  console.log(data)
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
  var param = "";
  if (guideRouter) {
    var guideIndex = sessionStorage.guideIndex;
    guide.value = true;
    var guideArr = JSON.parse(sessionStorage.guide);
    param = guideArr[guideIndex].split("@");
  } else {
    param = getQueryString("param").split("@"); // 解析出指令
  }
  // SUPPORTFUNCTION
  nowCmd.value = param[1];
  postAN.ANSend("$SYSTEMINFO,");
};

androidStatus_fn();

onMounted(() => {
  window.callJSResult = callJSResult;
  window.callJSResult_Status = callJSResult_Status;
});
</script>

<style>
* {
}
</style>
