import "@fontsource/roboto";
import { createApp } from "vue";
import App from "./App.vue";
import Button from "./uikit-option-api/button.vue";
import Input from "./uikit-option-api/input.vue";
import Checkbox from "./uikit-option-api/checkbox.vue";
import Radio from "./uikit-option-api/radio.vue";

document.fonts.ready.then(() => {
  const app = createApp(App);

  app.component("AppButton", Button);
  app.component("AppInput", Input);
  app.component("AppCheckbox", Checkbox);
  app.component("AppRadio", Radio);
  app.mount("#app");
});
