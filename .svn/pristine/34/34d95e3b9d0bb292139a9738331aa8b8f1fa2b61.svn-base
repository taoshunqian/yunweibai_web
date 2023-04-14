<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />
  <!-- v-show="International" -->

  <!-- 驾驶证号码 -->
  <CellGroup inset class="cellGroup" style="margin: 10px">
    <Field
      :label="$t('icCard.label[0]')"
      :placeholder="$t('icCard.placeholder[0]')"
      input-align="right"
      v-model="icCard[0]"
      autosize
    />
  </CellGroup>

  <!-- 驾驶证有效时间 -->
  <CellGroup inset style="margin: 10px;">
    <Cell
      :title="$t('icCard.label[1]')"
      is-link
      :value="icCard[1]"
      style="color:#676161;"
      @click="showPickerDate = true"
    />
  </CellGroup>

  <!-- 从业资格证号码 -->
  <CellGroup inset style="margin: 10px">
    <Field
      style="color:#676161;"
      :label-width="120"
      :label="$t('icCard.label[2]')"
      :placeholder="$t('icCard.placeholder[2]')"
      input-align="right"
      v-model="icCard[2]"
      autosize
    >
    </Field>
  </CellGroup>

  <!-- 从业资格证有效 -->
  <CellGroup inset style="margin: 10px">
    <Cell
      :title="$t('icCard.label[3]')"
      is-link
      style="color:#676161;"
      :value="icCard[3]"
      @click="showPickerProfessionalQualificationDate = true"
    />
  </CellGroup>

  <!-- 驾驶员姓名 -->
  <CellGroup inset style="margin: 10px">
    <Field
      :label="$t('icCard.label[4]')"
      :placeholder="$t('icCard.placeholder[3]')"
      input-align="right"
      v-model="icCard[4]"
      autosize
      maxlength="6"
    >
    </Field>
  </CellGroup>

  <!-- 驾驶员代号 -->
  <CellGroup inset style="margin: 10px">
    <Field
      :label="$t('icCard.label[5]')"
      :placeholder="$t('icCard.placeholder[4]')"
      input-align="right"
      v-model="icCard[5]"
      autosize
      maxlength="11"
    >
    </Field>
  </CellGroup>
  <!-- 公司 -->
  <CellGroup inset style="margin: 10px">
    <Field
      :label="$t('icCard.label[6]')"
      :placeholder="$t('icCard.placeholder[5]')"
      input-align="right"
      v-model="icCard[6]"
      autosize
    >
    </Field>
  </CellGroup>
  <!-- 性别 -->
  <CellGroup inset style="margin: 10px">
    <Cell
      :title="$t('icCard.label[7]')"
      is-link
      style="color:#676161;"
      v-model="deviceColor"
      :value="icCard[7]"
      @click="showPicker = true"
    />
  </CellGroup>
  <!-- 星别 -->
  <CellGroup inset style="margin: 10px">
    <Row justify="space-between" style="margin: 10px">
      <Col span="3"       style="color:#676161;">
        {{ $t("icCard.label[8]") }}
      </Col>
      <Col span="9">
        <Rate
          :title="$t('icCard.label[8]')"
          v-model="valueStar"
          :size="18"
          color="#ffd21e"
          void-icon="star"
          void-color="#eee"
          @change="onChangeStar"
        />
      </Col>
    </Row>
  </CellGroup>

  <Popup round v-model:show="showPicker" position="bottom">
    <Picker
      :title="$t('icCard.label[7]')"
      :columns="columns"
        
      @cancel="showPicker = false"
      :default-index="deviceColorIndex"
      :confirm-button-text="$t('picker[0]')"
      :cancel-button-text="$t('picker[1]')"
      @confirm="onConfirm"
    />
  </Popup>

  <Popup round v-model:show="showPickerDate" position="bottom">
    <DatetimePicker
      v-model="currentDate"
      type="date"
      :title="$t('icCard.dateShowTitle')"
      @cancel="showPickerDate = false"
      @confirm="onConfirmDate"
      :formatter="formatter"
      :confirm-button-text="$t('picker[0]')"
      :cancel-button-text="$t('picker[1]')"
    />
  </Popup>

  <Popup
    round
    v-model:show="showPickerProfessionalQualificationDate"
    position="bottom"
  >
    <DatetimePicker
      v-model="professionalQualificationDate"
      type="date"
      :title="$t('icCard.dateShowTitle')"
      @cancel="professionalQualificationDate = false"
      @confirm="onConfirmProfessionalQualificationDate"
      :formatter="formatter"
      :confirm-button-text="$t('picker[0]')"
      :cancel-button-text="$t('picker[1]')"
    />
  </Popup>

  <StickyBottom
    :guide="guide"
    @BottomSubmit="BottomSubmit"
    @BottomSearch="BottomSearch"
    @BottomNext="BottomNext"
  />
</template>

