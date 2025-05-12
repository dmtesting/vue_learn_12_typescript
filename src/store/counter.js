export default {
  namespaced: true,
  state() {
    return {
      counter: 1,
    };
  },
  mutations: {
    add(state, payload) {
      state.counter += payload?.value ?? 1;
    },
  },
  actions: {
    incrementAsync({ commit }, payload) {
      setTimeout(() => {
        commit("add", { value: payload?.value ?? 1 });
      }, payload?.delay ?? 200);
    },
  },
  getters: {
    counter(state) {
      return state.counter;
    },
    doubleCounter(_, getters, rootState) {
      return getters.counter * 2;
    },
  },
};
