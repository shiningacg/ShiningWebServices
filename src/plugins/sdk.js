import Vue from 'vue';
import SDK from '../utils/sdk/index';

export default {
  install(Vue, options) {
    Vue.prototype.$client = new SDK("http://39.105.169.231:8000")
  }
};
