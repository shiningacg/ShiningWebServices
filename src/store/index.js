import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: new Map
  },
  mutations: {
    addProject(stats,project) {
      stats.projects.set(project.cid,project)
    }
  },
  actions: {
  },
  modules: {
  }
})
