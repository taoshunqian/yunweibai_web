<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <CellGroup inset style="margin: 10px">
    <Cell title="当前电压" :value="powerInfo[5] + ' V'" />
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Cell
      title="电源类型"
      is-link
      :value="powerInfo[0]"
      @click="showPickerFn(powerInfo[0])"
    />
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Cell title="12V"  value="( 8.0 - 11.5 V )"  />
    <Field
      v-model="powerInfo[1]"
      label="关机电压"
      input-align="right"
      placeholder="8.0 - 11.5 V"
      type="number"
      @blur="setPower(powerInfo[1], 1, '8.0-11.5')"
      required
      :error="showError[0]"
    >
      <template #button>
        <van-button size="small" type="primary">V</van-button>
      </template>
    </Field>
    <Field
      v-model="powerInfo[2]"
      label="开机电压"
      input-align="right"
      placeholder="8.0 - 11.5 V"
      @blur="setPower(powerInfo[2], 2, '8.0-11.5')"
      type="number"
      :error="showError[1]"
      required
    >
      <template #button>
        <van-button size="small" type="primary">V</van-button>
      </template></Field
    >
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Cell title="24V" value="( 16.0 - 23.0 V )" />
    <Field
      v-model="powerInfo[3]"
      label="关机电压"
      input-align="right"
      placeholder="16.0 - 23.0 V"
      type="number"
      @blur="setPower(powerInfo[3], 3, '16.0-23.0')"
      required
      :error="showError[2]"
      ><template #button>
        <van-button size="small" type="primary">V</van-button>
      </template></Field
    >
    <Field
      v-model="powerInfo[4]"
      label="开机电压"
      input-align="right"
      placeholder="18.0 - 24.0 V"
      type="number"
      @blur="setPower(powerInfo[4], 4, '16.0-23.0')"
      :error="showError[3]"
      required
      ><template #button>
        <van-button size="small" type="primary">V</van-button>
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
import { CellGroup, Cell, Field, Popup, Picker,  } from "vant";
import { defineComponent, ref, onMounted } from "vue";
import mixins from "@/mixins/index.js";

let { postAN, TabHeaders, StickyBottom, callJSResult_Status } = mixins();
const Lang = {
  navTitle: "电源设置",
  powerType: ["12V", "24V", "自动"],
};
const navTitle = ref(Lang["navTitle"]); // 标题
const powerInfo = ref([]);
const defaultIndex = ref(1);
const showPicker = ref(false);
const columns = ref(Lang["powerType"]);
const showError = ref([false, false, false, false]);

defineComponent({
  name: "yunweibao-PowerSettings",
});

const setPower = (value, index, args) => {
  var vals = args.split("-");
  if (
    parseFloat(value) >= parseFloat(vals[0]) &&
    parseFloat(value) <= parseFloat(vals[1])
  ) {
    showError.value[index - 1] = false;
  } else {
    showError.value[index - 1] = true;
  }
};

// 查询
const BottomSearch = () => {
  androidStatus_fn();
  return false;
};
// 保存
const BottomSubmit = () => {
  if (showError.value.includes(true)) {
    console.log("请检查");
    return false
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
  powerInfo.value[0] = value;
};

const showPickerFn = (num) => {
  defaultIndex.value = columns.value.indexOf(num);
  showPicker.value = true;
};

// -------------------------------------------------------------------
// 安卓回调函数
const callJSResult = (str) => {
  var cmds = str.split(";")[0];
  var cmdArr = cmds.split(",").splice(1);
  console.log("获取" + cmdArr);
  cmdArr[0] = Lang["powerType"][cmdArr[0]];
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