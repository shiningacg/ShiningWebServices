<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
import cookie from "js-cookie";
import {GetInfoRequest} from "@/utils/proto/user/user_pb";

export default {
  name: 'App',
  data: () => ({
    //
  }),
  async created() {
    // console.log(token)
    const req = new GetInfoRequest()
    // 如果查询出现错误，则说明token无效
    await this.$client.userInfoPage(req, {authority: cookie.get('token')})
        .catch(err => {
          cookie.remove('token')
        })
    // 注册token
    const token = cookie.get('token')
    if (token !== undefined && token !== "") {
      this.$store.commit("setToken", token)
    }
  },
  mounted() {
    if (this._isMobile()) {
      this.$router.push("/error/device-not-support")
    }
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag
    }
  }
};
</script>
