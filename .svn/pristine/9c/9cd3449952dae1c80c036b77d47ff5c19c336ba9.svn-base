<template>
  <TabHeaders navTitle="chat" :leftArrow="true" />

  <div class="chatContent" ref="box">
    <Cell
      class="custom"
      v-for="(item, index) in messageList"
      :key="index"
      :style="'float: ' + item['position']"
    >
      <template #title>
        <span class="custom-title">
          <v-md-preview :text="item['message']" height="20px"></v-md-preview
        ></span>
      </template>
    </Cell>
  </div>

  <!-- <VueMarkdown :source="count" /> -->

  <div class="stickyBottom">
    <CellGroup>
      <Field
        type="textarea"
        placeholder="请输入消息内容"
        autosize
        v-model="input"
        rows="3"
      >
        <template #button>
          <Button
            size="small"
            type="success"
            @click="sendMsg"
            :disabled="disabled"
            :loading="disabled"
            loading-text="思考中..."
            ><Icon name="upgrade"
          /></Button>
        </template>
      </Field>
    </CellGroup>
  </div>
</template>


<script setup>
import { CellGroup, Field, Button, Icon, Cell,  } from "vant";

import { EventSourcePolyfill } from "event-source-polyfill";
import { ref, onMounted } from "vue";
// import axios from "axios";
import mixins from "@/mixins/index.js";
let { TabHeaders } = mixins();
var sha256 = require("js-sha256");
// 1f72acc3-48c7-40b6-8dc3-81c91ad4b7c5
var conversationId = sessionStorage.getItem("conversationId");
console.log(conversationId);

var obj = {
  message: "",
  conversationId: "1f72acc3-48c7-40b6-8dc3-81c91ad4b7c5", // 房间ID , 不传就创建新的房间
  chat_role: 1,
  chatSetting: { temperature: 0.7, model: "gpt3.5" },
};
var code = "a68ca3631907b6ecf950b3b95ff83052e3406026cdd20ec444bbac25eba8112d"; // 固定密钥
var __defProp = Object.defineProperty,
  __getOwnPropSymbols = Object.getOwnPropertySymbols,
  __hasOwnProp = Object.prototype.hasOwnProperty,
  __propIsEnum = Object.prototype.propertyIsEnumerable;
var t = {
  params: {},
  uid: code,
};
var __defNormalProp = (e, t, o) =>
  t in e
    ? __defProp(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o,
      })
    : (e[t] = o);

const buildHeader = (e) => ({
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzkxNywib3BlbmlkIjoib1BDYXE1bWRNNm1IUkZlZmk1X0xEX1hQbl9VZyIsImlhdCI6MTY4NDM3MjcwNiwiZXhwIjoxNjg1NjY4NzA2fQ.P5G9qoP6tIeuP4w1nhkQqNHjqyOZy_2Y3gJbZkQucx4",
  "x-sendData": e.params,
  "x-sign": sha256.sha256(e.params + e.uid),
});

const __spreadValues = (e, t) => {
  for (var o in t || (t = {}))
    __hasOwnProp.call(t, o) && __defNormalProp(e, o, t[o]);
  if (__getOwnPropSymbols)
    // eslint-disable-next-line no-redeclare
    for (var o of __getOwnPropSymbols(t))
      __propIsEnum.call(t, o) && __defNormalProp(e, o, t[o]);
  return e;
};

let eventSource = null;
const input = ref("");
const messageList = ref([]);
var msgStr = "";
const isMsg = true;
const disabled = ref(false);
let box = ref(null);

const sendMsg = () => {
  // if (conversationId == null) {
  //   console.log("未授权的设备");
  //   Dialog({ title: "标题", message: "检测到未授权的设备,请联系作者授权" });
  //   return false;
  // }
  messageList.value.push({
    message: input.value,
    position: "right",
  });

  obj.message = encodeURIComponent(input.value);
  t.params = JSON.stringify(obj);
  var sign = __spreadValues({}, buildHeader(t));
  // console.log(box);

  // axios({
  //   method: "GET",
  //   url: "http://localhost:8054/api/chatGpt",
  //   responseType: "stream",
  //   headers: {
  //     ...sign,
  //   },
  // }).then((response) => {
  //   console.log(response);
  //   const eventSource = new EventSource("/event-stream");

  //   eventSource.onmessage = function (event) {
  //     const data = JSON.parse(event.data);
  //     console.log(data)
  //     // 处理数据
  //   };

  //   eventSource.onerror = function (event) {
  //     console.log(event);
  //     // 处理错误
  //   };
  // });
  // console.log(box.value.children[box.value.children.length])
  // box.value.scrollTop = box.value.offsetHeight;

  if (isMsg) {
    messageList.value.push({
      message: "正在思考...",
      position: "left",
    });
    eventSource = new EventSourcePolyfill(
      "https://api.ai.mxcks.com/api/message/accomplish",
      {
        headers: sign,
      }
    );
    eventSource.addEventListener("open", function () {
      console.log("open successfully");
      disabled.value = true;
    });
    eventSource.addEventListener("message", message);
    eventSource.addEventListener("error", error);
  }
};

const message = (event) => {
  var data = event.data;
  console.log(data);
  if (data == "done") {
    close();
  } else {
    var res = JSON.parse(data);
    if (res.sendId !== undefined) {
      speak(msgStr);
      msgStr = "";
      disabled.value = false;
    }
    if (res.content != undefined) {
      if (
        messageList.value[messageList.value.length - 1].message == "正在思考..."
      ) {
        messageList.value[messageList.value.length - 1].message = "";
      }
      msgStr += res.content;
      messageList.value[messageList.value.length - 1].message = msgStr;
    }
  }
};

const error = (err) => {
  err && err.status === 401 && console.log("not authorized");
};

const close = () => {
  eventSource != null ? eventSource.close() : console.log("close error");
};

const keydown = (e) => {
  var key = window.key ? e.keyCode : e.which;
  if (key == 13 && !disabled.value) {
    sendMsg();
  }
};

const speak = (msg) => {
  var str = new SpeechSynthesisUtterance(msg);
  speechSynthesis.speak(str);
};

onMounted(() => {
  window.addEventListener("keydown", keydown);
});
</script>

<style>
.stickyBottom {
  position: flex;
  bottom: 0px;
  left: 0px;
  padding-bottom: 20px;
  background: #ffffff;
  z-index: 9999;
}
.chatContent {
  /* width: 100%; */
  height: calc(100vh - 230px);
  background-color: #f7f8fa;
  padding-bottom: 50px;
  overflow-y: scroll;
}

.custom {
  max-width: 80%;
  margin-top: 10px;
  margin: 5px;
}

.van-cell__title {
  min-width: 20%;
}
</style>