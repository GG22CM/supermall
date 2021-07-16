import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store";
import toast from 'components/common/toast';
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.use(toast)

Vue.use(VueLazyload,{
  preLoad: 1.3,
  loading: require("./assets/img/home/xiaoFang.png"),
  attempt: 3
})

FastClick.attach(document.body);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

Vue.prototype.$bus=new Vue();
