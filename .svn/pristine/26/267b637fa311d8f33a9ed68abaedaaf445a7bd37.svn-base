<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" :lavelMuch="true" />

  <!-- <div style="height: 200px;">
    <img :src="imageInfo" alt="" 
    :style=" oilCmd[0] == 2 ? imageStyle : 'margin-left: 25%;height: 200px;' " >
  </div> -->

  <div style="display: none">
    <ComConfig
      :loadCmdInfo="loadCmdInfo"
      :status="status"
      :cmdCmdInfo="cmdCmdInfo"
      @comConfirm="comConfirm"
    />
  </div>
  <!-- 类型 -->
  <CellGroup inset class="cell-group">
    <Cell
      :title="$t('ToilLevel.template[0]')"
      is-link
      :value="columnsOilType[oilCmd[0]]"
      @click="showPickerFn(1)"
    >
    </Cell>
  </CellGroup>

  <!-- <CellGroup inset style="margin: 10px">
    <Cell title="油箱">
      <template #right-icon>
        <div>
          <CheckboxGroup v-model="oilBox" @change="checkChange">
            <Checkbox
              :name="index + 1"
              shape="square"
              style="float: left; margin-right: 5px"
              v-for="(item, index) in 2"
              :key="index"
              >{{ index + 1 }}</Checkbox
            >
          </CheckboxGroup>
        </div>
      </template>
    </Cell>
  </CellGroup> -->

  <!-- 总容量 -->
  <CellGroup inset class="cell-group">
    <Field
      :label="$t('ToilLevel.template[1]')"
      v-model="oilCmd[4]"
      input-align="right"
      type="tel"
      disabled
      label-class="disabledStyle"
    >
      <template #button>
        <span>L</span>
      </template>
    </Field>
  </CellGroup>
  <!-- 当前油量 -->
  <CellGroup inset class="cell-group">
    <Field
      :label="$t('ToilLevel.template[2]')"
      v-model="oilCmd[8]"
      disabled
      input-align="right"
      label-class="disabledStyle"
    >
      <template #button>
        <span>L</span>
      </template>
    </Field>
  </CellGroup>
  <!-- 当前油位 -->
  <CellGroup inset class="cell-group">
    <Field
      :label="$t('ToilLevel.template[3]')"
      v-model="oilCmd[7]"
      disabled
      input-align="right"
    >
      <template #button>
        <span>%</span>
      </template></Field
    >
  </CellGroup>

  <!-- 传感器数据最大值 -->
  <CellGroup inset class="cell-group">
    <Field
      v-model="oilCmd[5]"
      :label="$t('ToilLevel.template[4]')"
      label-width="120"
      type="tel"
      input-align="right"
    ></Field>
  </CellGroup>

  <!-- 报警阀值 -->
  <CellGroup inset class="cell-group">
    <Field
      v-model="oilCmd[2]"
      :label="$t('ToilLevel.template[5]')"
      :placeholder="$t('ToilLevel.templatePlaceholder[0]')"
      type="tel"
      input-align="right"
    ></Field>
  </CellGroup>

  <!-- <CellGroup inset class="cell-group" v-if="oilCmd[4] == 0">
    <Cell title="标定数目" :value="oilCmd[3]"> </Cell>
  </CellGroup> -->

  <!-- 标定数目 -->
  <div style="margin-top: 20px; background: #ffffff">
    <Row>
      <Col span="16">
        <CellGroup>
          <Field
            :label="$t('ToilLevel.template[6]')"
            :placeholder="$t('ToilLevel.templatePlaceholder[1]')"
            input-align="right"
            v-model="oilCmd[3]"
            disabled
          />
        </CellGroup>
      </Col>
      <Col span="8">
        <Button
          type="danger"
          size="small"
          style="margin-right: 10px; margin-top: 6px; float: right"
          @click="deleteCalibrationInfoFn"
          >{{ $t("ToilLevel.template[7]") }}</Button
        >
        <Button
          type="primary"
          size="small"
          style="float: right; margin-top: 6px; margin-right: 10px"
          @click="addCalibrationInfoFn"
          >{{ $t("ToilLevel.template[8]") }}</Button
        >
      </Col>
    </Row>
  </div>
  <!--  标定信息 -->
  <Row>
    <Col offset="1" span="22">
      <CellGroup
        style="margin-top: 10px"
        v-for="(item, index) in addCalibrationInfo"
        :key="index"
      >
        <Cell>
          <template #title>
            <Checkbox shape="square" v-model="item.check"
              >{{ $t("ToilLevel.template[9]") }} {{ index + 1 }}</Checkbox
            >
          </template>
        </Cell>
        <Field
          v-model="item.value1"
          type="number"
          :label="$t('ToilLevel.template[10]')"
          label-width="120"
          :placeholder="$t('ToilLevel.templatePlaceholder[2]')"
          input-align="right"
        >
          <template #button>
            <span>L</span>
          </template>
        </Field>
        <Field
          v-model="item.value2"
          type="number"
          :label="$t('ToilLevel.template[11]')"
          label-width="120"
          :placeholder="$t('ToilLevel.templatePlaceholder[3]')"
          input-align="right"
        >
          <template #button>
            <span>%</span>
          </template>
        </Field>
      </CellGroup>
    </Col>
  </Row>

  <Popup round v-model:show="showPicker" position="bottom">
    <AlarmPicker
      :columns="columns"
      :showPicker="showPicker"
      :defaultIndex="defaultIndex"
      @confirm="onConfirm"
      @cancel="showPicker = false"
    />
  </Popup>

  <footer style="padding-bottom: 100px"></footer>

  <StickyBottom @BottomSubmit="BottomSubmit" @BottomSearch="BottomSearch" />
