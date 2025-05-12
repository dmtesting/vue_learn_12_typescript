<script>
import TheNavbar from "./the-navbar.vue";

export default {
  components: {
    TheNavbar,
  },
  data() {
    return {
      isAuth: true,
    };
  },
  methods: {
    login() {
      this.isAuth = true;
      this.$router.push(this.$route.query.from ?? "/dashboard");
    },
    logout() {
      this.isAuth = false;
      this.$router.push({
        path: "/login",
        query: {
          from: this.$route.path,
        },
      });
    },
  },
  provide() {
    return {
      login: this.login,
      logout: this.logout,
      emails: [
        { id: "1", theme: "Купил себе PlayStation 5" },
        { id: "2", theme: "Выучил Vue Router" },
        { id: "3", theme: "Хочу изучить весь Vue" },
        { id: "4", theme: "А следующий блок про Vuex!" },
        { id: "5", theme: "А что там насчет Vue Hooks?" },
      ],
    };
  },
};
</script>

<template>
  <the-navbar :visible="isAuth"></the-navbar>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style>
ul {
  all: unset;
}
li {
  all: unset;
}
a {
  all: unset;
  cursor: pointer;
}
button {
  all: unset;
}
.active {
  text-decoration: underline;
}
.container {
  display: flex;
  justify-content: center;
  padding-top: 8px;
}
.card {
  background: #fff;
  width: 600px;
  margin: auto;
  padding: 8px;
  border-radius: 4px;
}
.no-padding {
  padding: 0;
}
</style>
