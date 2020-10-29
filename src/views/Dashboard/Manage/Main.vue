<template>
  <v-container class="pt-0">
    <div class="d-flex align-center">
      <router-link to="/dashboard/manage">
        <span class="subtitle-2 pl-3 pa-4 text--black" >管理</span>
      </router-link>
      <div v-if="current !== undefined">
        <span class="pr-4">/</span>
        <span class="body-2 grey--text text--darken-2">{{ current.title }}</span>
      </div>
    </div>
      <v-container>
        <router-view></router-view>
      </v-container>
  </v-container>
</template>

<script>
import Setting from "./Setting"
import Project from "@/views/Dashboard/Manage/Project";

export default {
  name: "Manage",
  components: {
    Setting,
    Project
  },
  watch:{
    // 监听路由变化，变化顶部菜单栏
    $route(to,from){
      // 获取路由参数
      const cid = this.$route.params['id']
      this.current = this.$store.state.projects.get(cid)
      console.log(this.current)
    }
  },
  data() {
    return {
      // 所有的项目
      current: undefined,
    }
  },

}
</script>
