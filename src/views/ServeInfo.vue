<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" :lavelMuch="true" />

  <CellGroup inset style="margin: 10px" class="cellGroup">
    <Cell>
      <template #title>
        <label style="float: left; margin-right: 10px">{{
          $t("serveInfo.title[0]")
        }}</label>
        <Checkbox
          v-model="checked"
          shape="square"
          icon-size="15px"
          style="margin-top: 5px"
        ></Checkbox>
      </template>
    </Cell>
  </CellGroup>

  <CellGroup inset style="margin: 10px" v-show="International">
    <Cell :title="$t('serveInfo.title[1]')">
      <template #right-icon>
        <RadioGroup v-model="ServeInfo[4]">
          <Radio
            name="1"
            shape="square"
            style="float: left; margin-right: 10px"
            icon-size="15px"
            >{{ $t("serveInfo.radio[0]") }}</Radio
          >
          <Radio name="0" shape="square" icon-size="15px">{{
            $t("serveInfo.radio[1]")
          }}</Radio>
        </RadioGroup>
      </template>
    </Cell>
  </CellGroup>

  <CellGroup inset style="margin: 10px" class="cellGroup">
    <Field
      :label="$t('serveInfo.title[2]')"
      :placeholder="$t('serveInfo.placeholder[0]')"
      input-align="right"
      :label-width="200"
      v-model="ServeInfo[1]"
      :error-message="errorMsg"
      error-message-align="right"
      @blur="fieldBlur"
    />
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Field
      :label="$t('serveInfo.title[3]')"
      :placeholder="$t('serveInfo.placeholder[1]')"
      type="digit"
      input-align="right"
      v-model="ServeInfo[2]"
    />
  </CellGroup>

  <CellGroup inset style="margin: 10px" v-show="International">
    <Cell
      :title="$t('serveInfo.title[4]')"
      is-link
      @click="showPickerFn(1)"
      :value="ServeInfo[5]"
    />
  </CellGroup>

  <CellGroup inset style="margin: 10px" v-show="International">
    <Cell
      :title="$t('serveInfo.title[5]')"
      is-link
      @click="showPickerFn(2)"
      :value="ServeInfo[6]"
    />
  </CellGroup>

  <CellGroup inset style="margin: 10px" v-show="International">
    <Cell
      :title="$t('serveInfo.title[6]')"
      is-link
      @click="showPickerFn(3)"
      :value="ServeInfo[7]"
    />
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Cell :title="$t('serveInfo.title[7]')">
      <template #right-icon>
        <span :style="{ color: state == 1 ? '#5fb878' : 'red' }">{{
          filterDeviceState(state)
        }}</span>
      </template>
    </Cell>
  </CellGroup>

  <Popup round v-model:show="showPicker" position="bottom">
    <Picker
      title=""
      :default-index="defaultIndex"
      :columns="columns"
      :confirm-button-text="$t('picker[0]')"
      :cancel-button-text="$t('picker[1]')"
      @cancel="showPicker = false"
      @confirm="onConfirm"
    />
  </Popup>

  <StickyBottom @BottomSubmit="BottomSubmit" @BottomSearch="BottomSearch" />
</template>

<script setup>
import {
  CellGroup,
  Field,
  Radio,
  RadioGroup,
  Cell,
  Checkbox,
  Picker,
  Popup,
  Toast,
} from "vant"; // Checkbox
import { defineComponent, ref, onMounted, inject } from "vue";

import mixins from '../mixins/index.js'
let {  t, postAN, TabHeaders,StickyBottom,useRoute,callJSResult_Status }= mixins();

const i8nColumns3 = t("serveInfo.columns3");
const i8nColumns4 = t("serveInfo.columns4");

const { lang } = inject("lang");
const International = ref(lang.value);
const errorMsg = ref("");

let route = useRoute();
const item = route.query.item;

const index = +route.query.index + 1;
const state = route.query.state;
const columns = ref([]);

const columns2 = ref(["JT808-2013", "JT808-2019", "JT808-2011", "JT905"]);
const columns3 = ref(i8nColumns3.split(","));
const columns4 = ref(i8nColumns4.split(","));

