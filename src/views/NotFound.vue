<template>
  <div class="card">
    <h1>Страница не найдена</h1>
    <p>lorem ipsum dolor</p>
    <router-link to="login" custom #="{ navigate }">
      <app-button @click="navigate">Авторизоваться</app-button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
