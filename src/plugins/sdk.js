import { PublicPromiseClient } from '@/utils/proto/public_grpc_web_pb';
import cookie from "js-cookie"
export default {
  install(Vue, options) {
    // 注册token
    const token = cookie.get('token')
    if (token !== undefined && token !== "" ) {
      Vue.prototype.$store.commit("setToken")
    }
    Vue.prototype.$client = new PublicPromiseClient("http://192.168.1.14:9090",null,null)
  }
};
