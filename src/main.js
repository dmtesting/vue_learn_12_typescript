import "@fontsource/roboto";
import "@vuepic/vue-datepicker/dist/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import Button from "./uikit-option-api/button.vue";
import Input from "./uikit-option-api/input.vue";
import Checkbox from "./uikit-option-api/checkbox.vue";
import Radio from "./uikit-option-api/radio.vue";
import Select from "./uikit-option-api/select.vue";
import Alert from "./uikit-option-api/alert.vue";
import Loader from "./uikit-option-api/loader.vue";
import Modal from "./uikit-option-api/modal.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import router from "./router";
import store from "./store";

document.fonts.ready.then(() => {
  const app = createApp(App);

  app.component("AppButton", Button);
  app.component("AppInput", Input);
  app.component("AppCheckbox", Checkbox);
  app.component("AppRadio", Radio);
  app.component("AppSelect", Select);
  app.component("AppAlert", Alert);
  app.component("AppLoader", Loader);
  app.component("AppModal", Modal);
  app.component("VueDatePicker", VueDatePicker);

  app.use(router);
  app.use(store);

  app.mount("#app");
});
