<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <CellGroup inset style="margin: 10px">
    <Field :label="$t('oilParam.label[0]')" :placeholder="$t('oilParam.placeholder[0]')" input-align="right" v-model="oilInfo[0]" label-width="200">
      <template #button>
        <span>%</span>
      </template></Field
    >
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Field :label="$t('oilParam.label[1]')" :placeholder="$t('oilParam.placeholder[1]')" input-align="right" v-model="oilInfo[1]" label-width="200" autosize />
  </CellGroup>

   <CellGroup inset style="margin: 10px">
    <Cell :title="$t('oilParam.label[2]')" is-link :value="deviceType" @click="showPickerFn" />
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Field :label="$t('oilParam.label[3]')" :placeholder="$t('oilParam.placeholder[2]')" input-align="right" v-model="oilInfo[3]" label-width="200" autosize />
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Field :label="$t('oilParam.label[4]')" :placeholder="$t('oilParam.placeholder[3]')" input-align="right" v-model="oilInfo[4]" label-width="200" autosize />
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Field :label="$t('oilParam.label[5]')" :placeholder="$t('oilParam.placeholder[4]')" input-align="right" v-model="oilInfo[5]" label-width="200" autosize />
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Field
      :label="$t('oilParam.label[6]')"
      :placeholder="$t('oilParam.placeholder[5]')"
      label-width="200"
      input-align="right"
      v-model="oilInfo[6]"
      autosize
    />
  </CellGroup>

  <Popup round v-model:show="showPicker" position="bottom">
    <Picker
      :title="$t('oilParam.title')"
      :columns="columns"
      @cancel="showPicker = false"
      :default-index="deviceColorIndex"
      :confirm-button-text="$t('picker[0]')"
      :cancel-button-text="$t('picker[1]')"
      @confirm="onConfirm"
    />
  </Popup>

  <StickyBottom />
</template>

<script setup>
import { CellGroup, Cell, Field, Popup, Picker } from "vant"; // Checkbox
import { defineComponent, ref , onMounted } from "vue";
import { getQueryString } from "@/utlis/QueryStr";
import mixins from '../mixins/index.js'
let {  t, postAN, TabHeaders,StickyBottom,callJSResult_Status }= mixins();

// 标题
const navTitle = ref(t('oilParam.navTitle'));
const showPicker = ref(false); // 弹出层是否显示
const columns = ref(["TUB", "N08", "PLUG"]);
const deviceColorIndex = ref(1);
const deviceType = ref("");
const oilInfo = ref([]);
// const nowCmd = ref("");

const showPickerFn = () => {
  showPicker.value = true;
};

// 弹窗确定按钮
const onConfirm = (e) => {
  let index = 0;
  let text = "";
  for (var i = 0; i < columns.value.length; i++) {
    if (columns.value[i] == e) {
      index = i + 1;
      text = columns.value[i];
    }
  }
  deviceColorIndex.value = index;
  deviceType.value = text;
  showPicker.value = false;
};

// 命名空间
defineComponent({
  name: "yunweibao-Alarm",
});


// -------------------------------------------------------------------
// 安卓回调函数
const callJSResult = (str) => {
  console.log(str);
  var cmds = str.split(";")[0];
  var cmdArr = cmds.split(",").splice(1);
  oilInfo.value = cmdArr;

  deviceColorIndex.value = cmdArr[2] - 1; // 读取设备颜色
  if(deviceColorIndex.value == -1) {
    deviceColorIndex.value = 0;
  }
  deviceType.value = columns.value[deviceColorIndex.value];
};

// 向安卓发送指令
const androidStatus_fn = () => {
  var param = getQueryString("param").split("@"); // 解析出指令
  postAN.ANSend(param[1]);
};

onMounted(() => {
  window.callJSResult = callJSResult;
  window.callJSResult_Status = callJSResult_Status;
  androidStatus_fn();
});
</script>

<style>
.images {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* background: red; */
  width: 93%;
  margin: auto;
}
</style>
