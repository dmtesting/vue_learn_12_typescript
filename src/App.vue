<template>
  <the-navbar></the-navbar>
  <div class="container">
    <div class="card">
      <h2>Блок про Vuex</h2>
      <p>Счетчик {{ counter }} ({{ doubleCounter }})</p>
      <app-button @click="add">increment</app-button>
      <div style="height: 8px"></div>
      <app-button @click="incrementAsync">increment async</app-button>
    </div>
  </div>
</template>

<script>
import TheNavbar from "./the-navbar.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    TheNavbar,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("count", ["counter", "doubleCounter"]),
  },
  methods: {
    add() {
      this.$store.commit({ type: "count/add", value: 5 });
    },
    incrementAsync() {
      this.$store.dispatch("count/incrementAsync", { value: 10, delay: 2000 });
    },
  },
};
</script>

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
