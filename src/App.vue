<script>
export default {
  data() {
    return {
      value: "",
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
  },
};
</script>

<template>
  <div class="form-container">
    <h2 class="header">Анкета на Vue разработчика!</h2>
    <form>
      <p>Как тебя зовут?</p>
      <app-input placeholder="Введи имя" />
      <p>Введи возраст</p>
      <app-input placeholder="Введи возраст" changeStrategy="number" />
      <p>Твой город</p>
      <app-select
        :options="options"
        placeholder="Введи город"
        @change-options="changeOptions"
      />
      <p>Готов к переезду в Токио?</p>
      <app-radio>Да</app-radio>
      <app-radio>Нет</app-radio>
      <p>Что знаешь во Vue?</p>
      <app-checkbox>Vuex</app-checkbox>
      <app-checkbox>Vue CLI</app-checkbox>
      <app-checkbox>Vue Router</app-checkbox>
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
