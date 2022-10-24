<template>
  <TabHeaders :navTitle="navTitle" :leftArrow="false" />

  <CellGroup inset style="margin: 10px" class="cellGroup">
    <Cell
      title="摄像头类型"
      is-link
      value="请选择摄像头类型"
      @click="showPickerFn"
    />
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Field label="安装位置" placeholder="请选择安装位置" input-align="right">
    </Field>
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Field
      label="安装高度"
      placeholder="请输入安装高度"
      type="number"
      input-align="right"
    >
      <template #button>
        <label>cm</label>
      </template>
    </Field>
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Cell title="关联右转">
      <template #right-icon>
        <Checkbox v-model="checked" shape="square" icon-size="15px"
          >开启</Checkbox
        >
      </template>
    </Cell>
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Field
      label="一级报警距离"
      placeholder="请输入"
      type="number"
      input-align="right"
    >
      <template #button>
        <label>cm</label>
      </template>
    </Field>
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Field
      label="二级报警距离"
      placeholder="请输入"
      type="number"
      input-align="right"
    >
      <template #button>
        <label>cm</label>
      </template>
    </Field>
  </CellGroup>

  <CellGroup inset style="margin: 10px">
    <Field
      label="三级报警距离"
      placeholder="请输入"
      type="number"
      input-align="right"
    >
      <template #button>
        <label>cm</label>
      </template>
    </Field>
  </CellGroup>

  <CellGroup inset style="margin: 20px; height: 40px">
    <Button type="primary" style="width: 100%">设置</Button>
  </CellGroup>

  <PopupCheckbox
    :showPicker="showPicker"
    :item="items"
    @clear="popupClear"
    @submit="popupSubmit"
  />
</template>

<script setup>
import TabHeaders from "@/components/tab.vue";
import PopupCheckbox from "@/components/PopupCheckbox.vue";

import {
  CellGroup,
  Field,
  Checkbox,
  Cell,
  Button,
  // Picker,
  // TreeSelect,
} from "vant"; // Checkbox
import { defineComponent, ref } from "vue";

const navTitle = ref("BSD"); // 标题
const checked = ref("");

const showPicker = ref(false);

const items = [
  {
    text: "摄像头类型",
    children: [
      { text: "BSD", id: 1 },
      { text: "ADC", id: 2 },
    ],
  },
];

const showPickerFn = () => {
  showPicker.value = true;
};
const popupClear = () => {
  showPicker.value = false;
};
const popupSubmit = (e) => {
  console.log(e);
  showPicker.value = false;
};

defineComponent({
  name: "yunweibao-BSD",
});
</script>

<style>
</style>
