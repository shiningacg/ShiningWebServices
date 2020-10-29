<template>
  <v-card class="pa-4">
    <v-row>
      <!--封面配置-->
      <v-col cols="12">
        <div class="grey--text">封面:</div>
        <v-row>
          <v-col cols="12" md="6" lg="6">
            <v-card flat>
              <Uploader ref="uploader" :src="cover.current" @selected="setPic()"></Uploader>
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
      <v-col cols="12" class="pt-0">
        <div class="d-flex">
          <div>内容：</div>
          <div class="spacer"></div>
          <div>
            <v-btn elevation="0" color="green" dark>
              <v-icon>mdi-plus</v-icon>
              添加
            </v-btn>
          </div>
        </div>
        <v-row class="pt-4">
          <!--TODO:自动扩大-->
          <v-col md="1" v-for="i in 5" :key="i">
            <v-btn elevation="0" color="primary"><span class="text-truncate caption font-weight-bold">第193话</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Uploader from "@/components/Uploader";

export default {
  name: "Editor",
  components: {
    Uploader
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
      }
    }
  },
  watch: {
    '$store.state.projectsTracker'() {
      this.loadCollection()
    }
  },
  methods: {
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
    },
    setPic(file) {
      console.log(file)
      this.pic = file
    },
    resetPic() {
      this.$refs.uploader.reset()
    }
  }
}
</script>
