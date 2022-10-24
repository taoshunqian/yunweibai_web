<template>
  <Sticky :style="[style]">
    <!-- margin-top: 30px; -->
    <NavBar :title="porps.navTitle" v-if="porps.leftArrow" />
    <NavBar
      :title="porps.navTitle"
      :left-text="$t('tab.leftText')"

      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
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

const porps = defineProps(["navTitle", "leftArrow", "lavelMuch"], true);
const lavelMuch = porps.lavelMuch || false;

const index = sessionStorage.guideIndex;
const model = sessionStorage.model;

const style = ref("backgroud:#ffffff;");
if (model == "Ios") {
  style.value = "backgroud:#ffffff;margin-top: 20px;";
}

import { useI18n } from "vue-i18n";
const { t } = useI18n();

function onClickLeft() {
  var rou = ["/CarInfo","/3G4G","/WifiSettings","/PlatformSettings","/CameraSettings","/ADAS","/DSM1"]
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
          .catch(() => {
          });
      } else {
        if(rou.indexOf(path)) {
          sessionStorage.guideIndex = sessionStorage.guideIndex - 1
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
  // eslint-disable-next-line no-undef
  AN.showLogs("logs");
};

window.backUi = backUi;

defineComponent({
  name: "component-tab",
});
</script>

<style>
</style>
