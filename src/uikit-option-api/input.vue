<script>
export default {
  props: ["value", "placeholder"],
};
</script>

<template>
  <div class="container">
    <input
      v-if="typeof value === 'string'"
      type="text"
      class="input"
      :value="value"
      :placeholder="placeholder"
    />
    <input v-else type="text" class="input" :placeholder="placeholder" />
  </div>
</template>

<style scoped>
.container {
  background: #fff;
  padding: 8px 12px;
  border-radius: 8px;
}
.input {
  all: unset;
  width: 100%;
}
</style>
