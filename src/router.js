import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import TaskPage from "./views/TaskPage.vue";
import CreateTaskPage from "./views/CreateTaskPage.vue";

const router = createRouter({
  routes: [
    {
      path: "/home",
      alias: "/",
      component: HomePage,
    },
    {
      path: "/task/:taskId",
      component: TaskPage,
      props: true,
    },
    {
      path: "/tasks/create",
      component: CreateTaskPage,
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
