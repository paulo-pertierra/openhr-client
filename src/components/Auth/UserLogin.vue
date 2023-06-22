<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import { initFlowbite } from "flowbite";
onMounted(() => {
  initFlowbite();
});

const credential = reactive({
  username: "",
  password: ""
})

import { useUserAuthStore } from '@/stores/auth'
const auth = useUserAuthStore();

import { RouterLink } from "vue-router";
</script>

<template>
  <form id="signin-form" class="space-y-4 md:space-y-6" @submit.prevent>
    <div>
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Username</label
      >
      <input
        v-model="credential.username"
        type="username"
        name="username"
        id="username"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="juan.delacruz"
      />
    </div>
    <div>
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Password</label
      >
      <input
        v-model="credential.password"
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
    <button
      @click="auth.logInUser(credential)"
      class="text-white w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Sign in as user
    </button>
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Want to sign in as admin?
      <RouterLink to="admin" class="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >Click here.</RouterLink
      >
    </p>
  </form>
</template>
