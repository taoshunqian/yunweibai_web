<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <!-- 延时关机 -->
  <CellGroup inset style="margin: 10px">
    <Cell :title="Lang['template'][0]">
      <template #right-icon>
        <div>
          <RadioGroup v-model="radio">
            <Radio
              name="1"
              shape="square"
              style="float: left; margin-right: 10px"
              icon-size="15px"
              @click="setRadio(1)"
              >{{ Lang["template"][1] }}</Radio
            >
            <Radio
              name="0"
              @click="setRadio(0)"
              shape="square"
              icon-size="15px"
              >{{ Lang["template"][2] }}</Radio
            >
          </RadioGroup>
        </div>
      </template>
    </Cell>
  </CellGroup>

  <!-- 延时时长  -->
  <CellGroup inset style="margin: 10px" v-show="showSelect == 1">
    <Cell
      :title="Lang['template'][3]"
      is-link
      :value="downInfo[1] "
      @click="setTime(downInfo[1], -1)"
    ></Cell>
  </CellGroup>

  <!-- 启用休眠 -->
  <CellGroup inset style="margin: 10px" v-show="showSelect == 1">
    <Cell :title="Lang['template'][4]">
      <template #right-icon>
        <div>
          <Checkbox
            v-model="downInfo[2]"
            shape="square"
            icon-size="15px"
            style="margin-top: 5px; margin-right: 5px"
          ></Checkbox>
        </div>
      </template>
    </Cell>
  </CellGroup>

  <!-- 位置上报频率 -->
  <CellGroup inset style="margin: 10px" v-show="showSelect == 1">
    <Field
      v-model="downInfo[3]"
      :label="Lang['template'][5]"
      label-width="200"
      input-align="right"
      type="number"
    />
  </CellGroup>

  <!-- 定时开关机 -->
  <CellGroup inset style="margin: 10px">
    <Cell :title="Lang['template'][6]">
      <template #right-icon>
        <div>
          <Checkbox
            v-model="downInfo[4]"
            shape="square"
            icon-size="15px"
            style="margin-top: 5px; margin-right: 5px"
          ></Checkbox>
        </div>
      </template>
    </Cell>
  </CellGroup>

  <!-- 日期   -->
  <CellGroup inset style="margin: 10px">
    <Cell :title="Lang['template'][7]">
      <template #right-icon>
        <div style="width: 50%">
          <CheckboxGroup
            v-model="checkedDate"
            direction="horizontal"
            ref="checkboxGroup"
          >
            <Checkbox
              shape="square"
              icon-size="15px"
              style="margin-top: 5px; margin-right: 5px"
              name="index"
              @click="checkChange"
              >{{ Lang['template'][13] }}</Checkbox
            >
            <Checkbox
              shape="square"
              icon-size="15px"
              style="margin-top: 5px; margin-right: 5px"
              v-for="(item, index) in templateDate"
              :key="index"
              :name="index"
              @click="clickDate"
            >
              {{ item }}</Checkbox
            >
          </CheckboxGroup>
        </div>
      </template>
    </Cell>
  </CellGroup>

  <!-- 时间段 -->
  <CellGroup
    inset
    style="margin-top: 10px"
    v-for="(item, index) in timerInfo"
    :key="index"
  >
    <Cell :title="Lang['template'][8] + item[0]" />
    <Cell :title="Lang['template'][9]">
      <template #right-icon>
        <div>
          <Checkbox
            v-model="timerInfo[index][1]"
            shape="square"
            icon-size="15px"
            style="margin-top: 5px; margin-right: 5px"
          ></Checkbox>
        </div>
      </template>
    </Cell>
    <Cell
      :title="Lang['template'][10]"
      is-link
      :value="timerInfo[index][2]"
      @click="setTime(timerInfo[index][2], index, 2)"
    />
    <Cell
      :title="Lang['template'][11]"
      is-link
      :value="timerInfo[index][3]"
      @click="setTime(timerInfo[index][3], index, 3)"
    />
  </CellGroup>

  <Popup round v-model:show="showPicker" position="bottom">
    <DatetimePicker
      v-model="currentTime"
      type="time"
      :title="Lang['template'][12]"
      :confirm-button-text="$t('picker[0]')"
      :cancel-button-text="$t('picker[1]')"
      @confirm="confirmTime"
      @cancel="showPicker = false"
      :min-hour="0"
      :max-hour="23"
    />
  </Popup>

  <StickyBottom @BottomSearch="BottomSearch" @BottomSubmit="BottomSubmit" />
</template>

<script setup>
import {
  CellGroup,
  Cell,
  Checkbox,
  RadioGroup,
  Radio,
  Field,
  DatetimePicker,
  Popup,
  CheckboxGroup,Toast
} from "vant";
import { defineComponent, ref, onMounted } from "vue";
import mixins from "@/mixins/index.js";
import { byteChange } from "@/utlis/QueryStr";

