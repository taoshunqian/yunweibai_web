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
    <Cell title="预览叠加">
      <template #right-icon>
        <Checkbox v-model="checked" shape="square"></Checkbox>
      </template>
    </Cell>
  </CellGroup>

  

  <CellGroup inset class="cell-group">
    <Field label="名称" placeholder="请输入名称" input-align="right" />
  </CellGroup>

  <CellGroup inset class="cell-group">
    <Field label="传感器ID" placeholder="请输入传感器ID" input-align="right" />
  </CellGroup>

  <CellGroup inset class="cell-group"
    ><Field
      label="最低胎压"
      label-width="150"
      placeholder="请输入胎压"
      input-align="right"
    >
      <template #button>
        Kpa
      </template></Field
    >
  </CellGroup>
  <CellGroup inset class="cell-group"
    ><Field
      label="最高胎温"
      label-width="150"
      placeholder="请输入胎温"
      input-align="right"
    >
      <template #button>
        °C</template
    ></Field>
  </CellGroup>

  <CellGroup inset class="cell-group"
    ><Field
      label="电压"
      label-width="150"
      placeholder="请输入电压"
      input-align="right"
    >
      <template #button>
        V
      </template></Field
    >
  </CellGroup>

  <CellGroup inset class="cell-group">
    <Field label="TPMSMinVolt" placeholder="请输入" input-align="right" />
  </CellGroup>

  <CellGroup inset class="cell-group">
    <Cell title="报警输出">
      <template #right-icon>
        <div >
          <CheckboxGroup v-model="checked" direction="horizontal">
            <Checkbox
              :name="item"
              shape="square"
              v-for="(item, index) in 3"
              :key="index"
              style="margin-bottom: 8px"
              >{{ item }}</Checkbox
            >
          </CheckboxGroup>
        </div>
      </template>
    </Cell>
  </CellGroup>

  
  
  <StickyBottom
    :guide="guide"
    @BottomSubmit="BottomSubmit"
    @BottomSearch="BottomSearch"
    @BottomNext="BottomNext"
  />
</template>


<script setup>
import TabHeaders from "@/components/tab.vue";
import StickyBottom from "@/components/stickyBottom.vue";

import { CellGroup, Field,CheckboxGroup,Checkbox,Cell } from "vant";
import { defineComponent, ref, onMounted } from "vue";

const navTitle = ref("胎压 2");

// 命名空间
defineComponent({
  name: "yunweibao-TyrepressureDerails",
});

onMounted(() => {});
</script>

<style scoped lang="scss">
ul {
  li {
    margin-bottom: 5px;
  }
}
.cell-group {
  margin-top: 10px;
}
</style>