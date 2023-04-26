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
      redirect: () => {
        return "/auth/login"
      },
      component: () => import("../views/AuthView.vue"),
      children: [
        {
          path: "login",
          component: () => import("../components/Auth/LoginPage.vue")
        },
        {
          path: "signup",
          component: () => import("../components/Auth/SignupPage.vue")
        }
      ],
      beforeEnter: (to, from)=> {
        const localstore = localStorage.getItem("user") 
        if (localstore) {
          const data = JSON.parse(localstore || "{}")
          return `/${data.role.toLowerCase()}`
        }
      }
    },
    {
      path: "/admin",
      component: () => import("../views/AdminView.vue"),
      beforeEnter: async (to, from) => {
        const localstore = localStorage.getItem("user");
        if (localstore) {
          const data = JSON.parse(localstore || "{}");
          return data.role === "ADMIN" ? true : '/auth/login'
        }
        return  '/auth/login'
      }
    },
    {
      path: "/user",
      component: () => import("../views/UserView.vue"),
      beforeEnter: async (to, from) => {
        const localstore = localStorage.getItem("user");
        if (localstore) {
          const data = JSON.parse(localstore || "{}");
          return data.role === "EMPLOYEE" || data.role === "INTERN" ? true : '/auth/login'
        }
        return  '/auth/login'
      }
    }
  ]
});

export default router;
