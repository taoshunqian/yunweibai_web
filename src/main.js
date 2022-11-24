import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index';
import '../mock/mockServe';
import { setupI18n } from './locales/setupI18n';
import 'vant/lib/index.css';
// eslint 严格校验 + ts 语法 + setup语法糖

createApp(App).use(setupI18n).use(router).mount('#app')
