import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search_keywords: "",
    projectsTracker: 0,
    projects: new Map,
    videosTracker: 0,
    videos: new Map,
  },
  mutations: {
    addProject(stats,project) {
      stats.projects.set(project.cid,project)
      stats.projectsTracker++
    },
    // TODO: store缓存
    addVideo(stats,video) {

    },
    setSearchKeyword(stats,keywords) {
      stats.search_keywords = keywords
    }
  },
  actions: {
  },
  modules: {
  }
})
