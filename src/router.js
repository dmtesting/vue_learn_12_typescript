import { createRouter, createWebHistory } from "vue-router";
import Login from "./views/Login.vue";
import Forget from "./views/Forget.vue";
import Dashboard from "./views/Dashboard.vue";
// import Mail from "./views/Mail.vue";
import AppEmailBody from "./AppEmailBody.vue";
import NotFound from "./views/NotFound.vue";

const Mail = () => import("./views/Mail.vue");

const router = createRouter({
  routes: [
    {
      path: "/login",
      alias: "/",
      component: Login,
    },
    {
      path: "/forget",
      component: Forget,
      meta: { cantEnter: true },
    },
    {
      path: "/dashboard",
      name: "home",
      component: Dashboard,
    },
    {
      path: "/mail",
      component: Mail,
      children: [{ path: ":mailId?", component: AppEmailBody, props: true }],
    },
    // {
    //   path: "/:notFound(.*)",
    //   redirect: "/login",
    // },
    {
      path: "/:notFound(.*)",
      component: NotFound,
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
  // next({ name: "home" });
});

router.afterEach((from, to) => {
  // в курсе было заявлено что можно здесь собирать аналитику
});

export default router;
