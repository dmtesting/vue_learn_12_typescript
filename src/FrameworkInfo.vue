<template>
  <div class="card">
    <p>Название: {{ name }}</p>
    <p>Версия: {{ version }} ({{ doubleVersion }})</p>
    <app-button @click="$emit('change-version', 3)">
      Изменить на 3 версию
    </app-button>
  </div>
</template>

<script>
import { computed, inject } from "vue";

export default {
  emits: ["change-version"],
  setup(_, context) {
    const version = inject("version");

    return {
      name: inject("name"),
      version,
      doubleVersion: computed(() => version.value * 2),
      change() {
        context.emit("change-version", 3);
      },
    };
  },
};
</script>

<style scoped></style>
