import Vue from 'vue'
import Vuex from 'vuex'
import title from './modules/title'
import todoList from './modules/todoList'
import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todoList,
    title
  },
  plugins: [
    createVuexPersisted({
      reducer(state) {
        return {
          todoList: state.todoList
        }
      }
    })
  ]
})
