import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  routes: [],
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