const defaultIndex = ref(1);
const ServeInfo = ref(item);
const showPicker = ref(false);
const navTitle = ref(t("serveInfo.navTitle") + index); // 标题
const checked = ref(true);
const statePocker = ref(1);
const sendNum = ref(0);
const resultAll = ref("");
const deviceState = ref("");
const isPcName = ref(true);

const fieldBlur = () => {
  var filter = /[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/;
  if (filter.test(ServeInfo.value[1])) {
    errorMsg.value = t("serveInfo.errorMsg");
    isPcName.value = false;
  } else {
    errorMsg.value = "";
    isPcName.value = true;
    return false;
  }
  setTimeout(() => {
    ServeInfo.value[1] = "";
  }, 1000);
};

// 保存
const BottomSubmit = () => {
  if (!isPcName.value) {
    return false;
  }
  var cmds = [...ServeInfo.value];
  cmds[3] = +checked.value; // 启用
  var columnData = [columns2.value, columns3.value, columns4.value];
  var number = 5;
  for (var i = 0; i < columnData.length; i++) {
    cmds[number] = selectNum(cmds[number], columnData[i]);
    number++;
  }
  const resCmds = cmds.toString();
  console.log(resCmds);
  postAN.ANsendSetting(resCmds);
  return false;
};
// 查询
const BottomSearch = () => {
  Toast(t("toast[0]"));
  androidStatus_fn();
};

// 显示选择器
function showPickerFn(num) {
  if (num == 1) {
    // 协议类型
    columns.value = columns2.value;
    defaultIndex.value = selectNum(ServeInfo.value[5], columns2.value);
  } else if (num == 2) {
    // 平台类型
    columns.value = columns3.value;
    defaultIndex.value = selectNum(ServeInfo.value[6], columns3.value);
  } else {
    columns.value = columns4.value;
    defaultIndex.value = selectNum(ServeInfo.value[7], columns4.value);
  }
  showPicker.value = true;
  statePocker.value = num;
}

function selectNum(name, column) {
  return column.indexOf(name);
}

// 选择器
const onConfirm = (value) => {
  showPicker.value = false;
  if (statePocker.value == 1) {
    ServeInfo.value[5] = value;
  } else if (statePocker.value == 2) {
    ServeInfo.value[6] = value;
  } else {
    ServeInfo.value[7] = value;
  }
};

onMounted(() => {
  setData();
});

defineComponent({
  name: "yunweibao-SettingsIP",
});

function filterDeviceState(name) {
  var device = t("platformSettings.deviceState[0]").split(",");
  return device[name];
}

// 设置数据的结构
function setData() {
  checked.value = !!+ServeInfo.value[3];
  ServeInfo.value[5] = columns2.value[ServeInfo.value[5]];
  ServeInfo.value[6] = columns3.value[ServeInfo.value[6]];
  ServeInfo.value[7] = columns4.value[ServeInfo.value[7]];
}

// -------------------------------------------------------------------
// 安卓回调函数
const callJSResult = (str) => {
  var cmds = str.split(";")[0];
  sendNum.value++;
  if (sendNum.value == 1) {
    postAN.ANSend("$NETSTATE");
  }
  if (sendNum.value == 2) {
    console.warn(resultAll.value);
    var items = resultAll.value.split("!");
    var net = cmds.split(",");
    var jtsvrState = [];
    for (var j = 0; j < net.length; j++) {
      if (net[j].indexOf("JTSVR") !== -1) {
        jtsvrState.push(net[j]);
      }
    }
    deviceState.value = jtsvrState[index - 1].split("*")[1];
    var cmdArr = items[0].split(",");
    ServeInfo.value = cmdArr;
    setData();
    sendNum.value = 0;
    resultAll.value = "";
    return false;
  }
  resultAll.value += cmds + "!";
};

// 向安卓发送指令
const androidStatus_fn = () => {
  let nowCmd = ServeInfo.value[0];
  postAN.ANSend(nowCmd);
  setTimeout(() => {}, 1000);
};
androidStatus_fn();
onMounted(() => {
  window.callJSResult = callJSResult;
  window.callJSResult_Status = callJSResult_Status;
});
</script>

<style>
</style>
