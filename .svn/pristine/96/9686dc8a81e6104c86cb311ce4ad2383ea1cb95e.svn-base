<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <CellGroup inset style="margin: 10px" class="cellGroup">
    <Cell>
      <template #title>
        <label style="float: left; margin-right: 10px">{{ $t('wifiSettings.title[0]') }}</label>
        <Checkbox
          v-model="checked"
          shape="square"
          icon-size="15px"
          style="margin-top: 5px"
          disabled
        ></Checkbox>

        <p style="margin: 0px; padding-top: 5px">
          {{ $t('wifiSettings.title[1]') }}: <span style="padding-left: 10px">{{ model }}</span>
        </p>
      </template>
      <template #right-icon>
        <label style="float: left; margin-right: 10px">{{ warrant }}</label>
      </template>
    </Cell>
  </CellGroup>

  <CellGroup
    inset
    style="margin: 10px"
    class="cellGroup"
    v-for="(item, index) in wifiList"
    :key="index"
    @click="setWifi(item)"
  >
    <Cell>
      <template #title>
        <label style="margin-right: 10px; font-size: 13px"
          >{{ $t('wifiSettings.title[2]') }}: {{ item[0] }}</label
        >
        <p style="margin: 0px; padding-top: 5px; font-size: 13px">
          {{ $t('wifiSettings.title[3]') }}: {{ item[1] }}
        </p>
      </template>

      <template #right-icon>
        <label style="margin-top: 28px; font-size: 13px"
          >{{ $t('wifiSettings.title[4]') }}: 
          <span  :style="{ 'color':  wifiStatus.indexOf(item[2]) === 2 ? '#5fb878' : 'red' }">{{ item[2] }}</span>
          </label>
      </template>
    </Cell>
  </CellGroup>

  <StickyBottom :guide="guide" @BottomSubmit="BottomSubmit" @BottomSearch="BottomSearch" />
</template>

<script setup>
import TabHeaders from "@/components/tab.vue";
import StickyBottom from "@/components/stickyBottom.vue";
import { CellGroup, Cell, Checkbox, Toast } from "vant"; // Checkbox
import { defineComponent, ref, onMounted } from "vue";
import router from "@/router";
import { useRoute } from "vue-router";
import { postAN } from "@/utlis/AdApi";
import { getQueryString, getWifiASC } from "@/utlis/QueryStr";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
const i8nModelValue = t('wifiSettings.modelValue');
const i8nWarrantValue = t('wifiSettings.warrantValue');
const i8nWifiStatus = t('wifiSettings.wifiStatus');



let route = useRoute();
const guideRouter = route.query.guide;
// 标题
const navTitle = ref(t('wifiSettings.navTitle'));
const guide = ref(false); // 是否是向导模式
const checked = ref(true);
const nowCmd = ref(""); // 当前使用的指令
const model = ref("");
const warrant = ref("");
const wifiList = ref([]);
const allCmd = ref([]);
const modelValue = i8nModelValue.split(",");
const warrantValue = i8nWarrantValue.split(",");
const wifiStatus = i8nWifiStatus.split(",");

const setWifi = (e) => {
  router.push({
    path: "/SettingsIP",
    query: {
      item: e
    },
  });
};

defineComponent({
  name: "yunweibao-SettingsIP",
});


// 保存
const BottomSubmit = () => {
  var cmds = "$WIFILIST,";
  cmds += (+checked.value);
  postAN.ANsendSetting(cmds);
};
// 查询
const BottomSearch = () => {
  Toast(t("toast[0]"));
  postAN.ANSend(nowCmd.value);
};

// -------------------------------------------------------------------
// 安卓回调函数
const callJSResult = (str) => {
  console.log(str);
  var cmds = str.split(";")[0];
  allCmd.value = cmds;
  var cmdArr = cmds.split(",").splice(1);
  checked.value = !!+cmdArr[0];

  // 原本的看错了，因此命名 后期需要 替换一下
  warrant.value = modelValue[cmdArr[1]]; // 授权状态
  model.value = cmdArr[2] == 1 || cmdArr[2] == 2 ?  warrantValue[cmdArr[2] - 1] : "2.4G"; // 模块类型

  if (model.value == undefined) {
    model.value = modelValue[2];
  }
  if (warrant.value == undefined) {
    warrant.value = modelValue[2];
  }
  var data = cmdArr.slice(3);
  var items = [];
  for (var i = 0; i < data.length; i++) {
    var item = data[i].split("#");
    item[1] = getWifiASC(item[1]);
    console.log(item[2])
    item[2] = wifiStatus[item[2]];
    items.push(item);
  }
  
  wifiList.value = items;
};
// 安卓成功失败回调
const callJSResult_Status = (str) => {
  if (str.indexOf("Success") !== -1) {
    Toast.success(t("toast[1]"));
  } else {
    Toast.fail(t("toast[2]"));
  }
};

// function getWifiASC(nameWifi) {
//   let wifiTemp = "";
//   if (nameWifi != null && nameWifi.length >= 3) {
//     for (let i = 0; i < nameWifi.length / 3; i++) {
//       wifiTemp += String.fromCharCode(nameWifi.substr(i * 3, 3));
//     }
//   }
//   return wifiTemp;
// }

// 向安卓发送指令
const androidStatus_fn = () => {
  var param = ""
  if(guideRouter) {
    var guideIndex = sessionStorage.guideIndex;
    guide.value = true;
    var guideArr = JSON.parse(sessionStorage.guide);
    param = guideArr[guideIndex].split("@")
  } else {
    param = getQueryString("param").split("@"); // 解析出指令
  }
  nowCmd.value = param[1]; // 当前使用的指令
  postAN.ANSend(param[1]);
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
