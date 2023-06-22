<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import axios from "axios";
import { initFlowbite } from "flowbite";

const serverStatusRunning = ref(false);
function checkServerStatus() {
  axios
    .get(`${ 'http://192.168.100.4:5000' }/ping`)
    .then(() => (serverStatusRunning.value = true))
    .catch(() => (serverStatusRunning.value = false));
}
onMounted(() => {
  checkServerStatus();
  initFlowbite();
});

const countdown = ref(5);

if (!serverStatusRunning.value) {
  setInterval(() => {
    countdown.value--;
    if (countdown.value === 0) countdown.value = 5;
    if (countdown.value === 1) checkServerStatus();
  }, 1000);
}
</script>
<template>
  <RouterView v-if="serverStatusRunning" />
  <div class="disconnected" v-else>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
        class="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white select-none"
          >
            <img
              class="w-20 h-20 mx-auto mb-10 sm:mb-5"
              src="/logo.png"
              alt="logo"
              draggable="false"
            />

            Oops! The server is down. Try to contact the administrator.
          </h1>
          <h1 class="text-center">Retrying in {{ countdown }} seconds.</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.disconnected {
  width: 100vw;
  height: 100vh;
  background-color: white;
  background-image: url("/authbg.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
