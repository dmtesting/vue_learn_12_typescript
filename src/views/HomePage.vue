<template>
  <div class="card">
    <h2>Vue Composition API</h2>
    <div style="height: 8px"></div>
    <input v-model="firstName" placeholder="First name" />
    <div style="height: 8px"></div>
    <app-button @click="change">Изменить</app-button>
    <div style="height: 8px"></div>
    <app-button @click="console.log">button</app-button>
  </div>
  <framework-info @change-version="changeVersion">
    <div>framework</div>
  </framework-info>
</template>

<script>
import FrameworkInfo from "../FrameworkInfo.vue";
import { ref, provide } from "vue";

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
      change: changeInfo,
      changeVersion(value) {
        version.value = value;
      },
    };
  },
};
</script>

<style scoped></style>
