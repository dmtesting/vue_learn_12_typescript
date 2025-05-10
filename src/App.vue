<script>
import axios from "axios";
import { API_URL } from "./settings";
import AppPeopleList from "./AppPeopleList.vue";

export default {
  components: {
    AppPeopleList,
  },
  data() {
    return {
      name: "",
      people: [],
      alert: null,
      loading: false,
    };
  },
  mounted() {
    this.loadPeople();
  },
  methods: {
    async createPerson() {
      const response = await axios.post(
        `${API_URL}/people.json`,
        { firstName: this.name },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      this.people.push({ id: response.data.name, firstName: this.name });
    },
    async loadPeople() {
      try {
        this.loading = true;

        await new Promise((resolve) => setTimeout(resolve, 2000));

        const response = await axios.get(`${API_URL}/people.json`);

        if (!response.data) {
          throw new Error("Список пуст!");
        }

        this.people = Object.entries(response.data).map((entry) => ({
          id: entry[0],
          firstName: entry[1].firstName,
        }));
      } catch (err) {
        this.alert = {
          type: "danger",
          title: "Ошибка!",
          text: err.message,
        };
      } finally {
        this.loading = false;
      }
    },
    async removePerson(id) {
      await axios.delete(`${API_URL}/people/${id}.json`);

      const index = this.people.findIndex((item) => item.id === id);

      if (index !== -1) {
        this.people.splice(index, 1);

        this.alert = {
          type: "primary",
          title: "Успешно!",
          text: "Пользователь был удалён",
        };
      }
    },
  },
};
</script>

<template>
  <div class="form-container">
    <h2 class="header">Работа с базой данный</h2>
    <form class="form" @submit.prevent="createPerson">
      <p>Как тебя зовут?</p>
      <app-input placeholder="Введи имя" v-model="name" />
      <div class="h-gap" />
      <app-button type="submit">Создать человека</app-button>
      <div class="h-gap" />
      <app-button type="button" @click="loadPeople">
        Загрузить список
      </app-button>
      <div class="h-gap" />
    </form>
    <div class="h-gap" />
    <AppAlert
      v-if="alert"
      :type="alert.type"
      :title="alert.title"
      :text="alert.text"
      @close="alert = null"
    />
    <div class="h-gap" />
    <AppLoader v-if="loading" />
    <AppPeopleList v-else :people="people" @remove="removePerson" />
    <div class="h-gap" />
  </div>
</template>

<style scoped>
.header {
  padding: 16px;
  margin: 0;
}
.form-container {
  margin-top: 16px;
  background: #fff;
  border-radius: 8px;
  max-width: 400px;
}
.form {
  padding: 16px;
  margin: auto;
}
.h-gap {
  height: 8px;
}
</style>
