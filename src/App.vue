<script>
export default {
  components: {},
  inject: ["changeI18N"],
  data() {
    return {};
  },
  methods: {
    changeLang() {
      this.changeI18N("en");
      this.$forceUpdate();
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="card">
      <h2>{{ $i18n("app.title") }}</h2>
      <app-button :key="$i18n('app.langBtn')" @click="changeLang">
        {{ $i18n("app.langBtn") }}
      </app-button>
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
