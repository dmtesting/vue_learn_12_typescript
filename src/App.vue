<template>
  <div class="container">
    <div class="card">
      <h2>Vue Composition API</h2>
      <small>data, methods, computed, watch</small>
      <hr />
      <p>Название: {{ name }}</p>
      <p>Версия: {{ version }}</p>
      <app-button @click="change">Изменить</app-button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

const name = ref("VueJS");
const version = ref(3);

export default {
  setup() {
    return { name, version };
  },
  components: {},
  computed: {},
  methods: {
    change() {
      this.name = "Vue JS";
      this.version = 4;
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
