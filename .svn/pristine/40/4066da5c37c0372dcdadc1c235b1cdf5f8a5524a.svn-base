<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <Field
    v-model.trim="sendMessage"
    rows="5"
    :label="$t('TextSend.sendMsg')"
    autosize
    type="textarea"
    style="margin-top: 10px"
    :placeholder="$t('TextSend.sendPlace')"
  />

  <Field
    v-model.trim="getMessage"
    rows="5"
    :label="$t('TextSend.getMsg')"
    autosize
    type="textarea"
    style="margin-top: 30px"
    disabled="true"
  >
    <!-- <template #button>
      <Button size="small" type="primary">复制</Button>
    </template> -->
  </Field>

  <StickyBottom
    @BottomSearch="BottomSearch"
    @BottomSubmit="BottomSubmit"
    :confrimTitle="$t('TextSend.confrim')"
    :searchTitle="$t('TextSend.search')"
  />
</template>

<script setup>
import {
  Field,
  // Button
} from "vant";
import { ref, onMounted } from "vue";
import mixins from "@/mixins/index.js";

let { t,TabHeaders, postAN, StickyBottom, callJSResult_Status } = mixins();



const sendMessage = ref(""); // 下发指令
const getMessage = ref(""); // 获取到指令

const navTitle = ref(t("TextSend.navTitle")); // 标题

// 设置
const BottomSearch = () => {
  getMessage.value = "";
  var req = sendMessage.value;
  postAN.ANsendSetting(req);
  return false;
};

// 发送
const BottomSubmit = () => {
  getMessage.value = "";
  postAN.ANSend(sendMessage.value);
  return false;
};
// -------------------------------------------------------------------

// 安卓回调函数
const callJSResult = (str) => {
  getMessage.value = str;
};

onMounted(() => {
  window.callJSResult = callJSResult;
  window.callJSResult_Status = callJSResult_Status;
});
</script>