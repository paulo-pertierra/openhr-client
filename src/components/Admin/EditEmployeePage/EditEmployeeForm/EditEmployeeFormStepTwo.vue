<script lang="ts" setup>
import { useEmployeeDataStore } from "@/stores/pinia";
const employee = useEmployeeDataStore();

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
</script>
<template>
  <div class="space-y-4 md:space-y-6">
    <div>
      <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Sex</label
      >
      <select
        name="Gender"
        id="gender"
        v-model="employee.data.profile.gender"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
        <option value="N/A">Prefer not to say</option>
      </select>
    </div>
    <div>
      <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Birth Date</label
      >
      <VueDatePicker v-model="employee.data.profile.birthDate"></VueDatePicker>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <div class="col-span-1">
        <label
          for="contactnumber"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Contact Number</label
        >
        <input
          name="contactnumber"
          id="contactnumber"
          v-model="employee.data.profile.contactNumber"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="col-span-1">
        <label
          for="contactemail"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Contact Email</label
        >
        <input
          type="email"
          name="contactemail"
          id="contactemail"
          v-model="employee.data.profile.contactEmail"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  </div>
</template>
