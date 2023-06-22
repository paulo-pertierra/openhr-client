<script lang="ts" setup>
import { reactive } from 'vue';

const credential = reactive({
  username: "",
  password: ""
})

import { useAdminAuthStore } from '@/stores/auth'
const auth = useAdminAuthStore();

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
        placeholder="admin.juan.delacruz"
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
      class="text-white w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      @click="auth.logInAdmin(credential)"
    >
      Sign in as admin
    </button>
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Want to sign in as user?
      <RouterLink to="user" class="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >Click here.</RouterLink
      >
    </p>
  </form>
</template>
