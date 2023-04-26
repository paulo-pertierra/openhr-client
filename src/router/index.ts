import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: () => {
        return {
          path: "/auth"
        };
      }
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../views/AuthView.vue"),
      children: [
        {
          path: "login",
          component: import("../components/Auth/LoginPage.vue")
        }
      ]
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../views/AuthView.vue"),
      children: [
        {
          path: "login",
          component: import("../components/Auth/LoginPage.vue")
        },
        {
          path: "signup",
          component: import("../components/Auth/SignupPage.vue")
        }
      ]
    }
  ]
});

export default router;
