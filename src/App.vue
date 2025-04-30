<script>
import NewsItem from "./NewsItem.vue";

export default {
  data() {
    return {
      news: [
        {
          id: 1,
          title: "Джо Байден победил на выборах в США",
          isOpen: false,
        },
        {
          id: 2,
          title: "Путин пообнимался с Трампом",
          isOpen: false,
        },
        {
          id: 3,
          title:
            "Интернет больше не нужен. Армяне изобрели новые инновационные шашлыки, читать продолжение в источнике...",
          isOpen: false,
        },
        {
          id: 4,
          title: "Делать портфолио и сайт всё-таки нужно",
          isOpen: false,
        },
        {
          id: 5,
          title: "На тестовое всё так же вежливо кладём хер",
          isOpen: false,
        },
        {
          id: 6,
          title: "Нас ждёт Ядерная Гойда",
          isOpen: false,
        },
      ],
    };
  },
  components: {
    NewsItem,
  },
};
</script>

<template>
  <h1 class="header">Актуальные новости</h1>
  <NewsItem
    v-for="item in news"
    :key="item.id"
    :id="item.id"
    :title="item.title"
    :is-open="item.isOpen"
    @click-news-item="item.isOpen = !item.isOpen"
  />
</template>

<style>
.header {
  color: #fff;
}
</style>
