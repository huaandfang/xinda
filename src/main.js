// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


// import Vue from 'vue' //var vue=require('vue');
// import ElementUI from 'element-ui'
// import qs from 'qs'
// import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(ElementUI)
Vue.config.productionTip = false



Vue.config.productionTip = false
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.ajax = axios;
Vue.prototype.qs = Qs;
// Vue.prototype.inpu = function (e, function1) {
//   //debounce机制
//   var this1 = this;
//   this.time[this.rq] = new Date().getTime();
//   (function (a) {
//     this1.rq++;
//     this1.timeId = setTimeout(function () {
//       if (this1.time[a + 1] && this1.time[a + 1] - this1.time[a] < 500) {
//         return;
//       } else {
//         function1();
//       }
//     }, 500);
//   })(this.rq);
// };


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
