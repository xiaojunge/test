import Vue from 'vue'
import App from './App.vue'
import router from './router'
import header from "./components/header"
import ElementUI from 'element-ui';       //引入elementui
import 'element-ui/lib/theme-chalk/index.css'; //引入elementui样式
Vue.use(ElementUI);   //将element挂载到Vue
Vue.config.productionTip = false
Vue.component("my-header", header);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')