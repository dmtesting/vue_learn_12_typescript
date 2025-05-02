<script>
export default {};
</script>

<template>
  <div class="form-container">
    <h2 class="header">Анкета на Vue разработчика!</h2>
    <p>Как тебя зовут?</p>
    <app-input placeholder="Введи имя" />
    <p>Выбери возраст</p>
    <app-input placeholder="Введи возраст" />
    <p>Твой город</p>
    <app-input placeholder="Введи город" />
    <p>Готов к переезду в Токио?</p>
    <app-radio>Да</app-radio>
    <app-radio>Нет</app-radio>
    <p>Что знаешь во Vue?</p>
    <app-checkbox>Vuex</app-checkbox>
    <app-checkbox>Vue CLI</app-checkbox>
    <app-checkbox>Vue Router</app-checkbox>
  </div>
</template>

<style>
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