<script setup>
// import TabHeaders from "@/components/tab.vue";
// import StickyBottom from "@/components/stickyBottom.vue";
import {
  CellGroup,
  Field,
  Popup,
  Picker,
  Cell,
  Toast,
  DatetimePicker,
  Rate,
  Row,
  Col,
} from "vant"; // Checkbox
import { defineComponent, onMounted, ref } from "vue";
import { getQueryString } from "@/utlis/QueryStr";
import mixins from "../mixins/index.js";
let { t, postAN, TabHeaders, StickyBottom, callJSResult_Status } = mixins();

// const { lang } = inject("lang");

// 双向绑定值
const i8nColumns = t("icCard.columns");
// const International = ref(lang.value);
const icCard = ref([]); // 获取到的参数集合
const columns = ref(i8nColumns.split(","));
const showPicker = ref(false); // 弹出层是否显示

const showPickerDate = ref(false);

const showPickerProfessionalQualificationDate = ref(false);

const guide = ref(false); // 是否是向导模式
const nowCmd = ref(""); // 当前使用的指令
const deviceColorIndex = ref(1);
const deviceColor = ref("");
const navTitle = ref(t("icCard.navTitle")); // 标题

const currentDate = ref(new Date(2023, 1, 1));

const professionalQualificationDate = ref(new Date(2023, 1, 1));

const valueStar = ref(0);

// 保存
const BottomSubmit = () => {


  let icCardArray = icCard.value.join(",").split(",");
  let currenTimeFormat = icCardArray[1].split("-");
  let professionalQualificationFormat = icCardArray[3].split("-");
  icCardArray[1] =
    parseInt(currenTimeFormat[0]) -
    2000 +
    "-" +
    currenTimeFormat[1] +
    "-" +
    currenTimeFormat[2];
  icCardArray[3] =
    parseInt(professionalQualificationFormat[0]) -
    2000 +
    "-" +
    professionalQualificationFormat[1] +
    "-" +
    professionalQualificationFormat[2];

  icCardArray[7]= deviceColorIndex.value==0?"男":"女";

  var cmds = "$TXTSET,<EXTIC2,itemParam>".replaceAll(
    "itemParam",
    icCardArray.join(",")
  ); //nowCmd.value + "," + icCard.value.join(",");



  postAN.ANsendSetting(cmds);
  return false;
};
// 查询
const BottomSearch = () => {
  Toast(t("toast[0]"));
  postAN.ANSend("$TXTGET,<EXTIC2");
};

// 下一步
const BottomNext = () => {};

// 星星改变
const onChangeStar = (value) => {
  valueStar.value = value;
  icCard.value[8] = value + ref(t("icCard.star"));
};

const onConfirm = (value,index) => {
  deviceColorIndex.value=index;
  icCard.value[7] =value;
  showPicker.value = false;
};

const formatter = (type, val) => {
  if (type === "year") {
    return val;
  }
  if (type === "month") {
    return val;
  }
  if (type === "day") {
    return val;
  }
  return val;
};

const onConfirmDate = () => {
  icCard.value[1] = getFormatDateTime(currentDate);
  showPickerDate.value = false;
};

const getFormatDateTime = (item) => {
  let year = item.value.getFullYear();
  let month = item.value.getMonth() + 1;
  let date = item.value.getDate();
  return year + "-" + month + "-" + date;
};

const onConfirmProfessionalQualificationDate = () => {
  icCard.value[3] = getFormatDateTime(professionalQualificationDate);
  showPickerProfessionalQualificationDate.value = false;
};

defineComponent({
  name: "yunweibao-icCard",
});

const getFormatDate = (dateStr) => {
  const dateTime = dateStr.split("-");
  return new Date(dateTime[0], dateTime[1] - 1, dateTime[2]);
};

// -------------------------------------------------------------------
// 安卓回调函数
const callJSResult = (str) => {

   if(str.length>=15){
    var cmds = str.split(">;")[0];
     var cmdArr = cmds.split(",").splice(2);

  currentDate.value = getFormatDate(cmdArr[1]);
  professionalQualificationDate.value = getFormatDate(cmdArr[3]);

  valueStar.value = cmdArr[8].replace(/[^\d]/g, " ");

  icCard.value = cmdArr; // 获取到的参数集合
   
   if(icCard.value[7]=='男'){
       deviceColorIndex.value=0;
   }else{
       deviceColorIndex.value=1;
   }
   icCard.value[7]=columns.value[deviceColorIndex.value];
}

};

// 向安卓发送指令
const androidStatus_fn = () => {
  try {
    var param = getQueryString("param").split("@"); // 解析出指令 // .split("@")
    console.log(param);
    if (param[7] == 10001) {
      sessionStorage.guideIndex = 0;
      // 向导模式
      guide.value = true;
    }
    nowCmd.value = param[1]; // 当前使用的指令
    postAN.ANSend("$TXTGET,<EXTIC2");
  } catch (e) {
    console.log(e);
  }
};

androidStatus_fn();

onMounted(() => {
  window.callJSResult = callJSResult;
  window.callJSResult_Status = callJSResult_Status;
});
</script>

<style>
</style>
