<template>
  <div class="card">
    <div class="card-header-section">
      <h3>{{ title }}</h3>
      <Status :status="status" />
    </div>
    <hr />
    <p>{{ description }}</p>
    <app-button @click="$emit('open-task', id)">Посмотреть</app-button>
  </div>
</template>

<script>
import Status from "./Status.vue";

export default {
  components: { Status },
  emits: ["open-task"],
  props: ["id", "status", "title", "description"],
};
</script>

<style scoped>
.all-tasks {
  color: #fff;
  margin-bottom: 16px;
}
.card-header-section {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
</style>
