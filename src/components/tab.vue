<template>
  <Sticky>
    <NavBar
      :title="porps.navTitle"
      v-if="porps.leftArrow"
      :safe-area-inset-top="true"
      :style="[style]"
    />
    <NavBar
      :title="porps.navTitle"
      :left-text="$t('tab.leftText')"
      :right-text="rightTextInfo"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      :safe-area-inset-top="true"
      :style="[style]"
      v-else
    />
  </Sticky>
  <!-- :right-text="$t('tab.rightText')" -->
</template>


<script setup>
import router from "@/router";
import { NavBar, Sticky, Dialog } from "vant";
import { defineComponent, defineProps, ref } from "vue";
import { postAN } from "@/utlis/AdApi";
import { getQueryString } from "@/utlis/QueryStr";
const porps = defineProps(["navTitle", "leftArrow", "lavelMuch"], true);
const lavelMuch = porps.lavelMuch || false;
import { useI18n } from "vue-i18n";

const index = sessionStorage.guideIndex;
const model = sessionStorage.model;
const wifiName = ref(getQueryString("wifiName") ?? "");
const state = ref(getQueryString("type") ?? "");
const rightTextInfo = ref("");
const { t } = useI18n();

let number = 0;
const style = ref("backgroud:#ffffff;fon");
// wifi状态
const stateInfo = (num) => {
  // const stateLang = t("netWork3g4g.label");
  // var numArr = ['1','499','500','501','502','600','601']
  console.warn(num);
  var str = "";
  // var index = numArr.indexOf(num);
  // console.warn(stateLang)
  // str = stateLang[index];
  return str;
};
// 设置wifi信息
const setWifiInfo = () => {
  var val = "";
  if (wifiName.value.length > 10) {
    val = wifiName.value.subString(0, 10);
    console.log(val);
    val += "...";
  } else {
    val = wifiName.value;
  }
  wifiName.value = "WIFI: " + val;
  state.value = stateInfo(state.value);
  rightTextInfo.value = wifiName.value + " " + state.value;
};

if (model == "Ios") {
  style.value = "padding-top: 50px;";
  state.value = "";
  wifiName.value = "";
} else {
  setWifiInfo();
}

// 点击返回图标
function onClickLeft() {
  var rou = [
    "/CarInfo",
    "/3G4G",
    "/WifiSettings",
    "/PlatformSettings",
    "/CameraSettings",
    "/ADAS",
    "/DSM1",
  ];
  var path = router.currentRoute.value.path;
  if (lavelMuch) {
    router.go(-1);
  } else {
    if (index) {
      // console.log("向导模式");
      if (index == 0) {
        Dialog.confirm({
          title: t("tab.dialog[0]"),
          message: t("tab.dialog[1]"),
          confirmButtonText: t("tab.dialog[2]"),
          cancelButtonText: t("tab.dialog[3]"),
        })
          .then(() => {
            postAN.finishWeb();
          })
          .catch(() => {});
      } else {
        if (rou.indexOf(path)) {
          sessionStorage.guideIndex = sessionStorage.guideIndex - 1;
          router.go(-1);
        } else {
          router.go(-1);
        }
        // console.log(path,rou);
        // // sessionStorage.guideIndex = sessionStorage.guideIndex - 1
        // router.go(-1);
      }
    } else {
      postAN.finishWeb();
    }
  }
}

const backUi = (type) => {
  console.warn(type);
  onClickLeft();
};

const onClickRight = () => {
  if (number == 4) {
    // eslint-disable-next-line no-undef
    AN.showLogs("logs");
    number = 0;
  }
  number++;
};

window.backUi = backUi;

defineComponent({
  name: "component-tab",
});
const CONNECTED_STATE = (type, wifi) => {
  state.value = type;
  wifiName.value = wifi;
  setWifiInfo();
};
const WIFI_STATE = (type, wifi) => {
  state.value = type;
  wifiName.value = wifi;
  setWifiInfo();
};

window.CONNECTED_STATE = CONNECTED_STATE;
window.WIFI_STATE = WIFI_STATE;
</script>

<style>
.van-nav-bar__right > .van-nav-bar__text {
  font-size: 12px;
  color: green !important;
}
</style>
