<script lang="ts" setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
        class="w-full bg-white rounded-lg shadow-xl dark:border border-4 border-purple-800 md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            <a href="#" class="mx-auto text-2xl font-semibold text-gray-900 dark:text-white">
              <img class="w-20 h-20 mx-auto mb-10 sm:mb-5" src="/logo.png" alt="logo" />
            </a>
            Welcome to Blinc HR
          </h1>
          <RouterView />
        </div>
      </div>
    </div>
  </main>
</template>

<style>
main {
  width: 100vw;
  height: 100vh;
  background-color: white;
  background-image: url("/authbg.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
