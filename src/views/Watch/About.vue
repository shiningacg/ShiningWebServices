<template>
  <v-card flat class="pa-4">
    <v-container fluid class="pa-0 d-flex">
      <div class="cover">
        <v-card>
          <v-img
              :src="about.cover"
              height="230px"
              width="160px"
          ></v-img>
        </v-card>
      </div>
      <div class="pl-4 d-flex flex-column">
        <!--标题-->
        <div class="subtitle-1 font-weight-bold d-flex">
          <span>{{about.title}}</span>
          <div class="spacer"></div>
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
        <div class="spacer"></div>
        <!--底部菜单栏-->
        <!--上传者的狗头-->
        <div class="d-flex align-end pr-6" v-if="true">
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
                      src="https://prince.kingthemes.org/wp-content/uploads/2017/01/473990304_1280x720-1-150x150.jpg"
                  ></v-img>
                </v-avatar>
              </template>
              <!--贡献介绍-->
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
      }
    }
  }
</script>