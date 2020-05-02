// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';

const socket = io('http://45a2f43f.ngrok.io');

import store from './store/store';

import '../config/fontawesome';
import "vue-slider-component/theme/default.css";

Vue.config.productionTip = false
Vue.use(Buefy);
Vue.use(VueSocketIOExt, socket);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
