import Vue from 'vue'
import App from './App'
import router from "./router";
import store from './store'

Vue.config.productionTip = false

// 事件总线所需创建的一个新Vue对象，并向其原型添加一个$bus
Vue.prototype.$bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
