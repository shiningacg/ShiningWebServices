<template>
  <!--展示具体项目-->
  <div >
    <div v-for="(item,key) in projects" :key="key">
      <Project :value="item" @manage="manageProject(item)"/>
    </div>
    <div v-show="projects.length === 0">
      暂时没有参加任何项目呢～
    </div>
  </div>
</template>

<script>
import Project from "@/views/Dashboard/Manage/Project";
export default {
  name: "Show",
  components: {
    Project
  },
  data() {
    return {
      projects: [],
    }
  },
  created() {
    this.findMyProject()
  },
  methods: {
    manageProject(item) {
      this.$router.push('/dashboard/manage/edit/'+item.cid)
      this.current = item
    },
    findMyProject() {
      // TODO: 添加自己管理的东西
      // //
      // this.$client.Watch.Search({poster: 1, page: 1}).then(res => {
      //   console.log(res)
      //   for (let i of res.result) {
      //     this.$store.commit('addProject',i)
      //     this.transferSearchResult(i).then(res => {
      //       this.projects.push(res)
      //     })
      //   }
      // })
    },
    async transferSearchResult(result) {
      // 查询评论区
      return {
        cid : result.cid,
        cover: await this.transferFile(result.appearance.cover),
        title: result.detail.translation,
        subtitle: result.detail.origin,
        profile: result.detail.profile,
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

<style scoped>

</style>
