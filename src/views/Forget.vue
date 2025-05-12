<template>
  <div class="card">
    <h2>Забыл пароль? Так вспоминай!</h2>
    <router-link to="login" #="{ navigate }">
      <app-button @click="navigate">Обратно к авторизации</app-button>
    </router-link>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(from, to, next) {
    const answer = confirm("Are you sure?");

    if (answer) {
      next();
    } else {
      next(false);
    }
  },
};
</script>

<style scoped></style>
