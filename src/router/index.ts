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
      beforeEnter: () => {
        if (isUser()) return {path: "/user"}
        if (isAdmin()) return {path: "/admin"}
        return { path: "/auth"}
      }
    },
    {
      path: "/auth",
      name: "auth",
      beforeEnter: () => {
        if (isUser()) return {path: "/user"}
        if (isAdmin()) return {path: "/admin"}
      },
      redirect: "/auth/user",
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
      },
      children: [
        {
          path: "/user/dashboard"
        }
      ]
    },
    {
      path: "/admin",
      component: () => import('@/views/AdminView.vue'),
      beforeEnter: () => {
        if (!isAdmin()) {
          Swal.fire("Error", "You are not logged in as an admin!")
          return { path: "/"}
        }
      },
      children: [
        {
          path: '/admin/employees',
          component: () => import('@/components/Admin/EmployeesPage.vue')
        },
        {
          path: '/admin/attendances',
          component: () => import('@/components/Admin/AttendancesPage.vue')
        },
        {
          path: '/admin/dashboard',
          component: () => import('@/components/Admin/DashboardPage.vue')
        },
        {
          path: '/admin/requests',
          component: () => import('@/components/Admin/RequestsPage.vue')
        },
        {
          path: '/admin/calendar',
          component: () => import('@/components/Admin/CalendarPage.vue')
        }
      ]   
    }
  ]
});

export default router;
