<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import Swal from "sweetalert2";
import type { UserData } from "@/types/types";
import { useUserStore } from "@/stores/pinia";
import router from "@/router";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});

const username = ref(""),
  password = ref("");
const payload: UserData = reactive({
  username,
  password
});

function validatePayload() {
  if (!username.value || !password.value) {
    Swal.fire("Empty fields", "Please fill out the required fields", "warning");
    return;
  }
  loginUser();
}

const userStore = useUserStore();
function loginUser() {
  axios
    .post("/auth/login", payload)
    .then(async (res) => {
      Swal.fire("Success!", "Logged in, redirecting...", "success");
      userStore.setUser(res.data.data);
      const roleObj: string = res.data.data.role;
      const role =  roleObj.toLowerCase();
      if (role === "admin") {
        router.push("/admin");
        return;
      }
      if (role === "employee" || role === "intern") {
        router.push("/user");
        return;
      }
      throw new Error();
    })
    .catch((error) => {
      console.log(error);
      Swal.fire("Error", `Invalid username or password${error.message}`, "error");
    });
}
</script>

<template>
  <form id="signin-form" class="space-y-4 md:space-y-6" @submit.prevent>
    <div>
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Your email</label
      >
      <input
        v-model="username"
        type="username"
        name="username"
        id="username"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="name@company.com"
      />
    </div>
    <div>
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Password</label
      >
      <input
        v-model="password"
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input
            id="remember"
            aria-describedby="remember"
            type="checkbox"
            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
          />
        </div>
        <div class="ml-3 text-sm">
          <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
        </div>
      </div>
      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >Forgot password?</a
      >
    </div>
    <button
      @click="validatePayload()"
      class="w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Sign in
    </button>
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Don’t have an account yet?
      <RouterLink to="signup" class="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >Sign up</RouterLink
      >
    </p>
  </form>
</template>
