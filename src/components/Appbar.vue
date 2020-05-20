<template>
  <v-app-bar
      app
      :height="height"
      :color="getColor()"
      :flat="getFlat()"
      dark
  >
    <v-container class="d-flex align-center">
      <!--logo栏目-->
      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
        />
      </div>
      <v-spacer></v-spacer>
      <!--菜单栏-->
      <div class="pl-4 pr-4">
        <v-btn
            target="_blank"
            text
            :height="height"
            :href="item.url"
            v-for="(item,key) in menu" :key="key"
        >
          <v-icon>{{item.icon}}</v-icon>
          <span class="subtitle-1 font-weight-bold ml-2">{{item.name}}</span>
        </v-btn>
      </div>
      <!--分割线-->
      <div style="border: 1px solid rgba(255,255,255,0.8);height: 30px;"></div>
      <!--用户栏-->
      <div class="pa-2 pr-4">
        <!--未登陆-->
        <div class="pl-2" v-show="false">
          <v-btn
              text
              dark
              :height="height"
          >
            <span class="subtitle-1 font-weight-bold">登陆</span>
          </v-btn>
        </div>
        <div class="pl-8" v-show="true">
          <v-avatar
              :size="height*0.6"
              color="orange"
          >
            <span
                class="d-inline-block text-truncate"
                :style="{maxWidth: height*0.5 +'px'}"
            >{{user.name}}</span>
          </v-avatar>
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>
<script>
  import mock from "../mock/appbar.json"
  export default {
    name:"Appbar",
    mounted() {
      // 滑动块移动时变化
      if (process.env.NODE_ENV == "development") {
        this.menu = mock.menu
        this.user = mock.user
      }
      window.onscroll = this.onScroll
    },
    data() {
      return {
        height: 60,
        type: "light",
        menu: [],
        user: {},
      }
    },
    methods: {
      onScroll() {
        const changeHeight = 100
        const y = this.getScrollbarPosition()
        if( y > 100) {
          this.type = "dark"
        } else {
          this.type = "light"
        }
      },
      getScrollbarPosition() {
        return window.pageYOffset
      },
      getColor() {
        if (this.type == "dark") {
          return "#256D99"
        } else if (this.type == "light") {
          return "transparent"
        }
      },
      getFlat() {
        return this.type == "light" ? true : false
      }
    }
  }
</script>