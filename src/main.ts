import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
// 引入Element ui
import "element-plus/dist/index.css";
// 引入路由器
// import router from "./router"
// 引入仓库
import store from "./store";
const app = createApp(App);

app.use(store);
// app.use(router)
app.use(ElementPlus);

// 挂载
app.mount("#app");
