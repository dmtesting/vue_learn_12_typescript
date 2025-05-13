<template>
  <div class="card">
    <div class="card-header-section">
      <h3>Создать новую задачу</h3>
      <div style="height: 16px"></div>
      <div>Название</div>
      <app-input v-model="name" placeholder="Название" />
      <div style="height: 4px"></div>
      <div>Дата дэдлайна</div>
      <VueDatePicker v-model="date" placeholder="Дата дэдлайна" text-input />
      <div style="height: 4px"></div>
      <div>Описание</div>
      <app-input v-model="description" placeholder="Описание" />
      <div style="height: 4px"></div>
      <app-button :disabled="disabled" @click="create">Создать</app-button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const name = ref("");
    const date = ref();
    const description = ref("");

    const disabled = computed(() => {
      return !(
        name.value.trim().length &&
        description.value.trim().length &&
        date.value
      );
    });

    const create = () => {
      store.commit("createTask", {
        name: name.value,
        description: description.value,
        date: date.value,
      });
      router.push("/home");
    };

    return { name, date, description, disabled, create };
  },
};
</script>

<style scoped>
.card-header-section {
  margin-top: 10px;
}
</style>
