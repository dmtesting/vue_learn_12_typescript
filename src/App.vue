<script>
export default {
  components: {},
  data() {
    return {
      modal: false,
    };
  },
  methods: {},
};
</script>

<template>
  <div class="wrapper">
    <div class="card">
      <h2>Модальные окна</h2>
      <app-button @click="modal = true">Открыть</app-button>
      <Teleport to="body">
        <app-modal v-if="modal" @close="modal = false"></app-modal>
      </Teleport>
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
  max-width: 600px;
}
.form {
  padding: 16px;
  margin: auto;
}
.h-gap {
  height: 8px;
}
</style>
