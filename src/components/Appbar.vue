<template>
  <v-app-bar
      app height="60" :color="color" :flat="getFlat()" dark
  >
    <v-container class="d-flex align-center">
      <!--logo栏目-->
      <div class="d-flex align-center" v-if="false">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src=""
            transition="scale-transition"
            width="40"
        />
      </div>
      <v-spacer></v-spacer>
      <!--菜单栏-->
      <div class="pl-4 pr-4">
        <v-btn text height="60" @click="$router.push('/')">
          <v-icon>mdi-home</v-icon>
          <span class="subtitle-1 font-weight-bold ml-2">首页</span>
        </v-btn>
      </div>
      <!--分割线-->
      <div style="border: 1px solid rgba(255,255,255,0.8);height: 30px;"></div>
      <!--用户栏-->
      <div class="pa-2 pr-4">
        <!--未登陆-->
        <div class="pl-2" v-show="!isLogin">
          <v-btn text dark height="60" @click="loginClick">
            <span class="subtitle-1 font-weight-bold">登陆</span>
          </v-btn>
        </div>
        <div class="pl-8" v-show="isLogin">
          <v-avatar size="36" color="orange" @click="avatarClick()" style="cursor: pointer">
            <v-img src="/avatar.png"></v-img>
          </v-avatar>
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>
<script>
  import cookie from "js-cookie"
  import { Empty } from "google-protobuf/google/protobuf/empty_pb"
  import {DownloadRequest} from "@/utils/proto/file/file.v2_pb";
  export default {
    name:"Appbar",
    mounted() {
      // 滑动块移动时变化
      this.style = this.dark ? 'dark' : 'light'
      this.onScroll()
      window.onscroll = this.onScroll
      this.loadAccountInfo()
    },
    props: {
      // 色调
      dark: {
        type: Boolean,
        default: true,
      },
      // 背景透明度转化高度
      transform: {
        type: [String,Number],
        default: 100
      },
      // 是否在特定高度进行透明处理
      opacity: {
        type: Boolean,
        default: true
      },
    },
    computed: {
      isLogin() {
        return this.$store.state.token !== "" && this.$store.state.token !== undefined
      }
    },
    data() {
      return {
        avatar: {
          height: 36,
        },
        menu: {
          height: 60,
          items: [],
        },
        style: '',
        color: '',
        user: {
          avatar: "",
          name: ""
        },
        scrollbarPosition: 0,
      }
    },
    watch: {
      scrollbarPosition() {
        this.color = this.getColor(this.style)
        this.setOpacity()
      },
      style() {
        this.color = this.getColor(this.style)
      }
    },
    methods: {
      getColor(style) {
        switch (style) {
          case 'dark':
            return "#232A34"
          case 'light':
            return '#fff'
          case 'opacity':
            return "rgba(0,0,0,0.2)"
        }
        return "#232A34"
      },
      onScroll() {
        this.scrollbarPosition = window.pageYOffset
      },
      setOpacity() {
        // 如果是不变化模式，不会进行调整
        if (this.opacity === false) {
          return
        }
        // 超过变化高度
        if( this.scrollbarPosition > this.transform) {
          return
        }
        this.color = this.getColor('opacity')
      },
      getFlat() {
        return this.style === 'opacity' ? false : true
      },
      avatarClick() {
        this.$router.push("/dashboard")
      },
      loginClick() {
        this.$router.push("/login")
      },
      getToken() {
        if (this.$store.state.token === "") {
          return cookie.get('token')
        }
        return this.$store.state.token
      },
      async loadAccountInfo() {
        try {
          const user = await this.$client.userInfoPage(new Empty(),{authority:this.getToken()})
          let avatar = "/avatar.png"
          if (user.getPublic().getAvatar() !== "") {
            avatar = await this.getFileUrl(user.getAvatar())
          }
          this.user = {
            avatar: avatar,
            name: user.getPublic().getNickname()
          }
        } catch (e) {
          console.log(e)
          this.user = {
            avatar: "/avatar.png",
            name: ""
          }
        }
      },
      async getFileUrl(fid) {
        const req = new DownloadRequest()
        req.setFid(fid)
        return this.$client.download(req,{}).then(res => {
          return res.getUrl()
        }).catch(err => {
          console.log(err)
          return ""
        })
      }
    }
  }
</script>
