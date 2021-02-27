<template>
  <v-container class="pa-0 pt-2 pb-2">
    <v-card flat>
      <div class="pa-2 pb-0">
        <span class="title">{{title}}</span>
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
                    :src="item.cover"
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
  import { VideoPageRequest } from "@/utils/proto/public_pb";
  import DPlayer from 'dplayer';
  import { DownloadRequest } from "@/utils/proto/file/file.v2_pb";
  import {CollectionPageRequest} from "@/utils/proto/public_pb";
  export default {
    name: "player",
    components: {},
    props: {
      input: {}
    },
    async mounted() {
      const container = this.$refs.player
      this.dp = new DPlayer({
        container: container,
        video: {
          url: ""
        },
      })
      await this.loadCollection(this.currentCollectionId)
      await this.adapterGrpc(this.project)
      // 测试数据
      this.switchVideo(this.currentVideo)
    },
    data() {
      return {
        project: undefined,
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
    computed: {
      currentCollectionId() {
        if (this.$route.params.id === "") {
          return undefined
        }
        return this.$route.params.id
      }
    },
    methods: {
      async loadCollection(collectionId) {
        const req = new CollectionPageRequest()
        req.setUuid(collectionId)
        this.project = await this.$client.collectionPage(req)
      },
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
      async adapterGrpc(collectionPageResponse) {
        console.log(collectionPageResponse)
        const cl = collectionPageResponse.getCollections()
        this.name = cl.getTranslation()
        this.selector = []
        for (const chapter of cl.getVideosList()) {
          // 查找视频
          const res = await this.getVideo(chapter)
          const vdo = res.getVideo()
          console.log(vdo)
          this.selector.push({vid:vdo.getUuid(),name:vdo.getName(),url:await this.getFileUrl(vdo.getFile()),cover:""})
        }
        if (this.selector.length == 0) {
          console.error("没有任何的视频")
          return
        }
        this.currentVideo = this.selector[0]
        this.title = this.getTitle()
      },
      getTitle() {
        return this.name +" "+ this.currentVideo.name
      },
      getVideo(vid) {
        const req = new VideoPageRequest()
        req.setUuid(vid)
        return this.$client.videoPage(req,{authority:this.$store.state.token})
      },
      async getFileUrl(fid) {
        const req = new DownloadRequest()
        req.setFid(fid)
        return this.$client.download(req,{}).then(res => {
          return res.getUrl()
        }).catch(err => {
          console.error(err)
          return ""
        })
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
