<template>
  <v-card class="pa-4">
    <v-row>
      <!--封面配置-->
      <v-col cols="12">
        <div class="grey--text">封面:</div>
        <v-row>
          <v-col cols="12" md="6" lg="6">
            <v-card flat>
              <Uploader ref="uploader" :src="cover.url" v-model="pic"></Uploader>
              <div class="text-center pt-2 ">当前封面</div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <!--信息修改-->
      <v-col cols="12" class="pb-0">
        <v-row>
          <!--基本信息修改-->
          <v-col cols="12">
            <v-row>
              <v-col cols="12">
                <span class="grey--text">番剧信息:</span>
              </v-col>
              <v-col cols="6" class="d-flex justify-center pb-0" md="6" sm="12">
                <v-text-field
                    label="中文译名"
                    :placeholder="info.translation"
                    v-model="translation"
                    outlined
                    color="blue"
                    background-color="white"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" class="pt-4">
                <v-textarea
                    filled
                    name="profile"
                    rounded
                    label="简介"
                    :placeholder="info.profile"
                    v-model="profile"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-col>
          <!--附加信息修改-->
          <v-col cols="12" md="6" lg="6" v-if="false">
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
      <Chapters v-model="videos" @saved="videoInfoSaved"></Chapters>
    </v-row>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn elevation="0" color="primary" @click="submitEditInfo">
        <span class="pa-2">提交修改</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Uploader from "@/components/Uploader";
import Chapters from "@/views/Dashboard/Manage/Content";
import is_dev_env from "@/utils/is_dev_env";
import {CollectionPageRequest,VideoPageRequest} from "@/utils/proto/public_pb";
import {DownloadRequest, UploadRequest} from "@/utils/proto/file/file.v2_pb"
import {EditCollectionRequest} from "@/utils/proto/watch/watch_pb"
import axios from "axios";

export default {
  name: "Editor",
  components: {
    Uploader,
    Chapters
  },
  created() {
    // 清空一些数据
    this.videos = []
    this.editValue = []
    this.loadCollection()
  },
  data() {
    return {
      pic: undefined,
      cover: {
        id: "",
        url: "",
      },
      info: {
        translation: "",
        profile: "",
        sources: {
          moegirl: "https://zh.moegirl.org.cn/"
        }
      },
      videos: [{
        vid: "",
        title: "",
        profile: "",
      }],
      // editTable 视频修改部分的东西
      editValue: [{
        vid: "",
        title: "",
        profile: "",
      }],
      translation: "",
      profile : "",
    }
  },
  watch: {
    // '$store.state.projectsTracker'() {
    //   this.loadCollection()
    // }
  },
  computed: {
    collectionId() {
      return this.$route.params['id']
    }
  },
  methods: {
    videoInfoSaved(editValue) {
      this.editValue = editValue.slice(0)
    },
    async transformVideo(videoIds) {
      let videos = []
      let promises = []
      for (const vid of videoIds) {
        const pr = this.getVideo(vid).then(res => {
          res = res.getVideo()
          videos.push({
            vid: res.getUuid(),
            title: res.getName(),
            profile: "",
          })
        })
        promises.push(pr)
      }
      // 一定要等待完成再传数据出去
      await Promise.all(promises)
      return videos
    },
    async loadCollection() {
      const cid = this.$route.params['id']
      // TODO:使用缓存
      // const cl = this.$store.state.projects.get(cid)
      // if (cl === undefined) {
      //   console.log("尚未初始化")
      // }
      // this.adapter(cl)
      const req = new CollectionPageRequest()
      req.setUuid(cid)
      const res = await this.$client.collectionPage(req, {authority: this.$store.state.token})
      await this.adapterGrpc(res.getCollections())

    },
    async adapterGrpc(grpc) {
      const req = new DownloadRequest()
      req.setFid(grpc.getCover())
      const file = await this.$client.download(req, {authority: this.$store.state.token})
          .then(res => res.getUrl())
      this.cover.id = grpc.getCover()
      this.cover.url = file
      this.info.origin = grpc.getOrigin()
      this.info.translation = grpc.getTranslation()
      this.info.profile = grpc.getProfile()
      // 通过id查询vdo
      this.videos = await this.transformVideo(grpc.getVideosList())
      // 加载editvalue
      this.adapterEditValue(this.videos)
    },
    adapterEditValue(videos) {
      videos.forEach(val => this.editValue.push({
        vid: val.vid,
        title: val.title,
        profile: val.profile
      }))
    },
    getVideo(vdo) {
      const req = new VideoPageRequest()
      req.setUuid(vdo)
      return this.$client.videoPage(req, {authority: this.$store.state.token})
    },
    async adapter(collection) {
      if (collection === undefined) {
        return
      }
      console.log(collection)
      // const file = await this.$client.File.Download(collection.appearance.cover)
      this.cover.url = file.url
      this.info.origin = collection.detail.origin
      this.info.translation = collection.detail.translation
      this.videos = this.transformVideo(collection)
    },
    resetPic() {
      this.$refs.uploader.reset()
    },
    async submitEditInfo() {
      const req = new EditCollectionRequest()
      req.setUuid(this.collectionId)

      if (this.translation === "") {
        req.setTranslation(this.info.translation)
      } else {
        req.setTranslation(this.translation)
      }

      if (this.profile === "") {
        req.setProfile(this.info.profile)
      } else {
        req.setProfile(this.profile)
      }

      if (this.pic === undefined) {
        req.setCover(this.cover.id)
      } else {
        const res = await this.upload(this.pic)
        req.setCover(res)
      }
      // 加入视频信息
      const videos = []
      for (const v of this.editValue) {
        videos.push(v.vid)
      }
      req.setVideosList(videos)

      if (is_dev_env()) {
        console.log(req)
      }
      this.$client.editCollection(req, {authority: this.$store.state.token}).then(res => {
        this.messagebox("成功","修改完成")
      }).catch(err => console.error(err))
    },
    messagebox(title,message) {
       window.alert(title+message)
    },
    async upload(file) {
      // TODO： 测试文件上传
      if (file === undefined) {
        return ""
      }
      const req = new UploadRequest()
      req.setName(file.name)
      req.setSize(file.size)
      let res = await this.$client.upload(req,{authority:this.$store.state.token})
      // 开始上传文件
      let form = new FormData()
      form.append("file",file)
      const resp = await axios.post(res.getUrl(),form)
      return resp.data.uuid
    },
  }
}
</script>
