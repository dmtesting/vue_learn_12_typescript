<template>
  <form class="card wrapper" @submit.prevent="submit">
    <h2>Мини клон Gmail</h2>
    <div class="form-control">
      <label for="email">Email</label>
      <app-input
        type="email"
        id="email"
        name="email"
        placeholder="Enter Email"
        v-model.trim="email"
      />
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <app-input
        type="password"
        id="password"
        name="password"
        placeholder="Enter Password"
        v-model.trim="password"
      />
    </div>
    <div>
      <app-button type="submit" renderStrategy="primary inline">
        Войти
      </app-button>
      <router-link to="forget" #="{ navigate }">
        <app-button
          @click="navigate"
          type="button"
          renderStrategy="secondary inline"
        >
          Забыл пароль?
        </app-button>
      </router-link>
    </div>
  </form>
</template>

<script>
export default {
  inject: ["login"],
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    isValid() {
      return this.email.length && this.password.length;
    },
  },
  methods: {
    submit() {
      if (this.isValid) {
        this.login();
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.form-control {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