</template>


<script setup>
/*
报警器 和 刷卡器 共用
*/
import AlarmPicker from "@/components/Alarm//AlarmPicker.vue";
import ComConfig from "@/components/ComConfig.vue";
import {
  Col,
  Row,
  Cell,
  Field,
  CellGroup,
  Button,
  Checkbox,
  // CheckboxGroup,
  Toast,
  Popup,
} from "vant"; // Checkbox
import { defineComponent, ref, onMounted } from "vue";
import { keepDecimal } from "@/utlis/QueryStr";

import mixins from "@/mixins/index.js";
let { t, postAN, TabHeaders, StickyBottom, callJSResult_Status, useRoute } =
  mixins();
const columnsOilType = ["TUB", "N08", "PLUG", "ITALON"];
// const porps = defineProps(["index"], true);
let route = useRoute();
const index = route.query.index || 0;
const navTitle = ref(t("ToilLevel.navTitle"));
const addCalibrationInfo = ref([]); // 添加标定信息
const showPicker = ref(false); // picker 弹出
const columns = ref([]); //
const defaultIndex = ref(0);
const oilCmd = ref([]);
const oilBox = ref([]);
// eslint-disable-next-line no-unused-vars
var oilAllCmd = [];
// let time = null;
const BottomSearch = () => {
  androidStatus_fn();
};

// const checkChange = (event) => {
//   //防抖
//   if (time !== null) {
//     clearTimeout(time);
//   }
//   time = setTimeout(() => {
//     if (event[event.length - 1] == undefined) {
//       oilBox.value = [0];
//     } else {
//       oilBox.value = [event[event.length - 1]];
//     }
//   }, 500);
// };

// 保存
const BottomSubmit = () => {
  var resCmd = [...oilCmd.value];
  var arr = [];
  if (index != 0) {
    arr = resCmd.splice(0, 9);
  } else {
    arr = resCmd.splice(0, 7);
  }
  const calibrationArr = [...addCalibrationInfo.value];
  var calibraStr = "";
  var maxNum = 0;
  for (var i = 0; i < calibrationArr.length; i++) {
    var item =
      [calibrationArr[i].value2, calibrationArr[i].value1].join("*") + ",";
    maxNum += +calibrationArr[i].value1;
    calibraStr += item;
  }
  arr[4] = maxNum;
  if (arr[6] == 0) {
    arr[6] = "";
  }
  arr.push(calibraStr);
  
  // if (index != 0) {
  //   var oilBoxStr = oilBox.value.toString()
  //   arr[1] = arr[6] = oilBoxStr;
  //   arr[8] = 3;
  // }
  var cmds = arr.toString();
  cmds = "$OILPARAMV3," + cmds;
  // alert(cmds);
  postAN.ANsendSetting(cmds);
};

// 弹出 picker 选择器
const showPickerFn = (num) => {
  showPicker.value = true;
  switch (num) {
    case 1: // 协议类型
      columns.value = columnsOilType;
      defaultIndex.value = oilCmd.value[0];
      break;
  }
};

// picker 弹出层确认
const onConfirm = (items) => {
  oilCmd.value[0] = items[1];
  showPicker.value = false;
};

// 删除
const deleteCalibrationInfoFn = () => {
  var arr = addCalibrationInfo.value;
  arr.filter((value, index, arr) => {
    if (value.check) {
      arr.splice(index, 1);
    }
  });
  oilCmd.value[3] = arr.length;
};

// 添加
const addCalibrationInfoFn = () => {
  var arr = addCalibrationInfo.value;

  if (arr.length == 20) {
    Toast.fail(t("ToilLevel.addCalibrationInfoFn"));
    return false;
  }
  arr.push({
    check: false,
    value1: "1",
    value2: "1",
  });
  oilCmd.value[3] = arr.length;
};

// 一维数组转二维数组
const toTwoArr = (arr) => {
  var mapArr = [];
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i].split("*");
    mapArr.push({
      check: false,
      value1: keepDecimal(item[1], 2),
      value2: keepDecimal(item[0], 2),
    });
  }
  return mapArr;
};

// 命名空间
defineComponent({
  name: "yunweibao-OilBefore3011",
});

// -------------------------------------------------------------------
// 安卓回调函数r
const callJSResult = (str) => {
  var cmds = str.split(";")[0];
  var cmdArr = cmds.split(",").splice(1);
  if (cmds.indexOf("OILPARAMV3") !== -1) {
    if (index != 0) {
      var cmdList = [];
      cmdArr.forEach((item) => {
        cmdList.push(item.split("~"));
      });
      var cmd3011 = cmdList[index - 1];
      oilAllCmd = cmdList;
      before3011(cmd3011, 12);
      return false;
    } else {
      before3011(cmdArr, 9);
      return false;
    }
  }
};

const before3011 = (cmdArr, splitIndex) => {
  var calibraArr = cmdArr.splice(splitIndex);
  addCalibrationInfo.value = toTwoArr(calibraArr);
  if (index != 0) {
    oilBox.value = [+cmdArr[1]];
  }
  oilCmd.value = cmdArr;
};

// 向安卓发送指令
const androidStatus_fn = () => {
  postAN.ANSend("$OILPARAMV3");
};
//

onMounted(() => {
  androidStatus_fn();
  window.callJSResult = callJSResult;
  window.callJSResult_Status = callJSResult_Status;
});
</script>

<style scoped>
.cell-group {
  margin: 10px;
}
.checkbox {
  margin-top: 0px;
  margin-bottom: 15px;
}
.trInfo {
  width: 30vh;
  text-align: center;
  height: 30px;
}
</style>