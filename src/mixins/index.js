import { ref } from 'vue';
import { Toast } from "vant";
import { useI18n } from 'vue-i18n';
import TabHeaders from "@/components/tab.vue";
import StickyBottom from "@/components/stickyBottom.vue";
import router from "@/router";
import { useRoute } from "vue-router";
import { postAN } from "@/utlis/AdApi";
// 

// 引用 modules 下所有js文件
// function modulesFilesFn() {
//   const modulesFiles = require.context('./modules', true, /\.js$/);
//   let res_jsFiles = {};
//   modulesFiles.keys().forEach((item) => {
//     let comp = modulesFiles(item);
//     let name = comp.default.name;
//     res_jsFiles[name] = comp.default;
//   });
//   return res_jsFiles;
// }



export default function () {
  const { t,locale } = useI18n();
  // 安卓成功失败回调
  const callJSResult_Status = (str) => {
    if (str.indexOf("Success") !== -1) {
      Toast.success(t("toast[1]"));
    } else {
      Toast.fail(t("toast[2]"));
    }
  };

  const stickyBottom = () => {
    const disabled = ref(false);
    const loading = ref(false);
    // 设置禁用
    const setDisabled = () => {
        disabled.value = true;
        loading.value = true;
        setTimeout(() => {
            disabled.value = false;
            loading.value = false;
        }, 1000);
    };
    return {
        setDisabled,
        loading,
        disabled
    }
  }

  return {
    postAN,
    router,
    TabHeaders,
    StickyBottom,
    locale,
    t,
    useRoute,
    callJSResult_Status,
    stickyBottom,
    // ...modulesFilesFn()
  }
}