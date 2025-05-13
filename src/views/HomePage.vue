<template>
  <div class="wrapper">
    <h3 class="all-tasks">Всего активных задач: {{ tasks.length }}</h3>
    <div class="cards-wrapper">
      <TaskCard
        v-for="task in tasks"
        :id="task.id"
        :status="task.status"
        :title="task.title"
        :description="task.description"
        @open-task="$router.push(`/task/${$event}`)"
      />
    </div>
  </div>
</template>

<script>
import TaskCard from "@/components/TaskCard.vue";

export default {
  components: { TaskCard },
  data() {
    return {
      tasks: this.$store.state.tasks,
    };
  },
};
</script>

<style scoped>
.wrapper {
  padding: 8px;
}
.all-tasks {
  color: #fff;
  margin-bottom: 16px;
}
.cards-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
