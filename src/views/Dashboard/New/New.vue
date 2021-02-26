<template>
  <v-container>
    <v-card flat class="pa-6">
      <!--基本信息-->
      <v-row class="justify-center">
        <v-col cols="12" class="pl-6 grey--text ">
          <span>基本信息</span>
        </v-col>
        <v-col cols="11">
          <v-form
              ref="form"
          >
            <v-row class="justify-space-between">
              <v-col cols="6" class="pr-6">
                <v-text-field
                    v-model="translation"
                    label="中文译名"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="6" class="pl-6">
                <v-text-field
                    v-model="origin"
                    label="原名称"
                    required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row class="justify-space-between">
              <v-col cols="6" v-if="false">
                <v-select
                    label="标签"
                    v-model="status"
                    :items="component.status"
                >
                </v-select>
              </v-col>
              <v-col cols="6">
                <v-text-field
                    v-model="episode"
                    label="预计集数"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-select
                    label="更新状态"
                    v-model="status"
                    :items="component.status"
                >
                </v-select>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
      <!--详细信息-->
      <v-row class="justify-center">
        <v-col cols="12" class="pl-6 grey--text ">
          <span>详细信息</span>
        </v-col>
        <v-col cols="11" class="pt-0">
          <v-form>
            <v-row class="justify-space-between">
              <v-col cols="6" class="pr-6" v-if="false">
                <v-text-field
                    v-model="author"
                    label="作者/制作团队"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="6" class="pl-6" v-if="false">
                <v-text-field
                    v-model="translator"
                    label="翻译组"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pa-0 pt-4">
                <v-textarea
                    filled
                    name="profile"
                    rounded
                    label="简介"
                    :placeholder="component.emptyPlaceHolder"
                    v-model="profile"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
      <!-- 外观设置 -->
      <v-row class="justify-center">
        <v-col cols="12" class="pl-6 grey--text ">
          <span>外观设置</span>
        </v-col>
        <v-col cols="11">
          <v-col cols="6">
            <Uploader :height="200" v-model="cover"/>
            <div class="text-center grey--text text--darken-2">封面图片</div>
          </v-col>
        </v-col>
      </v-row>
      <v-card-actions class="justify-end">
        <v-col cols="11"></v-col>
        <v-col class=""><v-btn color="info" @click="createCollection">创建</v-btn></v-col>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { CreateCollectionRequest,CreateVideoRequest } from "@/utils/proto/watch/watch_pb"
import { UploadRequest } from "@/utils/proto/file/file.v2_pb"
import axios from "axios"
import is_dev_env from "@/utils/is_dev_env";
import Uploader from "@/components/Uploader";
export default {
  name: "New",
  components: {
    Uploader
  },
  data() {
    return {
      origin: "",
      translation: "",
      author: "",
      translator: "",
      status: "",
      profile: "",
      episode: "",
      // cover是一个文件，不是id
      cover: undefined,
      component: {
        status: ["连载中", "已完结", "未开播"],
        emptyPlaceHolder: "说点什么呗~"
      }
    }
  },
  methods: {
    // 进行消息的转接
    transferStatus(status) {
      switch (status) {
        case 0:
          return "未开播"
        case 1:
          return "连载中"
        case 2:
          return "已完结"
      }
      switch (status) {
        case "未开播":
          return 0
        case "连载中":
          return 1
        case "已完结":
          return 2
      }
      // TODO: 未知错误处理
      return 0
    },
    async createCollection() {
      // checkArgs
      try {
        // 上传文件
        const cover = await this.upload(this.cover)
        // 发送创建请求
        const req = new CreateCollectionRequest()
        req.setProfile(this.profile)
        req.setTranslation(this.translation)
        req.setOrigin(this.origin)
        req.setEpisodes(this.episode)
        // cover是上一个步骤拿到的id
        req.setCover(cover)
        req.setStatus(this.transferStatus(this.status))
        if (is_dev_env()) {
          console.log(req)
        }
        const cl = await this.$client.createCollection(req,{authority:this.$store.state.token})
        this.msgBox("成功：","成功创建")
      } catch (err) {
        this.msgBox("失败",err)
      }
    },
    async upload(file) {
      // TODO： 测试文件上传
      if (file === undefined) {
        return ""
      }
      const req = new UploadRequest()
      console.log(file)
      req.setName(file.name)
      req.setSize(file.size)
      let res = await this.$client.upload(req,{authority:this.$store.state.token})
      // 开始上传文件
      let form = new FormData()
      form.append("file",file)
      const resp = await axios.post(res.getUrl(),form)
      return resp.data.uuid
    },
    // 展示messagebox
    msgBox(title,message) {
      window.alert(title+message)
    }
  }
}
</script>
