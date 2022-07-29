export default {
  namespaced: true,
  state: {
    list: [
      {
        name: "吃饭",
        done: false,
        id: 1,
      },
      {
        name: "睡觉",
        done: false,
        id: 2,
      },
      {
        name: "打豆豆",
        done: false,
        id: 3,
      },
    ],
  },
  mutations: {
    addListObj(state, list) {
      state.list.push(list)
    },
    delListObj(state, id) {
      const index = state.list.findIndex((ele) => ele.id === id);
      state.list.splice(index, 1);
    },
  },
  actions: {
    addTodoList({ commit }, list) {
      commit("addListObj", list);
    },
    delTodoList({ commit }, id) {
      commit("delListObj", id);
    },
  },
};
