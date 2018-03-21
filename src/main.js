// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue' //var vue=require('vue');
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import App from './App.vue'

Vue.use(ElementUI)
Vue.config.productionTip = false



Vue.config.productionTip = false
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.ajax = axios;
Vue.prototype.qs = qs;


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