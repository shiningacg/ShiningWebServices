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
import { FileRequest } from "@/utils/proto/file/file.v2_pb"
import { Empty } from "google-protobuf/google/protobuf/empty_pb.js"
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
      this.$client.listInvolved(new Empty(),{authority:this.$store.state.token}).then(res => {
        console.log(res)
        this.transferSearchResult(res)
      })
    },
    async transferSearchResult(result) {
      // 查询评论区
      for (const c of result.getCollectionsList()) {
        this.projects.append({
          cid: c.getUuid(),
          cover: await this.transferFile(c.getCover()),
          title: c.getTranslation(),
          subtitle: c.getOrigin(),
          profile: c.getProfile,
          liked: c.getData().getLike(),
          // TODO: 添加评论数量
          comment: 0,
        })
      }
    },
    transferFile(cid) {
      const req = new FileRequest()
      req.setFid(cid)
      return this.$client.download(req,{authority:this.$store.state.token}).then(res => res.getUrl()).catch(err => {
        console.log(err)
        return ""
      })
    },
  }
}
</script>

<style scoped>

</style>
