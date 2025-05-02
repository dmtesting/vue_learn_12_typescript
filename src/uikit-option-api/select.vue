<script>
export default {
  props: {
    options: {
      type: Array,
      required: false,
      default: [{ id: "default", displayName: "value", selected: true }],
    },
  },
  methods: {
    handleChange(evt) {
      const newOptions = JSON.parse(JSON.stringify(this.options));

      const id = evt.target.value;
      const option = newOptions.find((opt) => opt.id.toString() === id);

      if (option) {
        if (!evt.target.multiple) {
          newOptions.forEach((opt) => {
            opt.selected = false;
          });
          option.selected = true;
        } else {
          option.selected = !option.selected;
        }
      }

      this.$emit("change-options", evt, newOptions);
    },
  },
};
</script>

<template>
  <select class="select" @change="handleChange">
    <option
      v-for="option in options"
      class="option"
      :key="option.id"
      :value="option.id"
      :selected="option.selected"
    >
      {{ option.displayName }}
    </option>
  </select>
</template>

<style scoped>
.select {
  all: unset;
  box-sizing: border-box;
  padding: 8px 12px;
  border: 1px solid #a6a6a6;
  width: 100%;
  height: 37px;
}
.option {
  all: unset;
  &:focus {
    outline: none;
  }
  &:not(:last-child)::after {
    content: ", ";
  }
}
.option[selected] {
  text-decoration: underline;
}
</style>
