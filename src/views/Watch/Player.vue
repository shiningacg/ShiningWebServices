<template>
  <v-container class="pa-0 pt-2 pb-2">
    <v-card flat>
      <div class="pa-2 pb-0">
        <span>{{title}}</span>
      </div>
      <div ref="player"></div>
      <div class="bottom-menu">
        <div class="top-menu">
        </div>
        <div class="introduction">
        </div>
        <div class="poster-info">
        </div>
        <!--选集部分-->
        <div class="selector d-flex align-center">
          <!--左侧按钮-->
          <div>
            <v-btn class="pa-0" height="60" @click="scroll(-208)" text>
              <v-icon size="48">mdi-chevron-left</v-icon>
            </v-btn>
          </div>
          <div ref="scroll" class="wrapper pt-2 pb-2 d-flex" style="width: 100%;overflow: scroll;">
              <v-card class="ml-1 mr-1 bottom" @click="switchVideo(item)" v-for="(item,key) in selector" :key="key">
                <v-img
                    src="https://picsum.photos/510/300?random"
                    height="120"
                    width="200"
                    class="v-bottom-navigation"
                >
                  <v-sheet class="d-flex align-end transparent" style="height: 100%">
                    <div class="d-flex justify-center" style="background-color: rgba(0,0,0,.5);width: 100%">
                      <span :style="'color:'+(currentVideo.vid==item.vid?'#0064f9':'white')">{{item.name}}</span>
                    </div>
                  </v-sheet>
                </v-img>
              </v-card>
          </div>
          <!--右侧按钮-->
          <div>
            <v-btn class="pa-0" height="60" @click="scroll(208)" text>
              <v-icon size="48">mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script>
  import mock from "../../mock/collection.json";
  import is_dev_env from "../../utils/is_dev_env";
  import DPlayer from 'dplayer';
  export default {
    name: "player",
    components: {},
    props: {
      input: {}
    },
    mounted() {
      if (is_dev_env() && this.input == undefined) {
        this.adapter(mock.video)
      } else {
        this.adapter(this.input)
      }
      const container = this.$refs.player
      // 测试数据
      this.dp = new DPlayer({
        container: container,
        video: {
          url: "http://speed.shiningacg.fun/thankyou.mp4",
        },
      });
    },
    data() {
      return {
        dp : {},
        currentVideo: {
          vid: 0,
          cover:"",
          name:"",
          url: ""
        },
        name: "",
        title: "",
        selector: [{
          vid: 0,
          cover:"",
          name:"",
          url: ""
        }],
        comments:[]
      }
    },
    watch: {
      currentVideo() {
        this.title = this.getTitle()
      }
    },
    methods: {
      adapter(collection) {
        this.name = collection.name
        this.selector = []
        for (let chapter of collection.chapter) {
          this.selector.push({vid:chapter.vid,name:chapter.name,url:chapter.url,cover:collection.cover})
        }
        console.log(this.selector)
        this.currentVideo = this.selector[0]
        this.title = this.getTitle()
      },
      getTitle() {
        return this.name +" "+ this.currentVideo.name
      },
      scroll(px) {
        const el = this.$refs.scroll
        let left = el.scrollLeft
        el.scrollTo({left:left+px,behavior:"smooth"})
        console.log(el.scrollWidth,el.width)
      },
      switchVideo(video) {
        this.currentVideo = video
        this.dp.switchVideo({url:video.url})
      }
    }
  }
</script>

<style scoped>
  .bottom {
    cursor: pointer;
  }
  ::-webkit-scrollbar {/*隐藏滚轮*/
    display: none;
  }
  .wrapper {
    scrollbar-width: none;
  }
</style>