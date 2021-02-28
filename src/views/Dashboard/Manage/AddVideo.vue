<template>
  <v-dialog width="1200" v-model="show">
    <v-card>
      <v-card-title>
        添加内容
      </v-card-title>
      <v-card-text class="body-1">
        <!-- 上传文件 -->
        <v-row>
          <v-col class="pl-6 pr-6" cols="6">
            <v-text-field
                label="标题"
                v-model="title"
            ></v-text-field>
          </v-col>
          <v-col class="pl-6 pr-6" cols="3">
            <v-select
                label="画质"
                :items="config.quality"
                v-model="quality"
            ></v-select>
          </v-col>
        </v-row>
        <div>
          <v-file-input
              v-model="file"
              show-size
              label="上传文件"
          ></v-file-input>
          <v-progress-linear
              v-show="showProgress"
              v-model="process"
              height="25"
              :color="getProcessColor"
          >
            <strong>{{ getProgressNotice }}</strong>
          </v-progress-linear>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="addVideoDialogSubmit">确定</v-btn>
        <v-btn color="grey" @click="addVideoDialogCancel">取消</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {UploadRequest} from "@/utils/proto/file/file.v2_pb";
import { CreateVideoRequest } from "@/utils/proto/watch/watch_pb";
import { CollectionPageRequest } from "@/utils/proto/public_pb";
import is_dev_env from "@/utils/is_dev_env";
import axios from "axios";

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  name: "AddVideo",
  data() {
    return {
      show: false,
      title: '',
      file: undefined,
      status: 'waiting',
      process: 0,
      quality: '',
      config: {
        quality: ['1080p','720p']
      }
    }
  },
  watch: {
    value(val) {
      this.show = val
    }
  },
  computed: {
    getProcessColor() {
      switch (this.status) {
        case "waiting":
          return "grey";
        case 'uploading':
          return 'primary';
        case 'fatal':
          return 'dangerous';
        case 'finish':
          return 'success';
      }
      return 'grey'
    },
    getProgressNotice() {
      switch (this.status) {
        case "uploading":
          return this.process === 100 ? '服务器正在处理数据...' : Math.ceil(this.process) + '%'
        case "finish":
          return "上传完成"
        case 'fatal':
          return '发生错误'
      }
    },
    showProgress() {
      return this.status !== 'waiting'
    },
    getCurrentProjectId() {
      const cid = this.$route.params['id']
      return cid
    },
    getQuality() {
      switch (this.quality) {
        case "1080p":
          return 'p1080';
        case '720p':
          return 'p720';
      }
    }
  },
  methods: {
    reset() {
      this.title = ''
      this.chapterName = ''
      this.file = undefined
      this.status = 'waiting'
      this.process = 0
    },
    unShow() {
      this.$emit('input', false)
    },
    addVideoDialogCancel() {
      this.unShow()
      this.reset()
    },
    async addVideoDialogSubmit() {
      if (this.file === undefined) {
        console.log("请选择需要上传的文件")
        return
      }
      if (this.status === 'finish') {
        this.unShow()
        this.reset()
        return
      }
      const cid = this.getCurrentProjectId
      // 开始进行上传
      this.status = 'uploading'
      try {
        const file = await this.upload(this.file)
        const req = new CreateVideoRequest()
        req.setUuid(cid)
        req.setName(this.title)
        req.setFile(file)
        if (is_dev_env()) {
          console.log(req)
        }
        const res = await this.$client.createVideo(req,{authority:this.$store.state.token})
        this.$emit("added",this.title,res.getUuid())
        // this.messagebox("成功")
      } catch (e) {
        this.status = 'fatal'
        console.log(e)
      }
      // await this.reloadCollection(this.getCurrentProjectId)
      this.status = 'finish'
    },
    // 跟新数据
    async reloadCollection() {
      const req = new CollectionPageRequest()
      req.setUuid(this.getCurrentProjectId)
      const project = await this.$client.collectionPage(cid)
      this.$store.commit('addProject',project)
    },
    messagebox(title, message) {
      window.alert(title+message)
    },
    async upload(file) {
      const req = new UploadRequest()
      console.log(file)
      req.setName(file.name)
      req.setSize(file.size)
      let res = await this.$client.upload(req,{authority:this.$store.state.token})
      // 开始上传文件
      let form = new FormData()
      const _this = this
      form.append("file",file)
      const resp = await axios.post(res.getUrl(),form,{
        onUploadProgress: progressEvent => {
          _this.process = (progressEvent.loaded / progressEvent.total * 100 | 0)
        }
      })
      return resp.data.uuid
    },
  }
}
</script>

<style scoped>

</style>
