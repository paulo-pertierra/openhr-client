<script lang="ts" setup>
import { useEmployeeDataStore } from "@/stores/pinia";
const employee = useEmployeeDataStore();
</script>
<template>
  <div class="space-y-4 md:space-y-6">
    <div class="grid sm:grid-cols-1 gap-2 md:grid-cols-2">
      <div>
        <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >First Name</label
        >
        <input
          type="text"
          name="firstname"
          id="firstname"
          v-model="employee.data.profile.firstName"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Juan"
          required
        />
      </div>
      <div>
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Middle Name</label
        >
        <input
          type="text"
          name="lastname"
          id="lastname"
          v-model="employee.data.profile.middleName"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="De La Cruz"
          required
        />
      </div>
    </div>
    <div class="grid sm:grid-cols-1 gap-2 md:grid-cols-2">
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Last Name</label
        >
        <input
          type="text"
          name="lastname"
          id="lastname"
          v-model="employee.data.profile.lastName"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="De La Cruz"
          required
        />
      </div>
      <div>
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Suffix</label
        >
        <input
          type="text"
          name="suffix"
          id="suffix"
          v-model="employee.data.profile.suffix"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="De La Cruz"
          required
        />
      </div>
    </div>
  </div>
</template>
