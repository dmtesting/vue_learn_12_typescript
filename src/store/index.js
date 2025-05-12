import { createStore, createLogger } from "vuex";
import counterModule from "./counter";

export default createStore({
  plugins: [createLogger()],
  modules: {
    count: counterModule,
  },
  state() {
    return {
      appTitle: "Vuex",
    };
  },
});
