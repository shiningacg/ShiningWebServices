<template>
  <v-container class="pa-0 pt-2 pb-2">
    <v-card flat>
      <div ref="player"></div>
      <div class="bottom-menu">
        <div class="top-menu">
        </div>
        <div class="introduction">
        </div>
        <div class="poster-info">

        </div>
        <div class="selector d-flex align-center">
          <div>
            <v-btn class="pa-0" height="60" @click="scroll(-208)" text>
              <v-icon size="48">mdi-chevron-left</v-icon>
            </v-btn>
          </div>
          <div ref="scroll" class="wrapper pt-2 pb-2 d-flex" style="width: 100%;overflow: scroll;">
            <v-card class="ml-1 mr-1" v-for="(i) in [1,2,3,4,5,6]">
              <v-img
                  src="https://picsum.photos/510/300?random"
                  height="120"
                  width="200"
              >
                <v-sheet class="transparent">
                  <div>
                    <span>11</span>
                  </div>
                </v-sheet>
              </v-img>
            </v-card>
          </div>
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
      cid: Number,
    },
    mounted() {
      if (is_dev_env()) {
        this.colleciton = mock
      }
      const container = this.$refs.player
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
        colleciton: {
          cid: 0,
          poster: {
            name: "",
            avatar: ""
          },
          chapter: [
            {
            vid: 0,
            name: "",
            url: "",
            watched: 0
            }
          ]
        }
      }
    },
    methods: {
      scroll(px) {
        const el = this.$refs.scroll
        let left = el.scrollLeft
        el.scrollTo({left:left+px,behavior:"smooth"})
        console.log(el.scrollWidth,el.width)
      }
    }
  }
</script>

<style scoped>
  ::-webkit-scrollbar {/*隐藏滚轮*/
    display: none;
  }
  .wrapper {
    scrollbar-width: none;
  }
</style>