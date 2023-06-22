import AdminLogin from "@/components/Auth/AdminLogin.vue";
import UserLogin from "@/components/Auth/UserLogin.vue";
import AuthView from "@/views/AuthView.vue";
import { createRouter, createWebHistory } from "vue-router";
import { isAuthenticated, isAdmin, isUser } from "./authncheck";
import Swal from "sweetalert2";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/auth/user"
    },
    {
      path: "/auth",
      name: "auth",
      redirect: () => {
        return "/auth/user";
      },
      component: () => AuthView,
      children: [
        {
          path: "user",
          component: () => UserLogin,
        },
        {
          path: "admin",
          component: () => AdminLogin,
        }
      ]
    },
    {
      path: "/user",
      component: () => import('@/views/UserView.vue'),
      beforeEnter: () => {
        if (!isUser()) {
          Swal.fire("Error", "You are not logged in as a user!")
          return { path: "/"}
        }
      }
    },
    {
      path: "/admin",
      component: () => import('@/views/UserView.vue'),
      beforeEnter: () => {
        if (!isAdmin()) {
          Swal.fire("Error", "You are not logged in as an admin!")
          return { path: "/"}
        }
      }
    }
  ]
});



router.beforeEach(async (to, from) => {
  if (
    // make sure the user is authenticated
    !isAuthenticated &&
    // Avoid an infinite redirect
    (to.fullPath !== '/auth/admin' && to.fullPath !=='/auth/user')
  ) {
    // redirect the user to the login page
    return { path: '/' }
  }
})

export default router;
