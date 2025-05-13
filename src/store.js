import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      title: "This is Vuex + Composition   ",
    };
  },
  getters: {
    appTitle(state) {
      return state.title.trim();
    },
  },
});
