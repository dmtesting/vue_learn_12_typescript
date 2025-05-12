<template>
  <header class="header">
    <h3>Счетчик {{ counter }}</h3>
    <app-button @click="add">increment</app-button>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("count", ["counter"]),
  },
  methods: {
    add() {
      this.$store.commit("count/add");
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
