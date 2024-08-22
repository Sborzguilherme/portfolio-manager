import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/transactions",
      name: "Transactions",
      component: () => import("../views/Transactions.vue"),
    },
  ],
});

export default router;
