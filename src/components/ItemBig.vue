<template>
  <v-container fluid class="pa-0 pt-2 pb-2">
    <v-card height="290" max-width="1160" class="pa-3" style="border-radius: 12px;" flat>
      <v-row class="pa-0">
        <!--图片存放-->
        <v-col class="pa-0 pl-3" cols="5">
          <div style="border-radius: 12px;overflow: hidden;">
            <v-img
                :src="cover"
                height="266"
                :aspect-ratio="2/1"
                cover
            ></v-img>
          </div>
        </v-col>
        <!--信息布局-->
        <v-col class="pa-0 pl-4 d-flex flex-column" cols="7">
          <!--title-->
          <div class="mb-4 mt-4 black--text text--lighten-2 title"
               style="font-family: 'Source Han Sans', 'Nunito',sans-serif  !important;">
            {{ title }}
          </div>
          <!--introduce-->
          <div class="grey--text body-2 stretch pr-4"
               style="font-family: 'Source Han Sans', 'Nunito',sans-serif  !important;">
            {{ introduction }}
          </div>
          <!--footer-->
          <div class="mt-auto d-flex" style="font-family: 'Source Han Sans', 'Nunito',sans-serif  !important;">
            <!--TODO:添加多用户显示和工作信息-->
            <div class="d-flex" v-if="isShowUser()">
              <!--头像及更新信息显示-->
              <v-avatar color="teal" size="44">
                <v-img :src="posters[0].avatar"></v-img>
              </v-avatar>
              <div class="pl-2">
                <div>{{ posters[0].name }}</div>
                <div class="grey--text text--lighten-1 caption">{{ unix_time()(last_update) }}</div>
              </div>
            </div>
            <div class="spacer"></div>
            <!--底部按钮组-->
            <div class="d-flex align-end pr-6" v-if="true">
              <v-btn rounded color="primary" class="mr-2" @click="downloadClick">
                <v-icon class="pr-1">mdi-cloud-download</v-icon>
                <span>下载</span>
              </v-btn>
              <v-btn rounded color="pink" dark @click="playClick">
                <v-icon class="pr-1">mdi-play</v-icon>
                <span>播放</span>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import unix_time from "@/utils/unix_time";
import mock from "@/mock/collection.json"
import is_dev_env from "@/utils/is_dev_env";

export default {
  name: "item-card",
  props: {
    input: {}
  },
  data() {
    return {
      title: "",
      cover: "",
      introduction: "",
      posters: [{
        name: "",
        avatar: "",
        support: ""
      }],
      sources: {
        download: "",
        watch: "",
      },
      last_update: 0,
    }
  },
  created() {
    if (is_dev_env() && this.input === undefined) {
      this.adapter(mock.video)
      return
    }
    this.adapterGrpc(this.input)
  },
  methods: {
    isShowUser() {
      return this.posters !== undefined && this.posters.length !== 0
    },
    adapter(collection) {
      this.title = collection.name
      this.cover = collection.cover
      this.introduction = collection.introduction
      this.posters = collection.posters
      this.last_update = collection.last_update
      this.sources = collection.sources
    },
    adapterGrpc(grpc) {
      this.title = grpc.title
      this.cover = grpc.cover
      this.introduction = grpc.introduction
      this.posters = grpc.posters
      this.last_update = grpc.last_update
      this.sources = grpc.sources
    },
    unix_time() {
      return unix_time
    },
    downloadClick() {
      if (this.sources.download === "") {
        window.alert("内容还没有准备好～")
      }
      this.$router.push(this.sources.download)
    },
    playClick() {
      if (this.sources.watch === "") {
        window.alert("内容还没有准备好～")
      }
      this.$router.push(this.sources.watch)
    }
  }
}
</script>
