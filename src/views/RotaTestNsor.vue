<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <CellGroup inset style="margin: 10px">
    <Cell :title="$t('rotaTestNsor.title[0]')">
      <template #right-icon>
        <Checkbox v-model="checked" shape="square" icon-size="15px"></Checkbox>
      </template>
    </Cell>
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Cell :title="$t('rotaTestNsor.title[1]')" is-link :value="deviceType" @click="showPickerFn(1)" />
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Cell :title="$t('rotaTestNsor.title[2]')">
      <template #right-icon>
        <RadioGroup v-model="checked2">
          <Radio
            name="1"
            shape="square"
            style="float: left; margin-right: 10px"
            icon-size="15px"
            >{{ $t('rotaTestNsor.radio[0]') }}</Radio
          >
          <Radio name="0" shape="square" icon-size="15px">{{ $t('rotaTestNsor.radio[1]') }}</Radio>
        </RadioGroup>
      </template>
    </Cell>
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Field
      :label="$t('rotaTestNsor.title[3]')"
      label-width="200"
      :placeholder="$t('rotaTestNsor.placeholder[0]')"
      input-align="right"
      v-model="rataInfo[3]"
      type="number"
      autosize
    >
    </Field>
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Cell :title="$t('rotaTestNsor.title[4]')"  :value="state"  />
    <!-- is-link @click="showPickerFn(2)" -->
  </CellGroup>

  <Popup round v-model:show="showPicker" position="bottom">
    <!--       :title="$t('rotaTestNsor.title[5]')" -->
    <Picker

      :columns="columns"
      @cancel="showPicker = false"
      :default-index="deviceColorIndex"
      :confirm-button-text="$t('picker[0]')"
      :cancel-button-text="$t('picker[1]')"
      @confirm="onConfirm"
    />
  </Popup>

  <StickyBottom @BottomSubmit="BottomSubmit" @BottomSearch="BottomSearch" />
</template>

<script setup>
import {
  CellGroup,
  Cell,
  Checkbox,
  Field,
  RadioGroup,
  Radio,
  Toast,
  Popup,
  Picker,
} from "vant"; // Checkbox
import { defineComponent, ref, onMounted } from "vue";
import { getQueryString } from "@/utlis/QueryStr";

import mixins from '../mixins/index.js'
let {  t, postAN, TabHeaders,StickyBottom,callJSResult_Status }= mixins();

const i8nColumns2 = t('rotaTestNsor.columns2');
const i8nColumns3 = t('rotaTestNsor.columns3');

// 标题
const navTitle = ref(t("rotaTestNsor.navTitle"));

const showPicker = ref(false); // 弹出层是否显示

const columns = ref([]);
const columns2 = i8nColumns2.split(",");
const columns3 = i8nColumns3.split(",");

const deviceColorIndex = ref(0);
const deviceType = ref(""); // 类型
const checked = ref(true); // 启用
const checked2 = ref("1"); // 逻辑反
const state = ref(""); // 状态
const rataInfo = ref([]);
const nowCmd = ref("");

const statusPicker = ref(0);

const showPickerFn = (num) => {
  statusPicker.value = num;
  if (num == 1) {
    deviceColorIndex.value = columns2.indexOf(deviceType.value);
    
    columns.value = columns2;
  } else {
    console.log(222222)
    deviceColorIndex.value = columns3.indexOf(state.value);
    columns.value = columns3;
  }
  showPicker.value = true;
};

const onConfirm = (e) => {
  let number = statusPicker.value;
  if (number == 1) {
    deviceType.value = e;
  } else {
    state.value = e;
  }
  showPicker.value = false;
};

// 保存
const BottomSubmit = () => {
  var cmds = [...rataInfo.value];
  console.log(+checked.value)
  cmds[0] = +checked.value;
  cmds[1] = columns2.indexOf(deviceType.value);
  cmds[2] = checked2.value;
  cmds[4] = columns3.indexOf(state.value);
  cmds.pop();
  cmds = "$ROTATESENSOR," + cmds.toString();
  console.log(cmds)
  // alert(cmds);
  postAN.ANsendSetting(cmds);
};
// 查询
const BottomSearch = () => {
  Toast(t("toast[0]"));
  postAN.ANSend(nowCmd.value);
};

// 命名空间
defineComponent({
  name: "yunweibao-Alarm",
});

// -------------------------------------------------------------------
// 安卓回调函数
const callJSResult = (str) => {
  var cmds = str.split(";")[0];
  console.log(cmds);
  var cmdArr = cmds.split(",").splice(1);
  rataInfo.value = cmdArr;
  deviceType.value = columns2[cmdArr[1]];
  state.value = columns3[cmdArr[4]];
  checked.value = !!+cmdArr[0];
  checked2.value = cmdArr[2];
};

// 向安卓发送指令
const androidStatus_fn = () => {
  var param = getQueryString("param").split("@"); // 解析出指令
  postAN.ANSend(param[1]);
  nowCmd.value = param[1];
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
