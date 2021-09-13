import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "Kimmich",
    fruits: ["mango", "apple", "banana", "pine apple"],
    jobs: [
      { name: "job 1", title: ".....", isDone: true },
      { name: "job 2", title: ".....", isDone: true },
      { name: "job 3", title: ".....", isDone: true },
      { name: "job 4", title: ".....", isDone: false },
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    totalJobs: (state) => state.jobs.length,
    jobDoneC: (state) => state.jobs.filter(item => item.isDone == true).length,
    undoneJob: (state, getters) => getters.totalJobs - getters.jobDoneC,
  },
  modules: {
  }
})
