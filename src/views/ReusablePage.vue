<template>
  <app-alert
    v-if="alert"
    @close="close"
    title="Работаем с Composition API"
  ></app-alert>
  <div class="card">
    <h2>Reusable Page</h2>
    <app-button @click="toggle">
      {{ alert ? "Закрыть" : "Показать" }} сообщение
    </app-button>
    <div style="height: 8px"></div>
    <app-button @click="navigate">Перейти на главную</app-button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import useAlert from "@/use/alert";

export default {
  setup() {
    const router = useRouter();

    const navigate = () => router.push("/");

    return { navigate, ...useAlert() };
  },
};
</script>

<style scoped></style>
