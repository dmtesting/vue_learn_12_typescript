import "@fontsource/roboto";
import { createApp } from "vue";
import App from "./App.vue";

document.fonts.ready.then(() => {
  const app = createApp(App);

  app.mount("#app");
});
