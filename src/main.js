import "@fontsource/roboto";
import { createApp } from "vue";
import App from "./App.vue";
import Button from "./uikit-option-api/button.vue";
import Input from "./uikit-option-api/input.vue";
import Checkbox from "./uikit-option-api/checkbox.vue";
import Radio from "./uikit-option-api/radio.vue";
import Select from "./uikit-option-api/select.vue";
import Alert from "./uikit-option-api/alert.vue";
import Loader from "./uikit-option-api/loader.vue";

document.fonts.ready.then(() => {
  const app = createApp(App);

  app.component("AppButton", Button);
  app.component("AppInput", Input);
  app.component("AppCheckbox", Checkbox);
  app.component("AppRadio", Radio);
  app.component("AppSelect", Select);
  app.component("AppAlert", Alert);
  app.component("AppLoader", Loader);
  app.mount("#app");
});
