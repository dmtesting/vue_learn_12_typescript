<script>
export default {
  inject: ["news"],
};
</script>

<template>
  <ul>
    <slot name="header" />
    <slot />
    <li v-for="item in news" :key="item.id">{{ item.title }}</li>
  </ul>
</template>

<style scoped></style>
