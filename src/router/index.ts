import { createRouter, createWebHistory } from "vue-router";
import _ from "underscore";

const identifyAdmin = async () => {
  const localstore = localStorage.getItem("user");
  if (localstore) {
    const data = JSON.parse(localstore || "{}");
    return data.role === "ADMIN" ? true : "/auth/login";
  }
  return "/auth/login";
};

const identifyUser = async () => {
  const localstore = localStorage.getItem("user");
  if (localstore) {
    const data = JSON.parse(localstore || "{}");
    return data.role === "EMPLOYEE" || data.role === "INTERN" ? true : "/auth/login";
  }
  return "/auth/login";
};

const userLoggedOut = async () => {
  const localstore = localStorage.getItem("user");
  if (localstore) {
    const data = JSON.parse(localstore || "{}");
    const role: string = data.role
    return `/${role.toLowerCase()}`;
  }
};

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
    },{
      path: "/huh",
      component: () => import("../views/DELETEDesignView.vue")
    },
    {
      path: "/auth",
      name: "auth",
      redirect: () => {
        return "/auth/login";
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
      beforeEnter: userLoggedOut
    },
    {
      path: "/admin",
      component: () => import("../views/AdminView.vue"),
      children: [
        {
          path: "dashboard",
          component: () => import("../components/Admin/DashboardPage.vue")
        },
        {
          path: "attendances",
          component: () => import("../components/Admin/AttendancesPage.vue")
        },
        {
          path: "employees",
          component: () => import("../components/Admin/EmployeesPage.vue")
        },
        {
          path: "employees/:id",
          component: () => import("../components/Admin/EmployeeProfile.vue")
        }, {
          path: "requests",
          component: () => import("../components/Admin/RequestsPage.vue")
        }
      ],
      beforeEnter: identifyAdmin
    },
    {
      path: "/user",
      component: () => import("../views/UserView.vue"),
      beforeEnter: identifyUser
    }
  ]
});

export default router;
