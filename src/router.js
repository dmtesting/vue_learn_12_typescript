import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import ReusablePage from "./views/ReusablePage.vue";

const router = createRouter({
  routes: [
    {
      path: "/home",
      alias: "/",
      component: HomePage,
    },
    {
      path: "/reusable",
      component: ReusablePage,
    },
  ],
  history: createWebHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

router.beforeEach((from, to, next) => {
  if (from.meta.cantEnter) {
    next(false);
    return;
  }

  next();
});

router.afterEach((from, to) => {
  // в курсе было заявлено что можно здесь собирать аналитику
});

export default router;
