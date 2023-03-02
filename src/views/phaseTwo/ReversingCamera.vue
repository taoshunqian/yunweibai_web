<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />
  <!-- 启用 -->
  <CellGroup inset class="cell-group">
    <Cell :title="$t('ReversingCamera.template[0]')">
      <template #right-icon>
        <Checkbox v-model="checked" shape="square"></Checkbox>
      </template>
    </Cell>
  </CellGroup>
  <!-- 视频通道 -->
  <CellGroup inset class="cell-group">
    <Cell
      :title="$t('ReversingCamera.template[1]')"
      is-link
      :value="reverCamera[1]"
      @click="showPickerFn(1)"
    >
    </Cell>
  </CellGroup>
  <!-- 触发开关 -->
  <CellGroup inset class="cell-group">
    <Cell :title="$t('ReversingCamera.template[2]')">
      <template #right-icon>
        <div style="width: 55%">
          <RadioGroup v-model="reverCamera[2]" direction="horizontal">
            <Radio
              :name="index.toString()"
              v-for="(item, index) in columnSwitch"
              :key="index"
              style="margin-bottom: 5px"
              >{{ item }}</Radio
            >
          </RadioGroup>
        </div>
      </template>
    </Cell>
  </CellGroup>
  <!-- 视频输出 -->
  <CellGroup inset class="cell-group">
    <Cell :title="$t('ReversingCamera.template[3]')">
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
  <!-- 等待时长 -->
  <CellGroup inset class="cell-group">
    <Cell
      :title="$t('ReversingCamera.template[4]')"
      is-link
      :value="reverCamera[4]"
      @click="showPickerFn(4)"
    >
    </Cell>
  </CellGroup>

  <CellGroup inset class="cell-group" style="margin: 20px; height: 40px">
    <Button type="primary" block @click="setReversingCamera">{{
      $t("ReversingCamera.template[6]")
    }}</Button>
  </CellGroup>

  <Popup round v-model:show="showPicker" position="bottom">
    <Picker
      title=""
      :columns="columns"
      :default-index="defaultIndex"
      @cancel="showPicker = false"
      :confirm-button-text="$t('ReversingCamera.template[7]')"
      :cancel-button-text="$t('ReversingCamera.template[8]')"
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
  // Field,
  Radio,
  Popup,
  Picker,
  RadioGroup,
} from "vant"; // Checkbox
import { defineComponent, ref, onMounted } from "vue";
import { postAN } from "@/utlis/AdApi";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const navTitle = ref(t("ReversingCamera.navTitle"));

const columns = ref([]);
const columnChannel = []; // 视频通道
const setValueIndex = ref(0);
const columnTime = t("ReversingCamera.columnTime").split(",");
const timeArr = ["30", "60", "120", "300"];
for (var i = 1; i < 9; i++) {
  columnChannel.push(t("ReversingCamera.columnChannel") + " " + i);
}
let columnSwitch = ref(["IN 1", "IN 2"]); // 触发开关
const columnVideoOutput = [
  t("ReversingCamera.columnVideoOutput[0]"),
  t("ReversingCamera.columnVideoOutput[1]"),
]; // 视频输出
const showPicker = ref(false);
const defaultIndex = ref(1);
const reverCamera = ref([]);
const checked = ref(false);

const setReversingCamera = () => {
  var channel = [...reverCamera.value];
  postAN.ANStartBack(channel[1].split(" ")[1]);
};

const BottomSubmit = () => {
  var cmdArr = [...reverCamera.value];
  cmdArr[0] = +checked.value;
  cmdArr[1] = columnChannel.indexOf(cmdArr[1]) + 1;
  cmdArr[4] = timeArr[columnTime.indexOf(cmdArr[4])];
  var cmd = "$REARCAMERA," + cmdArr.toString();
  console.warn("发送数据" + cmd);
  postAN.ANsendSetting(cmd);
};

const showPickerFn = (num) => {
  switch (num) {
    case 1: // 视频通道
      columns.value = columnChannel;
      defaultIndex.value = columnChannel.indexOf(reverCamera.value[1]);
      break;
    case 4: // 等待时长
      columns.value = columnTime;
      defaultIndex.value = columnTime.indexOf(reverCamera.value[4]);
      break;
  }
  setValueIndex.value = num;
  showPicker.value = true;
};

const onConfirm = (value) => {
  reverCamera.value[setValueIndex.value] = value;
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
  if (cmds.indexOf("$VIDEOLOSS") !== -1) {
    var leng = cmdArr.length;
    columnSwitch.value = [];
    for (var i = 0; i < leng; i++) {
      columnSwitch.value.push("IN " + (i + 1));
    }
    return false;
  }
  var index = cmdArr[1] - 1;
  var channelName = columnChannel[index];
  defaultIndex.value = index;
  cmdArr[1] = channelName;
  checked.value = !!+cmdArr[0];
  cmdArr[4] = columnTime[timeArr.indexOf(cmdArr[4])];
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
  postAN.ANSend("$VIDEOLOSS");
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