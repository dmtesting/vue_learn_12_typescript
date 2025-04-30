import "@fontsource/roboto";
import { createApp } from "vue";
import App from "./App.vue";
import AnotherComponent from "./AnotherComponent.vue";

console.log(App);

document.fonts.ready.then(() => {
  const app = createApp(App);

  app.component("another-component", AnotherComponent);
  app.mount("#app");
});
