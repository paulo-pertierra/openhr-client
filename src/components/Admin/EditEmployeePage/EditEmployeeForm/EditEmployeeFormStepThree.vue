<script lang="ts" setup>
import { useEmployeeDataStore } from "@/stores/pinia";
const employee = useEmployeeDataStore();

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
</script>

<template>
  <div class="space-y-4 md:space-y-6">
    <div class="grid grid-cols-2 gap-2">
      <div>
        <label for="department" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Department</label
        >
        <select
          v-model="employee.data.profile.department"
          name="roles"
          id="roles"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="ADMINFINANCE">Admin & Finance</option>
          <option value="PRODUCTION">Production</option>
          <option value="MARKETING">Marketing</option>
          <option value="SOCIALMEDIA">Social Media</option>
          <option value="DEVOPS">DevOps</option>
          <option value="MOBILEDEV">Mobile Dev</option>
          <option value="WEBDEV">Web Development</option>
          <option value="HR">Human Resource</option>
        </select>
      </div>
      <div>
        <label
          for="employment-type"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Employment Type</label
        >
        <select
          v-model="employee.data.profile.employmentType"
          name="roles"
          id="roles"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="FULLTIME">Full Time</option>
          <option value="PARTTIME">Part Time</option>
          <option value="INTERN">Intern</option>
        </select>
      </div>
      <div class="col-span-2">
        <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Hiring Date</label
        >
        <VueDatePicker v-model="employee.data.profile.hireDate"></VueDatePicker>
      </div>
    </div>
  </div>
</template>
