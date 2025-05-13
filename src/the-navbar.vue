<template>
  <header class="header" v-if="visible">
    <h3>Freelance</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/home">Главная</router-link>
      </li>
      <li>
        <router-link to="/tasks/create">Создать</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
h3 {
  cursor: default;
}
.header {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 46px;
  padding: 0 8px;
  h3 {
    margin: 0;
  }
}
.navbar-menu {
  all: unset;
  display: flex;
  gap: 8px;
  a {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
