<script>
export default {
  data() {
    return {
      value: "",
      nameValue: "",
      ageValue: "",
      relocateValue: null,
      skills: {
        Vuex: false,
        "Vue CLI": false,
        "Vue Router": false,
      },
      options: [
        { id: 1, displayName: "Москва", selected: true },
        { id: 2, displayName: "Санкт-Петербург", selected: false },
      ],
    };
  },
  methods: {
    changeOptions(evt, newOptions) {
      this.options = newOptions;
    },
    submit(evt) {
      console.log("fds", this.relocateValue);
    },
  },
};
</script>

<template>
  <div class="form-container">
    <h2 class="header">Анкета на Vue разработчика!</h2>
    <form @submit.prevent="submit">
      <p>Как тебя зовут?</p>
      <app-input placeholder="Введи имя" v-model="nameValue" />
      <p>Введи возраст</p>
      <app-input
        placeholder="Введи возраст"
        renderStrategy="number"
        v-model="ageValue"
      />
      <p>Твой город</p>
      <app-select
        :options="options"
        placeholder="Введи город"
        @change-options="changeOptions"
      />
      <p>Готов к переезду в Токио?</p>
      <app-radio name="relocate" v-model="relocateValue" value="yes">
        Да
      </app-radio>
      <app-radio name="relocate" v-model="relocateValue" value="no">
        Нет
      </app-radio>
      <p>Что знаешь во Vue?</p>
      <app-checkbox v-model="skills['Vuex']">Vuex</app-checkbox>
      <app-checkbox v-model="skills['Vue CLI']">Vue CLI</app-checkbox>
      <app-checkbox v-model="skills['Vue Router']">Vue Router</app-checkbox>
      <hr />
      <app-button type="submit">Отправить</app-button>
    </form>
  </div>
</template>

<style scoped>
.header {
  margin: 0;
  margin-bottom: 16px;
}
.form-container {
  padding: 16px;
  margin: auto;
  margin-top: 16px;
  background: #fff;
  border-radius: 8px;
  max-width: 400px;
}
</style>
