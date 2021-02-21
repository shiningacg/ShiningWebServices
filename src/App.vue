<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
import cookie from "js-cookie";

export default {
  name: 'App',
  data: () => ({
    //
  }),
  created() {
    // 注册token
    const token = cookie.get('token')
    if (token !== undefined && token !== "" ) {
      this.$store.commit("setToken",token)
    }
    // console.log(token)
  },
  mounted(){
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
