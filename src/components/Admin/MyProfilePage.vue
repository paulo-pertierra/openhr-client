<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import axios from "axios";
import UserView from "@/views/UserView.vue";

const { id } = JSON.parse(localStorage.getItem("user") || "{}");

const profile = ref({
  id: "",
  role: "",
  profile: {
    lastName: "",
    firstName: "",
    middleName: ""
  }
});
onMounted(() => {
  axios.get(`/users/${id}?profile=true`).then((res) => {
    profile.value = res.data;
  });
});
console.log(profile.value);
</script>

<template>
  <div class="w-11/12 mx-auto">
    <div class="flex space-x-4">
      <div class="flex-shrink-0 p-4">
        <img
          class="w-32 h-32 rounded-full hidden lg:block"
          src="https://randomuser.me/api/portraits/women/6.jpg"
          alt="Neil image"
        />
      </div>
      <div class="flex-1 max-w-5xl">
        <div>
          <p class="text-3xl font-medium text-slate-700 dark:text-white">
            {{ profile.profile.firstName }} {{ profile.profile.middleName.charAt(0) }}.
            {{ profile.profile.lastName }}
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ profile.role }} | {{ profile.profile.department }}
          </p>
        </div>
        <div class="grid lg:grid-cols-4 mt-6 md:grid-cols-1">
          <div class="w-48">
            <p class="font-medium text-slate-700 dark:text-white">Email:</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ profile.profile.contactEmail }}
            </p>
          </div>
          <div class="w-48">
            <p class="font-medium text-slate-700 dark:text-white">Contact Number:</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ profile.profile.contactNumber }}
            </p>
          </div>
          <div class="w-48">
            <p class="font-medium text-slate-700 dark:text-white">System ID:</p>
            <p class="text-sm text-gray-500 dark:text-gray-400 text-ellipsis">
              {{ profile.id }}
            </p>
          </div>
          <div class="w-48">
            <p class="font-medium text-slate-700 dark:text-white">Employee ID:</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Feature Planned</p>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden xl:grid grid-cols-5 gap-4 w-fit p-4 ml-1">
      <div id="card" class="col-span-1 bg-slate-700 text-white rounded-lg w-48 h-32 relative">
        <span class="absolute text-xl p-4">Sick Leave</span>
        <span class="absolute pl-28 pt-16 text-5xl">21</span>
      </div>
      <div id="card" class="col-span-1 bg-indigo-600 text-white rounded-lg w-48 h-32 relative">
        <span class="absolute text-xl p-4">Sick Leave</span>
        <span class="absolute pl-28 pt-16 text-5xl">21</span>
      </div>
      <div id="card" class="col-span-1 bg-indigo-600 text-white rounded-lg w-48 h-32 relative">
        <span class="absolute text-xl p-4">Sick Leave</span>
        <span class="absolute pl-28 pt-16 text-5xl">21</span>
      </div>
      <div id="card" class="col-span-1 bg-indigo-600 text-white rounded-lg w-48 h-32 relative">
        <span class="absolute text-xl p-4">Sick Leave</span>
        <span class="absolute pl-28 pt-16 text-5xl">21</span>
      </div>
      <div id="card" class="col-span-1 bg-indigo-600 text-white rounded-lg w-48 h-32 relative">
        <span class="absolute text-xl p-4">Sick Leave</span>
        <span class="absolute pl-28 pt-16 text-5xl">21</span>
      </div>
    </div>
  </div>
</template>
