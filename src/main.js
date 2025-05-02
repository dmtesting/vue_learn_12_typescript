import "@fontsource/roboto";
import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import Button from "./uikit-option-api/button.vue";
import Input from "./uikit-option-api/input.vue";

document.fonts.ready.then(() => {
  const app = createApp(App);

  app.component("AppButton", Button);
  app.component("AppInput", Input);
  app.component(
    "AsyncComponent",
    defineAsyncComponent(() => {
      return import("./AsyncComponent.vue");
    })
  );
  app.mount("#app");
});
