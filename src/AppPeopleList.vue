<template>
  <div class="wrapper" v-if="people.length !== 0">
    <div class="card" v-for="person in people" :key="person.id">
      <div>{{ person.firstName }}</div>
      <app-button renderStrategy="danger" @click="$emit('remove', person.id)">
        Удалить
      </app-button>
    </div>
  </div>
  <div v-else>Empty list</div>
</template>

<script>
export default {
  props: ["people"],
  emits: ["remove"],
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
