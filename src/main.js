import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index';
import '../mock/mockServe';
import { i18n } from './locales/setupI18n';
import 'vant/lib/index.css';
// eslint 严格校验 + ts 语法 + setup语法糖
// import { useI18n } from "vue-i18n";
// const { locale } = useI18n();
// locale.value = "zh";
createApp(App).use(i18n).use(router).mount('#app')