let { t, postAN, TabHeaders, StickyBottom, callJSResult_Status } = mixins();
const Lang = {
  navTitle: t("ShutDown.navTitle"),
  template: t("ShutDown.template").split(","),
  date: t("ShutDown.date").split(","),
};
const navTitle = ref(Lang["navTitle"]); // 标题
const checkedDate = ref([]);
const radio = ref("0");
const showPicker = ref(false); // 弹出层是否显示
const downInfo = ref([]); // 其它数据
const timerInfo = ref([]); // 时间段
const templateDate = ref(Lang["date"]);
const currentTime = ref("00:00");
const defineTimeIndex = ref(1);
const defineArrTimeIndex = ref(0);
const showSelect = ref(1);
const checkboxGroup = ref(null);
const allDateCheck = ref(false);
defineComponent({
  name: "yunweibao-BootPreview",
});

const setTime = (value, index, arrIndex = -1) => {
  showPicker.value = true;
  currentTime.value = value;
  defineTimeIndex.value = index;
  defineArrTimeIndex.value = arrIndex;
};

const setRadio = (val) => {
  if (val == 0) {
    showSelect.value = 0;
  } else {
    showSelect.value = 1;
  }
};

const confirmTime = (time) => {
  var index = defineTimeIndex.value;
  if (index == -1) {
    downInfo.value[1] = time;
  } else {
    var arrIndex = defineArrTimeIndex.value;
    var timeArr = timerInfo.value;
    if (arrIndex == 3) {
      // 开机时长不能小于 00:05
      var date = time.split(":");
      var second = parseInt(date[1]);
      if (second < 5) {
        timeArr[index][arrIndex] = "00:05";
      } else {
        timeArr[index][arrIndex] = time;
      }
    } else {
      timeArr[index][arrIndex] = time;
    }
  }
  showPicker.value = false;
};

const clickDate = () => {
  var length = checkedDate.value.length;
  var index = checkedDate.value.indexOf("index");

  if (length == 7 && index === -1) {
    checkAll();
    allDateCheck.value = true;
  } else if (index !== -1) {
    checkedDate.value.splice(index, 1);
    allDateCheck.value = false;
    console.log("---------------");
  }
};

// 设置日期
const checkChange = () => {
  if (allDateCheck.value) {
    toggleAll();
  } else {
    checkAll();
  }
  allDateCheck.value = !allDateCheck.value;
  console.log("触发");
};

const checkAll = () => {
  checkboxGroup.value.toggleAll(true);
};
const toggleAll = () => {
  checkboxGroup.value.toggleAll(false);
};

// 查询
const BottomSearch = () => {
  Toast(t("toast[0]"));
  androidStatus_fn();
  return false;
};
// 保存
const BottomSubmit = () => {
  var cmds = [...downInfo.value];
  var date = [...checkedDate.value];
  var timer = [...timerInfo.value];

  cmds[0] = radio.value;

  var btnDate = byteChange(date, 8);
  cmds[5] = btnDate;
  cmds[2] = +cmds[2];
  cmds[4] = +cmds[4];
  // alert(btnDate);
  // 设置 不关机, 将 休眠设置为 0
  if (cmds[0] == 0) {
    cmds[2] = 0;
  }
  cmds.splice(6);
  var timerReq = [];
  for (var i = 0; i < timer.length; i++) {
    var item = [...timer[i]];
    item[1] = +item[1];
    timerReq.push(item.join("*"));
  }
  cmds = "$SHUTDOWNV3," + cmds.toString() + "," + timerReq.toString();
  console.log("设置------" + cmds);
  postAN.ANsendSetting(cmds);
  // checkedDate 日期
  // radio  延时关机
  // timerInfo 时间段
  return false;
};

// -------------------------------------------------------------------
// 安卓回调函数
const callJSResult = (str) => {
  var cmds = str.split(";")[0];
  var cmdArr = cmds.split(",").splice(1);
  console.log("获取-----" + cmds);

  cmdArr[2] = +cmdArr[2];
  cmdArr[4] = +cmdArr[4];
  downInfo.value = cmdArr;
  var timer = cmdArr.slice(6);
  var btn = cmdArr[5];

  var timeItems = [];
  for (var i = 0; i < timer.length; i++) {
    var item = timer[i].split("*");
    item[1] = !!+item[1];
    timeItems.push(item);
  }
  timerInfo.value = timeItems;
  showSelect.value = radio.value = cmdArr[0].toString();
  var date = encodeBtn(btn);
  if (date.length == 7) {
    allDateCheck.value = !allDateCheck.value;
    date.push("index");
  }
  checkedDate.value = date;
};

const encodeBtn = (btn) => {
  var arr = [];
  var bin = parseInt(btn).toString(2).split("").reverse();
  for (var i = 0; i < bin.length; i++) {
    if (bin[i] == 1) {
      arr.push(i);
    }
  }
  return arr;
};

// 向安卓发送指令
const androidStatus_fn = () => {
  postAN.ANSend("$SHUTDOWNV3");
};

// callJSResult("$AUDIOSET,4,10,6,3,10,5*6*7,1*2*3*4");

onMounted(() => {
  androidStatus_fn();
  window.callJSResult = callJSResult;
  window.callJSResult_Status = callJSResult_Status;
});
</script>

<style scoped>
.custom {
  width: 50%;
  padding-top: 8px;
  margin-right: 5px;
}
.custom-button {
  width: 30px;
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  background-color: var(--van-primary-color);
  border-radius: 100px;
}
</style>