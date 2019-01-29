import Vue from 'vue'
import App from './App.vue'
import router from './router'
//1.引入mint-ui样式文件
import'mint-ui/lib/style.css'

Vue.config.productionTip = false
//2.引入mui库样式文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
//3.引入mint-ui组件 Header
import{Header,Swipe,SwipeItem} from "mint-ui"
//4.注册Header组件
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
import axios from "axios"
axios.defaults.withCredentials=true;
Vue.prototype.axios = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
