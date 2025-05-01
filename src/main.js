import "@fontsource/roboto";
import { createApp } from "vue";
import App from "./App.vue";
import Button from "./uikit-option-api/button.vue";

document.fonts.ready.then(() => {
  const app = createApp(App);

  app.component("AppButton", Button);
  app.mount("#app");
});
