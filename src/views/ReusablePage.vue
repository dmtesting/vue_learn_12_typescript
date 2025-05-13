<template>
  <div class="card">
    <h2>Reusable Page</h2>
    <app-button>Показать сообщение</app-button>
    <div style="height: 8px"></div>
    <app-button @click="navigate">Перейти на главную</app-button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const navigate = () => {
      router.push("/");
    };

    return { navigate };
  },
};
</script>

<style scoped></style>
