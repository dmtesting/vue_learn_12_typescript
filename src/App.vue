<script>
import colorDirective from "./colorDirective";

export default {
  directives: {
    color: colorDirective,
  },
  components: {},
  data() {
    return {
      myColor: "darkred",
      argColor: "color",
    };
  },
  methods: {},
};
</script>

<template>
  <div class="wrapper">
    <div class="card">
      <h2 class="header" v-color:[argColor].blink="myColor">
        Разговор про директивы
      </h2>
      <div class="input-wrapper">
        <app-input placeholder="Поле ввода" />
      </div>
      <div style="padding: 16px">
        <app-button
          @click="myColor = myColor === 'darkred' ? 'darkblue' : 'darkred'"
        >
          Поменять цвет
        </app-button>
        <div style="height: 8px" />
        <app-button
          @click="argColor = argColor === 'color' ? 'backgroundColor' : 'color'"
        >
          Поменять arg color
        </app-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  padding: 16px;
  margin: 0;
}
.card {
  background: #fff;
}
.input-wrapper {
  padding: 16px;
}
.wrapper {
  margin: auto;
  margin-top: 16px;
  background: #fff;
  border-radius: 8px;
  max-width: 400px;
}
.form {
  padding: 16px;
  margin: auto;
}
.h-gap {
  height: 8px;
}
</style>
