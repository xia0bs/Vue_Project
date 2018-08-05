// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import rem from './components/common/static/js/rem.js'


import 'element-ui/lib/theme-chalk/index.css';
import 'reset-css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

Vue.prototype.axios = axios;
Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
