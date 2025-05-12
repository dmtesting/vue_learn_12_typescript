<template>
  <div v-if="email">
    <h2>{{ email.theme }}</h2>
    <p>lorem ipsum dolor</p>
    <app-button @click="$router.push('/mail')">Закрыть</app-button>
  </div>
  <div v-else>
    <h4>Выберите письмо</h4>
  </div>
</template>

<script>
export default {
  inject: ["emails"],
  props: ["mailId"],
  computed: {
    email() {
      return this.emails.find((innerEmail) => {
        return innerEmail.id === this.mailId;
      });
    },
  },
};
</script>
