<template>
  <!-- 合并式 -->
  <div>
    <CellGroup inset class="cell-group" style="margin-top: 10px">
      <Collapse v-model="activeNames">
        <CollapseItem name="1" is-link>
          <template #title>
            <div>
              {{ title }}: <span style="color: #1989fa">{{ model }}</span>
            </div>
          </template>

          <!-- 图片显示 -->
          <div class="fatherDiv">
            <div
              :class="activeImage == index ? 'divStyle active' : 'divStyle'"
              v-for="(item, index) in ImageColumns"
              :key="index"
              @click="setModel(index)"
            >
              <VanImage
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
              />
              <span style="font-size: 12px">{{ item.title }}</span>
            </div>
          </div>

          <!-- 型号设置界面 -->
          <CellGroup inset class="cell-group">
            <Cell
              :title="item.title"
              :is-link="index > 1"
              :value="item.value"
              @click="showPickerFn(item)"
              v-for="(item, index) in titleColumns"
              :key="index"
            />
          </CellGroup>
        </CollapseItem>
      </Collapse>
    </CellGroup>
  </div>

  <Popup round v-model:show="showPicker" position="bottom">
    <AlarmPicker
      :columns="columns"
      @confirm="onConfirm"
      :defaultIndex="defaultIndex"
      @cancel="showPicker = false"
    />
  </Popup>
</template>


<script setup>
import {
  CellGroup,
  Cell,
  Popup,
  CollapseItem,
  Collapse,
  Image as VanImage,
} from "vant"; // Checkbox
import AlarmPicker from "@/components/Alarm//AlarmPicker.vue";
import {
  defineComponent,
  ref,
  defineProps,
  watchEffect,
  watch,
  defineEmits,
  reactive,
} from "vue";
const porps = defineProps(["cmdCmdInfo", "status", "loadCmdInfo"]);
import { columnComInfo } from "@/utlis/QueryStr";
import {
  columnsBps,
  columnsDatabits,
  columnsStopbits,
  columnsCheckbits,
  columnsCheckbitsIndex,
  columnOilType,
  columnsCom
} from "@/utlis/ConfigConst";
const emit = defineEmits(["comConfirm"]);
const activeNames = ref(["1"]);
const columnIndex = columnComInfo();
const defultVal = "请选择";
const model = ref("");
// 可优化，在后期可以修改位动态获取到 titleColumns结构体
const titleColumns = reactive([
  {
    title: "型号",
    value: defultVal,
    tipsIndex: 2,
  },
  {
    title: "串口号",
    value: defultVal,
    tipsIndex: 1,
  },
  {
    title: "波特率",
    value: defultVal,
    tipsIndex: 3,
  },
  {
    title: "数据位",
    value: defultVal,
    tipsIndex: 4,
  },
  {
    title: "停止位",
    value: defultVal,
    tipsIndex: 5,
  },
  {
    title: "校验位",
    value: defultVal,
    tipsIndex: 6,
  },
]);

const title = ref("型号"); // 标题
const defaultIndex = ref(0);
const activeImage = ref(0);
const status = ref(porps.status ?? false); // 未使用
const ImageColumns = ref([]);
const columns = ref([]);
const columnsFunction = ref([]); // 功能
const showPicker = ref(false);
const pockerIndex = ref(0);
// const data = ref([]);

watchEffect(
  async () => {
    if (model.value == "") {
      var loadCmdInfo = porps.loadCmdInfo[0].split("*");
      activeImage.value = porps.loadCmdInfo[1];
      var loadArr = [];
      loadCmdInfo.forEach((item) => {
        loadArr.push({
          image: "",
          title: item,
        });
      });
      ImageColumns.value = loadArr;
      titleColumns.forEach((item, index) => {
        if (index == 0) {
          item.value = columnIndex[porps.cmdCmdInfo[index]];
        } else if (index == 5) {
          var dataIndex = columnsCheckbitsIndex.indexOf(
            porps.cmdCmdInfo[index]
          );
          item.value = columnsCheckbits[dataIndex];
        } else {
          item.value = porps.cmdCmdInfo[index];
        }
      });
      setModel(activeImage.value);
    }
  },
  { flush: "post" }
);

watch(porps, async () => {
  status.value = porps.status;
  getData();
});

// 设置型号
const setModel = (num) => {
  activeImage.value = num;
  console.log(num);
  model.value = ImageColumns.value[num].title;
};

const getData = () => {
  var itemTitle = [];
  var info = porps.loadCmdInfo[0].split("*");
  titleColumns.forEach((item, index) => {
    var value = "";
    if (index == 0) {
      value = columnIndex.indexOf(item.value);
      itemTitle.push(value);
    } else if (index == 5) {
      var dataIndex = columnsCheckbits.indexOf(item.value);
      value = columnsCheckbitsIndex[dataIndex];
      itemTitle.push(value);
    } else {
      itemTitle.push(item.value);
    }
  });
  var it0 = itemTitle[0];
  itemTitle[0] = itemTitle[1];
  itemTitle[1] = it0;
  emit("comConfirm", { item: itemTitle, model: info.indexOf(model.value) });
};

// 显示选择器
const showPickerFn = (item) => {
  var num = item.tipsIndex;
  var value = item.value;
  pockerIndex.value = num;
  if (num == 1 || num == 2) {
    return;
  }
  switch (num) {
    case 1:
      columns.value = columnsCom;
      break;
    case 2:
      columns.value = columnsFunction.value;
      break;
    case 3:
      columns.value = columnsBps;
      break;
    case 4:
      columns.value = columnsDatabits;
      break;
    case 5:
      columns.value = columnsStopbits;
      break;
    case 6:
      columns.value = columnsCheckbits;
      break;
    case 7:
      columns.value = columnOilType;
      break;
  }
  defaultIndex.value = columns.value.indexOf(value);
  showPicker.value = true;
};

// picker 点击  确认
const onConfirm = (value) => {
  showPicker.value = false;
  let pocker = pockerIndex.value;
  titleColumns.forEach((item) => {
    if (item.tipsIndex == pocker) {
      item.value = value[0];
    }
  });
};

// 命名空间
defineComponent({
  name: "yunweibao-ComConfig",
});
</script>

<style scoped>
.fatherDiv {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.active {
  border: 1px solid #1989fa;
  overflow: hidden;
  color: #1989fa;
}
.divStyle {
  width: 28%;
  border: 1px solid none;
  border-radius: 5px;
  padding: 5px;
  animation: all 0.5;
}
.defultStyle {
  border: 1px solid #eff2f5;
  border-radius: 5px;
  overflow: hidden;
  padding: 5px;
}
.cell-info:first-child {
  margin-top: 10px;
}
.cell-group {
  margin-bottom: 10px;
}
</style>