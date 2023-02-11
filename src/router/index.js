import { createRouter, createWebHistory } from "vue-router";
import Home from "@/view/HomePage.vue";
import Search from "@/view/SearchPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/search",
      name: "search",
      component: Search,
    },
  ],
});

export default router;
