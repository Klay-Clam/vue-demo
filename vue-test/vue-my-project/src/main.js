// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/**
 * main.js 
 * 项目的入口文件
 */
import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App,
});
