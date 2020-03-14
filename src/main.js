// 导入文件
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 创建全局基地址
axios.defaults.baseURL = 'https://autumnfish.cn'

// 注册
Vue.prototype.$axios = axios
Vue.use(ElementUI);


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
