import { PublicPromiseClient } from '@/utils/proto/public_grpc_web_pb';
import cookie from "js-cookie"
export default {
  install(Vue, options) {
    Vue.prototype.$client = new PublicPromiseClient("http://192.168.1.14:9090",null,null)
  }
};
