import SDK from '../utils/sdk/index';
import cookie from "js-cookie"

export default {
  install(Vue, options) {
    Vue.prototype.$client = new SDK("http://127.0.0.1:8000")
    // 注入token
    let token = cookie.get('token')
    console.log(token)
    // TODO：测试token是否有效
    if (token !== undefined) {
      Vue.prototype.$client.SetToken(token)
    }
  }
};
