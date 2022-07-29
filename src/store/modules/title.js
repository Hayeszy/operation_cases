export default {
  namespaced: true,
  state: {
    color: ""
  },
  mutations: {
    updateColor(state, payload) {
      state.color = payload
    }
  },
  actions: {
    getUpdateColor(context, payload) {
      context.commit("updateColor", payload)
    }
  }
}