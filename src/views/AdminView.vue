<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";
import axios from "axios";
import router from "../router";
import { RouterLink, RouterView } from "vue-router";
const user = JSON.parse(localStorage.getItem("user") || "{}");

const name = ref("");
const username = ref("");
const role = ref("");

axios
  .get(`/users/${user.id}?profile=true`)
  .then((res) => {
    name.value = res.data.profile.lastName + " " + res.data.profile.firstName;
    username.value = res.data.username;
    role.value = res.data.role;
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});

// Log Out
function logOut() {
  localStorage.removeItem("user");
  router.push("/");
}
</script>
<template>
  <aside
    id="sidebar"
    class="fixed w-64 top-0 left-0 z-40 h-screen transition-transform -translate-x-full border-gray-200 bg-violet sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar"
  >
    <img src="/blinc-logo.png" alt="logo" class="mx-auto h-15 w-40 pt-8 pb-24" :draggable="false" />
    <div class="h-full px-3 pb-4 overflow-y-auto bg-violet dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li>
          <RouterLink
            to="/admin/dashboard"
            class="flex items-center text-s p-2 text-white hover:bg-gradient-to-l from-grad hover:border-r-8 border-pink-300"
          >
            <img src="/dashboard.svg" class="pr-3" alt="" />
            Dashboard
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/admin/attendances"
            class="flex items-center p-2 text-s text-white hover:bg-gradient-to-l from-grad hover:border-r-8 border-pink-300"
          >
            <img src="/attendance.svg" class="pr-3" alt="" />
            Attendance
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/admin/employees"
            class="flex items-center p-2 text-s text-white hover:bg-gradient-to-l from-grad hover:border-r-8 border-pink-300"
          >
            <img src="/employees.svg" class="pr-3" alt="" />
            Employees
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/admin/requests"
            class="flex items-center p-2 text-s text-white hover:bg-gradient-to-l from-grad hover:border-r-8 border-pink-300"
          >
            <img src="/requests.svg" class="pr-3" alt="" />
            Requests
          </RouterLink>
        </li>
        <li>
          <a
            href="/admin/calendar"
            class="flex items-center p-2 text-s text-white hover:bg-gradient-to-l from-grad hover:border-r-8 border-pink-300"
          >
            <img src="/calendar.svg" class="pr-3" alt="" />
            Calendar
          </a>
        </li>
        <li>
          <RouterLink
            to="/admin/profile"
            class="flex items-center p-2 text-s text-white hover:bg-gradient-to-l from-grad hover:border-r-8 border-pink-300"
          >
            <img src="/profile.svg" class="pr-3" alt="" />
            Profile
          </RouterLink>
        </li>
      </ul>
      <ul class="bottom-10 space-y-2 font-medium mt-20">
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-s text-white hover:bg-gradient-to-l from-grad hover:border-r-8 border-pink-300"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">About</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            class="flex items-center text-s p-2 text-white dark:text-white hover:bg-gradient-to-l from-grad hover:border-r-8 border-pink-300"
          >
            <span class="ml-3 whitespace-nowrap">Logout</span>
            <img src="/logout.svg" class="ml-2" alt="" />
          </a>
        </li>
      </ul>
    </div>
  </aside>

  <div class="bg-primary">
    <div class="bg-white sm:ml-64 rounded-l-[2.5rem] min-h-screen">
      <div class="p-1 border-b">
        <div class="px-2 py-2 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
              <button
                data-drawer-target="sidebar"
                data-drawer-toggle="sidebar"
                aria-controls="sidebar"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span class="sr-only">Open sidebar</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex items-center">
              <div class="flex items-center ml-3">
                <div>
                  <button
                    type="button"
                    class="flex text-sm bg-blue-500 p-2 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span class="sr-only">Open user menu</span>
                    Account
                  </button>
                </div>
                <div
                  class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div class="px-3 py-3" role="none">
                    <p class="text-xs text-gray-900 dark:text-white" role="none">{{ name }}</p>
                    <p
                      class="text-xs font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      {{ username }} | {{ role }}
                    </p>
                  </div>
                  <ul class="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                        >Dashboard</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                        >Settings</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                        >Earnings</a
                      >
                    </li>
                    <li>
                      <a
                        @click="logOut()"
                        class="cursor-pointer block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                        >Sign out</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="p-4">
        <div class="p-4 bg-slate-200 rounded-xl">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
