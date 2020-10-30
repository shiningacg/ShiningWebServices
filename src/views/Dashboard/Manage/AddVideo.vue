<template>
  <v-dialog width="1200" v-model="value">
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
          <v-col class="pl-6 pr-6" cols="6">
            <v-text-field
                label="选集"
                v-model="chapterName"
            ></v-text-field>
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
            <strong>{{getProgressNotice}}</strong>
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
      title: '',
      chapterName: '',
      file: undefined,
      status: 'waiting',
      process: 0
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
          return this.process === 100 ? '服务器正在处理数据...' : Math.ceil(this.process)+ '%'
        case "finish":
          return "上传完成"
      }
    },
    showProgress() {
      return this.status !== 'waiting'
    },
  },
  watch: {
    value() {
      this.$emit('input',this.value)
    }
  },
  methods: {
    unShow() {
      this.$emit('input',false)
    },
    addVideoDialogCancel() {
      this.unShow()
    },
    addVideoDialogSubmit() {
      if (this.file === undefined) {
        console.log("请选择需要上传的文件")
        return
      }
      if (this.status === 'finish') {
        this.unShow()
      }
      this.upload(this.file)
    },
    upload() {
      this.status = 'uploading'
      this.$client.File.Upload(this.file, {
        onUploadProgress: progressEvent => {
          console.log(progressEvent)
          this.process = progressEvent.loaded / progressEvent.total * 100 | 0
        }
      }).then(res => {
        console.log(res)
        this.status = 'finish'
      }).catch(err => {
        console.log(err)
        this.status = 'fatal'
      })
    }
  }
}
</script>

<style scoped>

</style>
