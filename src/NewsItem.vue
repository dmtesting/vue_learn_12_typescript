<script>
import NewsList from "./NewsList.vue";

export default {
  emits: {
    "click-news-item"(num) {
      if (num) {
        return true;
      }
    },
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    NewsList,
  },
};
</script>

<template>
  <div class="news-item" @click="$emit('click-news-item', 42)">
    {{ title }}
    <div v-show="isOpen">--</div>
    <div v-show="isOpen">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi id
      autem porro, vitae quae aliquam earum! Ex, architecto quasi!
    </div>
    <NewsList v-show="isOpen">
      <span>some text</span>
      <template #header>
        <h4>List header</h4>
      </template>
    </NewsList>
  </div>
</template>

<style>
.news-item {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
}
</style>
