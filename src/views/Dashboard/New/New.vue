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
              <v-col cols="6">
                <v-select
                    label="标签"
                    v-model="status"
                    :items="component.status"
                >
                </v-select>
              </v-col>
              <v-col cols="2">
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
              <v-col cols="6" class="pr-6">
                <v-text-field
                    v-model="author"
                    label="作者/制作团队"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="6" class="pl-6">
                <v-text-field
                    v-model="translator"
                    label="翻译组"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pa-0">
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
      cover: undefined,
      component: {
        status: ["连载中", "停刊", "已完结", "未开播"],
        emptyPlaceHolder: "说点什么呗~"
      }
    }
  },
  methods: {
    // 进行消息的转接
    translateStatus(status) {
      switch (status) {
        case "已完结":
          return 0
      }
      return 0
    },
    async createCollection() {
      if (this.cover === undefined) {
        console.log("空文件")
        return
      }
      // checkArgs
      try {
        // 上传文件
        const cover = await this.$client.File.Upload(this.cover)
        // 发送创建请求
        const cl = await this.$client.Collection.New({
            profile: this.profile,
            translation: this.translation,
            origin: this.origin,
            status: this.translateStatus(this.status)
        })
        console.log(cl)

        console.log(cover)
        // 更新数据
        await this.$client.Collection.UpdateInfo({
          cid: cl.cid,
          appearance: {
            cover: cover.cid
          }
        })
        this.msgBox("成功：","成功创建")
      } catch (err) {
        this.msgBox("失败",err)
      }
    },
    // 展示messagebox
    msgBox(title,message) {
      console.log(title,message)
    }
  }
}
</script>
