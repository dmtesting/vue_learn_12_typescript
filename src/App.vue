<script>
import NewsItem from "./NewsItem.vue";
import TextComponent from "./TextComponent.vue";
import defaultNews from "./default-news";
import SbercatPng from "./assets/sbercat.png";

export default {
  data() {
    return {
      news: defaultNews,
      imgSrc: SbercatPng,
      inputValue: "",
      isAdded: false,
    };
  },
  provide() {
    return {
      news: this.news,
    };
  },
  methods: {
    addItem() {
      this.inputValue = this.inputValue.trim();
      if (this.inputValue) {
        this.news.push({
          id: Date.now(),
          title: this.inputValue,
          isOpen: false,
        });
        this.inputValue = "";
        this.isAdded = true;
      }
    },
  },
  components: {
    NewsItem,
    TextComponent,
  },
};
</script>

<template>
  <div class="main-container">
    <async-component></async-component>
    <component :is="'TextComponent'"></component>
    <h1 class="header">Привет, мир!</h1>
    <img width="200" :src="imgSrc" alt="" />
    <h2 class="header">Актуальные новости</h2>
    <app-input
      ref="myBtn"
      style="margin: 8px 0"
      placeholder="Добавить ещё новость"
      :value="inputValue"
      @input="
        inputValue = $event.target.value;
        isAdded = false;
      "
      @keypress.enter="addItem"
    />
    <div v-if="isAdded" style="margin: 8px 0">Добавлено</div>
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
