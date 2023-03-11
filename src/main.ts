import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as echarts from "echarts";
import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

app.config.globalProperties.$echarts = echarts;
app.use(ElementPlus);

app.mount('#app');