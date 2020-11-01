<template>
  <v-card class="pa-4">
    <v-row>
      <!--封面配置-->
      <v-col cols="12">
        <div class="grey--text">封面:</div>
        <v-row>
          <v-col cols="12" md="6" lg="6">
            <v-card flat>
              <Uploader ref="uploader" :src="cover.current" v-model="pic"></Uploader>
              <div class="text-center pt-2 ">当前封面</div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <!--信息修改-->
      <v-col cols="12" class="pb-0">
        <v-row>
          <!--基本信息修改-->
          <v-col cols="12" md="6" lg="6">
            <v-row>
              <v-col cols="12">
                <span class="grey--text">作品信息:</span>
              </v-col>
              <v-col cols="12" class="d-flex justify-center pb-0">
                <v-text-field
                    label="原名称"
                    :placeholder="info.origin"
                    outlined
                    color="blue"
                    background-color="white"
                    append-outer-icon="mdi-information"
                    @click:prepend=""
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" class="d-flex justify-center pb-0">
                <v-text-field
                    label="中文译名"
                    :placeholder="info.translation"
                    class="pr-8"
                    outlined
                    color="blue"
                    background-color="white"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <!--附加信息修改-->
          <v-col cols="12" md="6" lg="6">
            <v-row>
              <v-col cols="12">
                <span class="grey--text">详细信息:</span>
              </v-col>
              <v-col cols="12" class="d-flex justify-center pb-0">
                <v-text-field
                    label="萌娘百科"
                    :placeholder="info.sources.moegirl"
                    outlined
                    color="blue"
                    background-color="white"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <!--内容修改-->
      <Chapters v-model="videos"></Chapters>
    </v-row>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn elevation="0" color="primary">
        <span class="pa-2">提交修改</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Uploader from "@/components/Uploader";
import Chapters from "@/views/Dashboard/Manage/Content";

export default {
  name: "Editor",
  components: {
    Uploader,
    Chapters
  },
  created() {
    this.loadCollection()
  },
  data() {
    return {
      pic: undefined,
      cover: {
        current: "",
        temp: ""
      },
      info: {
        origin: "",
        translation: "",
        sources: {
          moegirl: "https://zh.moegirl.org.cn/"
        }
      },
      videos: [{
        vid: '',
        info: {
          title: '',
          profile: '',
        }
      }],
    }
  },
  watch: {
    '$store.state.projectsTracker'() {
      this.loadCollection()
    }
  },
  methods: {
    transformVideo(collection) {
      const videos = []
      for (const vdo of collection.videos) {
        videos.push({
          vid: vdo.vid,
          title: vdo.info.title,
          profile: vdo.info.profile,
        })
      }
      return videos
    },
    loadCollection() {
      const cid = this.$route.params['id']
      const cl = this.$store.state.projects.get(cid)
      if (cl === undefined) {
        console.log("尚未初始化")
      }
      this.adapter(cl)
    },
    async adapter(collection) {
      if (collection === undefined) {
        return
      }
      const file = await this.$client.File.Download(collection.appearance.cover)
      this.cover.current = file.url
      this.info.origin = collection.detail.origin
      this.info.translation = collection.detail.translation
      this.videos = this.transformVideo(collection)
    },
    resetPic() {
      this.$refs.uploader.reset()
    }
  }
}
</script>
