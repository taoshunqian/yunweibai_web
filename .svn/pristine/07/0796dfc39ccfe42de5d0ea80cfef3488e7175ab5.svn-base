<template>
  <Picker
      title=""
      :columns="columns"
      :default-index="defaultIndex"
      @cancel="onCancel"
      confirm-button-text="确认"
      cancel-button-text="取消"
      @confirm="onConfirm"
    />
</template>


<script setup>
import { Picker } from "vant"; // Checkbox
import {defineProps, defineComponent, ref, watchEffect,defineEmits } from "vue";

const porps = defineProps(["showPicker","columns","defaultIndex"]);
const emit = defineEmits(['cancel','confirm']);

const columns = ref([]);
const defaultIndex = ref(0);

watchEffect(async () => {
    columns.value = porps.columns;
    defaultIndex.value = porps.defaultIndex;
},{flush: 'post'});

const onConfirm = (value) => {
  // console.log(porps.columns);
  // console.log(columns.value);
  var index = columns.value.indexOf(value);
  // console.log(index);
  emit('confirm',[value, index]);
};

const onCancel = () => {
  emit('cancel',false);
};

// 命名空间
defineComponent({
  name: "yunweibao-AlarmPicker",
});
</script>

<style scoped>
.cell-group {
  margin: 10px;
}
</style>