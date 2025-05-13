<template>
  <div v-if="currentTask" class="card">
    <div class="card-header-section">
      <h3>{{ currentTask.title }}</h3>
      <hr />
      <div class="card-info-blocks-wrapper">
        <div class="card-info-block">
          <div>Статус:</div>
          <Status :status="currentTask.status" />
        </div>
        <div class="card-info-block">
          <div>Дедлайн:</div>
          <div>{{ displayDeadline }}</div>
        </div>
        <div class="card-info-block">
          <div>Описание:</div>
          <div>
            {{ currentTask.description }}
          </div>
        </div>
      </div>
      <div style="height: 16px"></div>
      <div style="display: flex; gap: 8px">
        <app-button
          renderStrategy="confirm"
          :disabled="currentTask.status === 'in_progress'"
          @click="changeStatus('in_progress')"
        >
          Взять в работу
        </app-button>
        <app-button renderStrategy="primary" @click="remove">
          Завершить
        </app-button>
        <app-button
          renderStrategy="danger"
          :disabled="currentTask.status === 'rejected'"
          @click="changeStatus('rejected')"
        >
          Отменить
        </app-button>
      </div>
    </div>
  </div>
  <div v-else style="color: #fff; text-align: center">
    Задачи с id = {{ taskId }} нет
  </div>
</template>

<script>
import Status from "@/components/Status.vue";

export default {
  components: { Status },
  props: ["taskId"],
  computed: {
    currentTask() {
      return this.$store.state.tasks.find((task) => task.id === this.taskId);
    },
    displayDeadline() {
      const [year, month, day] = this.currentTask.deadline.split("-");

      return `${day}.${month}.${year}`;
    },
  },
  methods: {
    changeStatus(statusName) {
      this.$store.commit("changeTaskStatus", {
        id: this.taskId,
        status: statusName,
      });
    },
    remove() {
      this.$store.commit("removeTask", {
        id: this.taskId,
      });
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.card-header-section {
  margin-top: 10px;
}
.card-info-block {
  display: flex;
  gap: 4px;
}
.card-info-blocks-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
