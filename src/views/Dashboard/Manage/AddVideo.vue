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
            <v-text-field
                label="选集"
                v-model="chapterName"
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
import video from "@/utils/sdk/video";

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
      chapterName: '',
      file: undefined,
      fid: '',
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
    getCurrentProject() {
      const cid = this.$route.params['id']
      return this.$store.state.projects.get(cid)
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
      // 开始进行上传
      try {
        const file = await this.upload(this.file)
        const vdo = await this.$client.Collection.NewVideo({
          cid: this.getCurrentProject.cid,
          info: {
            title: this.chapterName,
            profile: this.title,
            cover: this.getDefaultCover(),
            file: file.cid,
            quality: this.getQuality,
          }
        })
        console.log(vdo)
      } catch (e) {
        this.status = 'fatal'
        console.log(e)
      }
      this.status = 'finish'
    },
    getDefaultCover() {
      const project = this.getCurrentProject
      if (project === undefined) {
        // TODO：设置默认封面
        return ''
      }
      return project.appearance.cover
    },
    upload() {
      this.status = 'uploading'
      return this.$client.File.Upload(this.file, {
        onUploadProgress: progressEvent => {
          this.process = progressEvent.loaded / progressEvent.total * 100 | 0
        }
      })

    }
  }
}
</script>

<style scoped>

</style>
