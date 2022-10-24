<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <CellGroup inset style="margin: 10px" class="cellGroup">
    <Field
      :label="$t('adas.label[0]')"
      :placeholder="$t('adas.placeholder[0]')"
      type="number"
      input-align="right"
      v-model="adasInfo[1]"
      maxlength="3"
    >
      <template #button>
        <label size="small" type="primary">CM</label>
      </template>
    </Field>
  </CellGroup>

  <CellGroup inset style="margin: 10px" class="cellGroup">
    <Field
      :label="$t('adas.label[1]')"
      :placeholder="$t('adas.placeholder[1]')"
      type="number"
      input-align="right"
      v-model="adasInfo[2]"
      label-width="200"
      maxlength="3"
    >
      <template #button>
        <label size="small" type="primary">CM</label>
      </template>
    </Field>
  </CellGroup>

  <CellGroup inset style="margin: 10px" class="cellGroup">
    <Field
      :label="$t('adas.label[2]')"
      label-width="200"
      :placeholder="$t('adas.placeholder[2]')"
      type="number"
      input-align="right"
      v-model="adasInfo[5]"
      maxlength="3"
    >
      <template #button>
        <label size="small" type="primary">CM</label>
      </template>
    </Field>
  </CellGroup>

  <CellGroup inset style="margin: 10px" class="cellGroup">
    <Field
      :label="$t('adas.label[3]')"
      label-width="200"
      :placeholder="$t('adas.placeholder[3]')"
      type="number"
      input-align="right"
      v-model="adasInfo[3]"
      maxlength="3"
    >
      <template #button>
        <label size="small" type="primary">CM</label>
      </template>
    </Field>
  </CellGroup>

  <CellGroup inset style="margin: 20px; height: 40px">
    <Button
      type="primary"
      style="width: 100%"
      @click="calibrationFn(1)"
      :loading="loading"
      >{{ $t("adas.button") }}</Button
    >
  </CellGroup>

  <!-- <CellGroup inset style="margin: 20px; height: 40px">
    <Button
      type="primary"
      style="width: 100%"
      @click="calibrationFn2()"
      :loading="loading"
      >{{ $t('adas.button') }}</Button
    >
  </CellGroup> -->

  <StickyBottom :guide="guide" v-show="guide" />
</template>

<script setup>
import TabHeaders from "@/components/tab.vue";
import StickyBottom from "@/components/stickyBottom.vue";
import { CellGroup, Field, Button, Toast } from "vant"; // Checkbox
import { defineComponent, ref, onMounted } from "vue";
import { postAN } from "@/utlis/AdApi";
import { getQueryString } from "@/utlis/QueryStr";
import { useRoute } from "vue-router";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
var arr = [1, 2, 3, 5];
let route = useRoute();
const guideRouter = route.query.guide;

// 标题
const navTitle = ref(t("adas.navTitle"));
const guide = ref(true);
const nowCmd = ref(""); // 当前使用的指令
const adasInfo = ref([]);
const loading = ref(false);

const calibrationFn2 = () => {
  adasInfo.value =
    sessionStorage.test != undefined ? sessionStorage.test.split(",") : [];
};

const calibrationFn = (num) => {
  loading.value = true;
  var cmds = [...adasInfo.value];
  var items = [];
  for (var i = 0; i < cmds.length; i++) {
    if (arr.includes(i)) {
      items.push(cmds[i]);
    }
  }
  var iArr = [items[0], items[1], items[3], items[2]];
  sessionStorage.test = cmds.toString();
  setTimeout(() => {
    loading.value = false;
  }, 2000);
  setTimeout(() => {
    postAN.calibrationFn(num, iArr.join("@"));
  }, 1000);
};

const setNumber = (num) => {
  return num / 10;
};

defineComponent({
  name: "yunweibao-Demarcate",
});

// -------------------------------------------------------------------
// 安卓回调函数
const callJSResult = (str) => {
  var cmds = str.split(";")[0];
  var cmdArr = cmds.split(",").splice(1);
  console.log(cmdArr.length);
  if (cmdArr.length < 2) {
    console.log("参数不全 ----" + cmdArr.length);
    calibrationFn2();
    return false;
  }
  for (var i = 0; i < cmdArr.length; i++) {
    if (arr.includes(i)) {
      cmdArr[i] = setNumber(cmdArr[i]);
    }
  }
  if (cmdArr[2] != 0) {
    cmdArr[2] = cmdArr[1] / 2 - cmdArr[2];
  }
  adasInfo.value = cmdArr;
};

const updateUi = (state,cmds) => {
  var cmdInfo = [...adasInfo.value];
  if(state == 1) {
    var cmdsArr = cmds.split("@");
    
    var num = 0;
    for(var i=0;i<cmdInfo.length;i++) {
      if (arr.includes(i)) {
        adasInfo.value[i] = cmdsArr[num];
        num++;
      }
    }
  }
  console.warn(cmds);
} 

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
  // alert(555555)
  if (guideRouter) {
    var guideIndex = sessionStorage.guideIndex;
    guide.value = true;
    var guideArr = JSON.parse(sessionStorage.guide);
    param = guideArr[guideIndex].split("@");
  } else {
    guide.value = false;
    param = getQueryString("param").split("@"); // 解析出指令
  }
  // console.log(param);
  nowCmd.value = param[1];
  postAN.ANSend(param[1]);
  // console.log("222222222222")
};

androidStatus_fn();

onMounted(() => {
  window.callJSResult = callJSResult;
  window.callJSResult_Status = callJSResult_Status;
  window.updateUi = updateUi;
});
</script>

<style>
* {
}
</style>
