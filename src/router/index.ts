import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "TheContainer",
      component: () => import("@/container/theContainer/TheContainer.vue"),
      children: [
        {
          path: "landing",
          name: "landing",
          alias: ["/"],
          component: () => import("@/views/landing/Landing.vue"),
        },
        {
          path: "FAQ",
          name: "FAQ",
          component: () => import("@/views/faq/Faq.vue"),
        },
        {
          path: "Menu/Breakfast",
          name: "Breakfast",
          props: true,
          component: () => import("@/views/breakfast/Breakfast.vue"),
        },
        {
          path: "Menu/Lunch&Dinner",
          name: "Lunch&Dinner",
          component: () => import("@/views/dinner/Dinner.vue"),
        },
        {
          path: "Menu/Drinks",
          name: "Drinks",
          component: () => import("@/views/drinks/Drinks.vue"),
        },
      ],
    },
  ],

  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
export default router;
