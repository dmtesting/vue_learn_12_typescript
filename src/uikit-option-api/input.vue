<script>
export default {
  props: {
    value: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
};
</script>

<template>
  <label class="container">
    <input
      v-if="typeof value === 'string'"
      type="text"
      class="input"
      :value="value"
      :placeholder="placeholder"
    />
    <input v-else type="text" class="input" :placeholder="placeholder" />
  </label>
</template>

<style scoped>
.container {
  background: #fff;
  padding: 8px 0;
  border: 1px solid #a6a6a6;
  cursor: text;
  width: 100%;
}
.input {
  all: unset;
  box-sizing: border-box;
  width: 100%;
  padding: 0 12px;
}
</style>
