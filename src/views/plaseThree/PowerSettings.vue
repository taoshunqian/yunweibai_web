<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <CellGroup inset style="margin: 10px">
    <Cell :title="Lang['template'][0]"  >
      <template #right-icon>
        <div>
          <span style="color:green">{{ powerInfo[5] }} V </span>
        </div>
      </template>
    </Cell>
  </CellGroup>

  
  <CellGroup inset style="margin: 10px">
    <Cell
      :title="Lang['template'][1]"
      is-link
      @click="showPickerFn(powerInfo[0])"
    >
    <template #right-icon>
        <div>
          <span >{{ powerInfo[0] }} </span>
          <span ><Icon name="arrow" /> </span>
        </div>
      </template></Cell>
  </CellGroup>

  <CellGroup inset style="margin: 10px" v-show="powerCurrent">
    <Cell :title="Lang['template'][6]" >
      <template #right-icon>
        <div>
          <span>{{ Lang.powerType[powerType]  }}</span>
        </div>
      </template>
    </Cell>
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Cell title="12V" />
    <Field
      v-model="powerInfo[1]"
      :label="Lang['template'][2]"
      input-align="right"
      label-width="120"
      placeholder="8.0 - 11.5 V"
      type="number"
      @blur="setPower(powerInfo[1], 1, '8.0-11.5')"
      required
      :error="showError[0]"
    >
      <template #button>
        <van-button size="small" type="primary">V  ( 8.0 - 11.5 V )</van-button>
      </template>
    </Field>
    <Field
      v-model="powerInfo[2]"
      :label="Lang['template'][3]"
      input-align="right"
      placeholder="8.0 - 11.5 V"
      @blur="setPower(powerInfo[2], 2, '8.5-12.0')"
      label-width="120"
      type="number"
      :error="showError[1]"
      required
    >
      <template #button>
        <van-button size="small" type="primary">V  ( 8.5 - 12.0 V )</van-button>
      </template></Field
    >
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Cell title="24V" />
    <Field
      v-model="powerInfo[3]"
      :label="Lang['template'][4]"
      input-align="right"
      label-width="120"
      placeholder="16.0 - 23.0 V"
      type="number"
      @blur="setPower(powerInfo[3], 3, '16.0-23.0')"
      required
      :error="showError[2]"
      ><template #button>
        <van-button size="small" type="primary">V  ( 16.0 - 23.0 V )</van-button>
      </template></Field
    >
    <Field
      v-model="powerInfo[4]"
      :label="Lang['template'][5]"
      input-align="right"
      label-width="120"
      placeholder="18.0 - 24.0 V"
      type="number"
      @blur="setPower(powerInfo[4], 4, '18.0-24.0')"
      :error="showError[3]"
      required
      ><template #button>
        <van-button size="small" type="primary">V  ( 18.0 - 24.0 V )</van-button>
      </template></Field
    >
  </CellGroup>

  <Popup round v-model:show="showPicker" position="bottom">
    <Picker
      :default-index="defaultIndex"
      :columns="columns"
      @cancel="showPicker = false"
      @confirm="onConfirm"
      :confirm-button-text="$t('picker[0]')"
      :cancel-button-text="$t('picker[1]')"
    />
  </Popup>

  <StickyBottom @BottomSearch="BottomSearch" @BottomSubmit="BottomSubmit" />
</template>

<script setup>
import { CellGroup, Cell, Field, Popup, Picker, Toast , Icon } from "vant";
import { defineComponent, ref, onMounted } from "vue";
import mixins from "@/mixins/index.js";

let { t, postAN, TabHeaders, StickyBottom, callJSResult_Status } = mixins();
const Lang = {
  navTitle: t("PowerSettings.navTitle"),
  template: t("PowerSettings.template").split(","),
  powerType: t("PowerSettings.powerType").split(","),
};
const navTitle = ref(Lang["navTitle"]); // 标题
const powerInfo = ref([]);
const defaultIndex = ref(1);
const showPicker = ref(false);
const columns = ref(Lang["powerType"]);
const showError = ref([false, false, false, false]);
const powerType = ref("");
const powerCurrent = ref(true);

defineComponent({
  name: "yunweibao-PowerSettings",
});

const setPower = (value, index, args) => {
  var vals = args.split("-");
  powerInfo.value[index], value = parseFloat(value).toFixed(1);
  if (
    parseFloat(value) >= parseFloat(vals[0]) &&
    parseFloat(value) <= parseFloat(vals[1])
  ) {
    powerInfo.value[index] = parseFloat(value).toFixed(1)
    showError.value[index - 1] = false;
  } else {
    
    showError.value[index - 1] = true;
  }
};

// 查询
const BottomSearch = () => {
  Toast(t("toast[0]"));
  androidStatus_fn();
  return false;
};
// 保存
const BottomSubmit = () => {
  if (showError.value.includes(true)) {
    Toast.fail(t("PowerSettings.fail"));
    return false;
  }
  var cmds = [...powerInfo.value];
  
  cmds[0] = columns.value.indexOf(cmds[0]);
  cmds.splice(5);
  var req = "$POWER," + cmds.toString();
  postAN.ANsendSetting(req); // 功能设置
  return false;
};

const onConfirm = (value) => {
  showPicker.value = false;
  // alert(value);
  var index = Lang.powerType.indexOf(value);
  if(index == 2) {
    powerCurrent.value = true;
  } else {
    powerCurrent.value = false;
  }
  powerInfo.value[0] = value;
};

const showPickerFn = (num) => {
  defaultIndex.value = columns.value.indexOf(num);
  showPicker.value = true;
};

// -------------------------------------------------------------------
// 安卓回调函数
const callJSResult = (str) => {
  showError.value = new Array(4).fill(false);
  // alert(str)
  var cmds = str.split(";")[0];
  var cmdArr = cmds.split(",").splice(1);
  console.log("获取" + cmdArr);
  cmdArr[1] = parseFloat(cmdArr[1]).toFixed(1);
  cmdArr[2] = parseFloat(cmdArr[2]).toFixed(1);
  cmdArr[3] = parseFloat(cmdArr[3]).toFixed(1);
  cmdArr[4] = parseFloat(cmdArr[4]).toFixed(1);
  if(cmdArr[0] != 2) {
    powerCurrent.value = false 
  }
  cmdArr[0] = Lang["powerType"][cmdArr[0]];
  powerType.value = cmdArr[6]
  powerInfo.value = cmdArr;
};

// 向安卓发送指令
const androidStatus_fn = () => {
  postAN.ANSend("$POWER");
};

onMounted(() => {
  androidStatus_fn();
  window.callJSResult = callJSResult;
  window.callJSResult_Status = callJSResult_Status;
});
</script>

<style scoped>
.channelItem {
  margin: 5px 0px;
  text-align: center;
}

.channelItem > div {
  padding: 5px;
  display: inline-block;
  border: 1px solid #ffffff;
}

.active {
  border: 1px solid var(---var-doc-active);
  color: var(---var-doc-active);
}

p {
  margin: 0px;
  text-align: center;
  font-size: 12px;
}
</style>