<template>
  <v-container class="pt-0">
    <div class="d-flex align-center">
      <v-btn text depressed @click="crumbs.pop()">管理</v-btn>
      <div v-if="crumbs.length !== 0">
        <span class="pr-5">/</span>
        <span class="body-2 grey--text text--darken-2">{{ crumbs[0].text }}</span>
      </div>
    </div>
      <v-container>
        <!--展示具体项目-->
        <div v-show="crumbs.length === 0" v-for="(item,key) in projects" :key="key">
          <Project :value="item" @manage="manageItem"/>
        </div>
        <!--展示项目配置-->
        <div><Setting v-if="crumbs.length !== 0"/></div>
        <!--没有任何项目时的提示-->
        <div v-show="projects.length === 0">
          暂时没有参加任何项目呢～
        </div>
      </v-container>
  </v-container>
</template>

<script>
import Setting from "./Manage/Setting"
import Project from "@/views/Dashboard/Manage/Project_2";

export default {
  name: "Manage",
  components: {
    Setting,
    Project
  },
  created() {
    this.findMyProject()
  },
  data() {
    return {
      crumbs: [],
      // 所有的项目
      projects: [],
    }
  },
  methods: {
    manageItem(item) {
      console.log(item)
      this.crumbs.push({
        text: item.title,
        disabled: true,
        href: ''
      })
    },
    findMyProject() {
      //
      this.$client.Collection.Search({poster: 1, page: 1}).then(res => {
        console.log(res)
        for (let i of res.result) {
          this.transferSearchResult(i).then(res => {
            console.log(res)
            this.projects.push(res)
          })
        }
      })
    },
    async transferSearchResult(result) {
      // 查询评论区
      return {
        cover: await this.transferFile(result.appearance.cover),
        title: result.detail.translation,
        liked: 0,
        comment: 0,
      }
    },
    transferFile(cid) {
      return this.$client.File.Download(cid).then(res => res.url).catch(err => "")
    },
  }
}
</script>