<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";
import axios from "axios";
import router from "../router";
import { RouterLink, RouterView } from "vue-router";

import { useCredentialsStore } from "@/stores/auth";
const credentials = useCredentialsStore();
const user = credentials.auth.info;

const name = user.profile.lastName + " " + user.profile.firstName;
const role = user.profile.employmentType + " " + user.profile.workRole;

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
  try {
    const credentials = useCredentialsStore();
    axios.defaults.headers.common = { Authorization: `Bearer ${credentials.auth.info.jwt}` };
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <aside
    id="sidebar"
    class="fixed w-64 top-0 left-0 z-40 h-screen transition-transform -translate-x-full border-gray-200 bg-violet sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar"
  >
    <img src="/blinc-logo.png" alt="logo" class="mx-auto h-15 w-40 pt-8 pb-24" :draggable="false" />
    <div
      class="block w-2/3 mx-auto bg-csv border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <p class="text-sm text-center text-white dark:text-white" role="none">
        {{ name }}
      </p>
      <hr class="w-2/3 mx-auto bg-gray-700 border-[1.5] dark:bg-gray-700" />
      <p
        class="pb-2 text-sm font-medium text-center text-white truncate dark:text-gray-300"
        role="none"
      >
        {{ role }}
      </p>
    </div>
    <div class="h-full px-3 pb-4 overflow-y-auto bg-violet dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li>
          <RouterLink
            to="/user/attendance"
            class="flex items-center p-2 text-s text-white hover:bg-gradient-to-l from-grad hover:border-r-8 border-pink-300"
          >
            <img src="/attendance.svg" class="pr-3" alt="" />
            My Attendance
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/user/request"
            class="flex items-center p-2 text-s text-white hover:bg-gradient-to-l from-grad hover:border-r-8 border-pink-300"
          >
            <img src="/requests.svg" class="pr-3" alt="" />
            My Requests
          </RouterLink>
        </li>
        <li>
          <a
            href="/user/calendar"
            class="flex items-center p-2 text-s text-white hover:bg-gradient-to-l from-grad hover:border-r-8 border-pink-300"
          >
            <img src="/calendar.svg" class="pr-3" alt="" />
            My Calendar
          </a>
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
          <button
            @click="credentials.logOut"
            class="flex w-full text-s p-2 text-white dark:text-white hover:bg-gradient-to-l from-grad hover:border-r-8 border-pink-300"
          >
            <span class="ml-3 whitespace-nowrap">Logout</span>
            <img src="/logout.svg" class="ml-2" alt="" />
          </button>
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
              <h1 class="hidden sm:block text-3xl pl-4 text-slate-700 font-bold">Dashboard</h1>
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
