<script>
import NewsItem from "./NewsItem.vue";
import defaultNews from "./default-news";
import SbercatPng from "./assets/sbercat.png";

export default {
  data() {
    return {
      news: defaultNews,
      imgSrc: SbercatPng,
    };
  },
  components: {
    NewsItem,
  },
};
</script>

<template>
  <div class="main-container">
    <h1 class="header">Привет, мир!</h1>
    <img width="200" :src="imgSrc" alt="" />
    <h2 class="header">Актуальные новости</h2>
    <div class="news-container">
      <NewsItem
        v-for="item in news"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :is-open="item.isOpen"
        @click-news-item="item.isOpen = !item.isOpen"
      />
    </div>
  </div>
</template>

<style>
.header {
  color: #fff;
  margin: 0;
  margin-bottom: 16px;
}
.main-container {
  padding: 16px;
}
.news-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
