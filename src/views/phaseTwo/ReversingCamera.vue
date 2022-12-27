<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <CellGroup inset class="cell-group">
    <Cell title="启用">
      <template #right-icon>
        <Checkbox v-model="checked" shape="square"></Checkbox>
      </template>
    </Cell>
  </CellGroup>

  <CellGroup inset class="cell-group">
    <Cell
      title="视频通道"
      is-link
      :value="reverCamera[1]"
      @click="showPickerFn(1)"
    >
    </Cell>
  </CellGroup>

  <CellGroup inset class="cell-group">
    <Cell title="触发开关">
      <template #right-icon>
        <RadioGroup v-model="reverCamera[2]" direction="horizontal">
          <Radio
            :name="index.toString()"
            v-for="(item, index) in columnSwitch"
            :key="index"
            >{{ item }}</Radio
          >
        </RadioGroup>
      </template>
    </Cell>
  </CellGroup>

  <CellGroup inset class="cell-group">
    <Cell title="视频输出">
      <template #right-icon>
        <RadioGroup v-model="reverCamera[3]" direction="horizontal">
          <Radio
            :name="index.toString()"
            v-for="(item, index) in columnVideoOutput"
            :key="index"
            >{{ item }}</Radio
          >
        </RadioGroup>
      </template>
    </Cell>
  </CellGroup>

  <CellGroup inset class="cell-group">
    <Field
      label="等待时长"
      placeholder="请输入等待时长"
      input-align="right"
      v-model="reverCamera[4]"
      type="number"
    >
      <template #button>
        <span>S</span>
      </template></Field
    >
  </CellGroup>

  <CellGroup inset class="cell-group" style="margin: 20px; height: 40px">
    <Button type="primary" block>设置区域</Button>
  </CellGroup>

  <Popup round v-model:show="showPicker" position="bottom">
    <Picker
      title=""
      :columns="columnChannel"
      :default-index="defaultIndex"
      @cancel="showPicker = false"
      confirm-button-text="确认"
      cancel-button-text="取消"
      @confirm="onConfirm"
    />
  </Popup>

  <StickyBottom @BottomSubmit="BottomSubmit" @BottomSearch="androidStatus_fn" />
</template>


<script setup>
/*
报警器 和 刷卡器 共用
*/
import TabHeaders from "@/components/tab.vue";
import StickyBottom from "@/components/stickyBottom.vue";
import {
  Cell,
  CellGroup,
  Checkbox,
  Button,
  Toast,
  Field,
  Radio,
  Popup,
  Picker,
  RadioGroup,
} from "vant"; // Checkbox
import { defineComponent, ref, onMounted } from "vue";
import { postAN } from "@/utlis/AdApi";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const navTitle = ref("倒车影像");
const columnChannel = [
  "通道 1",
  "通道 2",
  "通道 3",
  "通道 4",
  "通道 5",
  "通道 6",
  "通道 7",
  "通道 8",
]; // 视频通道
const columnSwitch = ["IN 1", "IN 2"]; // 触发开关
const columnVideoOutput = ["常无", "常有"]; // 视频输出
const showPicker = ref(false);
const defaultIndex = ref(1);
const reverCamera = ref([]);
const checked = ref(false);

const BottomSubmit = () => {
  var cmdArr = [...reverCamera.value];
  cmdArr[0] = +checked.value;
  cmdArr[1] = columnChannel.indexOf(cmdArr[1]) + 1;
  var cmd ="$REARCAMERA," + cmdArr.toString();
  console.warn("发送数据"+ cmd);
  postAN.ANsendSetting(cmd);
};

const showPickerFn = () => {
  showPicker.value = true;
};

const onConfirm = (value) => {
  reverCamera.value[1] = value;
  showPicker.value = false;
};

// 命名空间
defineComponent({
  name: "yunweibao-CodeStream",
});

// -------------------------------------------------------------------
// 安卓回调函数
const callJSResult = (str) => {
  var cmds = str.split(";")[0];
  var cmdArr = cmds.split(",").splice(1);
  var index = cmdArr[1] - 1;
  var channelName = columnChannel[index];
  defaultIndex.value = index;
  cmdArr[1] = channelName;
  checked.value = !!+cmdArr[0];
  reverCamera.value = cmdArr;
};
// 安卓成功失败回调
const callJSResult_Status = (str) => {
  console.warn(str);
  if (str.indexOf("Success") !== -1) {
    Toast.success(t("toast[1]"));
  } else {
    Toast.fail(t("toast[2]"));
  }
};

// 向安卓发送指令
const androidStatus_fn = () => {
  postAN.ANSend("$REARCAMERA");
};
androidStatus_fn();

onMounted(() => {
  window.callJSResult = callJSResult;
  window.callJSResult_Status = callJSResult_Status;
});
</script>

<style scoped lang="scss">
ul {
  li {
    margin-bottom: 5px;
  }
}
.cell-group {
  margin: 10px;
}
</style>