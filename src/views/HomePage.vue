<template>
  <app-alert
    v-if="alert"
    @close="close"
    title="Работаем с Composition API"
  ></app-alert>
  <div class="card">
    <h2>Vue Composition API</h2>
    <div style="height: 8px"></div>
    <input v-model="firstName" placeholder="First name" />
    <div style="height: 8px"></div>
    <app-button @click="change">Изменить</app-button>
    <div style="height: 8px"></div>
    <app-button @click="toggle">Alert</app-button>
  </div>
  <framework-info @change-version="changeVersion">
    <div>framework</div>
  </framework-info>
</template>

<script>
import FrameworkInfo from "../FrameworkInfo.vue";
import { ref, provide } from "vue";
import useAlert from "@/use/alert";

export default {
  components: {
    FrameworkInfo,
  },
  setup() {
    const name = ref("VueJS");
    const version = ref(3);
    const firstName = ref("");

    provide("name", name);
    provide("version", version);

    const changeInfo = () => {
      name.value = "Vue JS !";
      version.value = 4;
    };

    return {
      name,
      version,
      firstName,
      ...useAlert(),
      change: changeInfo,
      changeVersion(value) {
        version.value = value;
      },
    };
  },
};
</script>

<style scoped></style>
