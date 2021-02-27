<template>
  <v-card flat class="pa-4">
    <v-container fluid class="pa-0 d-flex">
      <div class="cover">
        <v-card>
          <v-img
              :src="about.cover"
              height="210px"
              width="300px"
          ></v-img>
        </v-card>
      </div>
      <div class="pl-4 d-flex flex-column flex-grow-1">
        <!--标题-->
        <div class="subtitle-1 font-weight-bold d-flex">
          <span>{{about.title}}</span>
          <div class="flex-grow-1"></div>
          <div class="left-btn pr-6 d-flex align-center">
            <v-btn elevation="0" color="#F06292" dark><v-icon>mdi-star-outline</v-icon><span class="font-weight-bold">订阅</span></v-btn>
          </div>
        </div>
        <div class="grey--text caption text--darken-1 font-weight-bold">
          <span>{{about.view}} 次播放</span>
        </div>
        <div class="body-2 font-weight-bold">
          <span>{{about.introduction}}</span>
        </div>
        <!--底部菜单栏-->
        <div class="flex-grow-1"></div>
        <!--上传者的狗头-->
        <div class="d-flex pr-6" v-if="true">
          <div class="more">
            <div class="pr-6">
              <v-btn rounded color="green" dark class="mr-2">
                <v-icon class="pr-1">mdi-book-open-variant</v-icon><span>萌娘百科</span>
              </v-btn>
              <v-btn rounded color="primary">
                <v-icon class="pr-1">mdi-cloud-download</v-icon><span>下载</span>
              </v-btn>
            </div>
          </div>
          <div class="spacer"></div>
          <!--TODO:hover的时候显示简介-->
          <div style="border-radius: 26px;" class="pa-1 grey lighten-2">
            <!--TODO:添加点击的重新导航-->
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-avatar
                    v-on="on"
                    color="orange"
                    size="36"
                >
                  <v-img
                      src="/avatar.png"
                  ></v-img>
                </v-avatar>
              </template>
              <!--贡献介绍-->
              <div>shining</div>
              <div>创建了该条目</div>
              <div>上传了 5 个视频</div>
            </v-tooltip>
          </div>
        </div>
      </div>
    </v-container>
  </v-card>
</template>
<script>
  import is_dev_env from "../../utils/is_dev_env";
  import { CollectionPageRequest } from "@/utils/proto/public_pb"
  import mock from "../../mock/collection.json"
  export default {
    name:"About",
    components: {},
    props: {
      input: {}
    },
    mounted() {
      if (is_dev_env()) {
        this.adapter(mock.video)
        return
      }
      this.adapter(this.input)
    },
    data() {
      return {
        about: {
          cover: "",
          title: "",
          view: 100,
          introduction: "",
          posters:[{
            name:"",
            avatar:"",
            support:""
          }],
        },
      }
    },
    methods: {
      adapter(collection) {
        this.about = {
          cover: collection.cover,
          title: collection.name,
          view: collection.view,
          introduction: collection.introduction,
          posters: collection.posters,
        }
      },
      async adapterGrpc(collection) {
        this.about = {
          cover: await this.getFileUrl(collection.getCover()),
          title: collection.getTranslation(),
          view: collection.getData().getView(),
          introduction: collection.getProfile(),
          posters: [{
              "name": "shining",
              "avatar": "/avatar.png",
              "support": ""
            }]
        }
      },
      getCollection(cid) {
        const req = new CollectionPageRequest()
        req.setUuid(cid)
        return this.$client.collectionPage(req,{authority:this.$store.state.token})
      },
      getFileUrl(fid) {

      }
    }
  }
</script>
