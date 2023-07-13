<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <CellGroup inset style="margin: 10px" class="cellGroup">
    <Cell :title="templateLang[0]">
      <template #right-icon>
        <Checkbox v-model="checked" shape="square" icon-size="15px"></Checkbox>
      </template>
    </Cell>
  </CellGroup>

  <!-- 开始时间 -->
  <CellGroup inset style="margin: 10px" class="cellGroup">
    <Cell :title="templateLang[1]" />
    <CellGroup inset style="margin-left: 20px" class="cellGroup">
      <Cell
        :title="templateLang[3]"
        is-link
        :value="showObj.month[dateAll[0]]"
        @click="showPickerClick(0, 0)"
      />
      <Cell
        :title="templateLang[4]"
        is-link
        :value="showObj.number[dateAll[1]]"
        @click="showPickerClick(1, 1)"
      />
      <Cell
        :title="templateLang[5]"
        is-link
        :value="showObj.week[dateAll[2]]"
        @click="showPickerClick(2, 2)"
      />
      <Cell
        :title="templateLang[6]"
        is-link
        :value="dateAll[3]"
        @click="showPickerTimeClick(3)"
      />
    </CellGroup>
  </CellGroup>

  <!-- 结束时间 -->
  <CellGroup inset style="margin: 10px" class="cellGroup">
    <Cell :title="templateLang[2]" />
    <CellGroup inset style="margin-left: 20px" class="cellGroup">
      <Cell
        :title="templateLang[3]"
        is-link
        :value="showObj.month[dateAll[4]]"
        @click="showPickerClick(0, 4)"
      />
      <Cell
        :title="templateLang[4]"
        is-link
        :value="showObj.number[dateAll[5]]"
        @click="showPickerClick(1, 5)"
      />
      <Cell
        :title="templateLang[5]"
        is-link
        :value="showObj.week[dateAll[6]]"
        @click="showPickerClick(2, 6)"
      />
      <Cell
        :title="templateLang[6]"
        is-link
        :value="dateAll[7]"
        @click="showPickerTimeClick(7)"
      />
    </CellGroup>
  </CellGroup>

  <Popup round v-model:show="showPickerTime" position="bottom">
    <DatetimePicker
      :title="popupTimeTitle"
      v-model="currentDate"
      type="time"
      @cancel="showPickerTime = false"
      :confirm-button-text="$t('picker[0]')"
      :cancel-button-text="$t('picker[1]')"
      @confirm="onConfirm"
    />
  </Popup>

  <Popup round v-model:show="showPicker" position="bottom">
    <Picker
      :title="popupTitle"
      :columns="columns"
      @cancel="showPicker = false"
      :default-index="deviceIndex"
      :confirm-button-text="$t('picker[0]')"
      :cancel-button-text="$t('picker[1]')"
      @confirm="onConfirm"
    />
  </Popup>

  <keep-alive>
    <StickyBottom
      @BottomSubmit="BottomSubmit"
      @BottomSearch="BottomSearch"
      @BottomNext="BottomNext"
    />
  </keep-alive>
</template>

<script setup>
import {
  CellGroup,
  Cell,
  Checkbox,
  Toast,
  Popup,
  Picker,
  DatetimePicker,
} from "vant";

import { defineComponent, ref, onMounted } from "vue";
// GNSS
import mixins from "@/mixins/index.js";
let { t, postAN, TabHeaders, StickyBottom, callJSResult_Status } = mixins();
const templateLang = t("Dst.template").split(",");
const showObj = {
  month: t("Dst.month").split(","),
  number: t("Dst.number").split(","),
  week: t("Dst.week").split(","),
};

const navTitle = ref(t("Dst.title")); // 标题
const showPicker = ref(false);
const showPickerTime = ref(false);

const columns = ref([]);
const checked = ref(false);
const currentDate = ref("");
const dateAll = ref([]);
const popupTitle = ref("");
const openCell = ref(-1);
const deviceIndex = ref(1);
const systemIndex = ref(1);

const getTime = (time) => {
  var timer = (time / 60).toString();
  var timeArr = timer.split(".");
  if (timeArr[0].length == 1) {
    timeArr[0] = "0" + timeArr[0];
  }

  if (timeArr.length == 2) {
    var minute = (time % 60).toString();
    var minuteTime = (minute.length == 1 ? `0${minute}` : minute);
    timeArr[1] = minuteTime;
  } else {
    timeArr.push("00");
  }
  // alert(timeArr);
  return timeArr.join(":");
};

const setTime = (time) => {
  var timer = time.split(":");
  var hour = timer[0] * 60;
  var minute = timer[1] * 1;
  return hour + minute;
};

// 保存
const BottomSubmit = () => {
  var cmds = [...dateAll.value];
  var startTime = setTime(cmds[3]);
  var endTime = setTime(cmds[7]);
  var startDate = cmds.slice(0, 3);
  var endDate = cmds.slice(4, 7);
  var sendCmds = [
    "$DST",
    +checked.value,
    ...startDate,
    startTime,
    ...endDate,
    endTime,
  ];
  postAN.ANsendSetting(sendCmds.toString());
  return false;
};
// 查询
const BottomSearch = () => {
  Toast(t("toast[0]"));
  androidStatus_fn();
};

const showPickerTimeClick = (data) => {
  if (!checked.value) {
    return false;
  }
  deviceIndex.value = dateAll.value[data] ?? 0;
  getTime(dateAll.value[data]);
  currentDate.value = dateAll.value[data];
  showPickerTime.value = true;
  systemIndex.value = data;
};

const showPickerClick = (index, data) => {
  if (!checked.value) {
    return false;
  }
  columns.value = [...Object.values(showObj)[index]];
  openCell.value = index;
  showPicker.value = true;
  deviceIndex.value = dateAll.value[data] ?? 0;
  systemIndex.value = data;
};

const onConfirm = (e) => {
  showPicker.value = false;
  showPickerTime.value = false;
  if (systemIndex.value == 3 || systemIndex.value == 7) {
    dateAll.value[systemIndex.value] = e;
  } else {
    dateAll.value[systemIndex.value] = columns.value.indexOf(e);
  }
};

defineComponent({
  name: "yunweibao-Dst",
});

// -------------------------------------------------------------------
// 安卓回调函数
const callJSResult = (str) => {
  var cmds = str.split(";")[0];
  var cmdArr = cmds.split(",");
  console.log(cmdArr);
  checked.value = !!+cmdArr[1];
  dateAll.value = cmdArr.slice(2);
  dateAll.value[3] = getTime(dateAll.value[3]);
  dateAll.value[7] = getTime(dateAll.value[7]);
};

// 向安卓发送指令
const androidStatus_fn = () => {
  postAN.ANSend("$DST");
};

onMounted(() => {
  window.callJSResult = callJSResult;
  window.callJSResult_Status = callJSResult_Status;

  androidStatus_fn();
});
</script>

<style>
.fontSize {
  font-weight: 400;
  color: #999999;
  font-size: 12px;
  width: 95%;
  margin: auto;
  text-align: center;
}
</style>
