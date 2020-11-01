<template>
  <v-app-bar
      app
      :height="menu.height"
      :color="color"
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
            src=""
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
            :height="menu.height"
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
              :height="menu.height"
          >
            <span class="subtitle-1 font-weight-bold">登陆</span>
          </v-btn>
        </div>
        <div class="pl-8" v-show="true">
          <v-avatar
              :size="avatar.height"
              color="orange"
          >
            <span
                class="d-inline-block text-truncate"
                :style="{maxWidth: avatar.height*0.8 +'px'}"
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
      this.style = this.dark ? 'dark' : 'light'
      this.onScroll()
      window.onscroll = this.onScroll
      if (process.env.NODE_ENV == "development") {
        this.menu = mock.menu
        this.user = mock.user
      }
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
        user: {},
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
      }
    }
  }
</script>
