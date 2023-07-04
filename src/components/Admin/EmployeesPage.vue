<script lang="ts" setup>
import TableHead from "./EmployeesPage/EmployeeTableHead.vue";
import TableEntry from "./EmployeesPage/EmployeeTableEntry.vue";

import { useUserStore } from "@/stores/user";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
library.add(faUserPlus);

const userStore = useUserStore();

function arrayToCsv(data) {
  const arrayRaw = [Object.keys(data[0])].concat(data);

  return arrayRaw
    .map((it) => {
      return Object.values(it).toString();
    })
    .join("\n");
}

import { saveAs } from "file-saver";

function downloadEmployeesToCsv(content, contentType) {
  var blob = new Blob([content], { type: contentType });
  saveAs(blob, "employees.csv");
  console.log("s");
}

import { onMounted, ref } from "vue";
onMounted(() => {
  userStore.getManyUsers();
})

const field = ref('lastName')
const value = ref('')
const order = ref('desc')
</script>

<template>
  <p class="text-gray-700 text-3xl text-center my-5 font-extrabold">Employees</p>
  <div class="w-full border-2 border-black">
    <div class="flex justify-between">
      <div>
        <button
          class="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded-l-lg border-solid border-white-500 border-2">
          COPY
        </button>
        <button @click="downloadEmployeesToCsv(arrayToCsv(userStore.state.users), 'text/csv')"
          class="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 border-solid border-white-500 border-2">
          CSV
        </button>
        <button
          class="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 border-solid border-white-500 border-2">
          PDF
        </button>
        <button
          class="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded-r-lg border-solid border-white-500 border-2">
          PRINT
        </button>
      </div>
      <RouterLink
        to="/admin/register"
        class="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded-lg border-solid border-white-500 border-2"
      >
        <FontAwesomeIcon icon="fa-solid fa-user-plus" />
        New Employee
      </RouterLink>
    </div>
  </div>
  <div class="w-full">
    <div class="grid grid-cols-2">
      <div class="bg-blue-500 rounded-lg p-1.5 w-fit font-bold "> 
        <span class="text-white rounded-lg">Filter By:</span>
        <select name="" id="" class="rounded-lg h-10 text-black font-normal" v-model="field">
          <option value="username">Username</option>
          <option value="lastName">Last Name</option>
          <option value="firstName">First Name</option>
          <option value="middleName">Middle Name</option>
          <option value="workRole">Work Role</option>
          <option value="workDepartment">Work Department</option>
          <option value="employmentType">Employment Type</option>
        </select>
        <input type="text" class="h-10 rounded-lg mx-2" v-model="value">
        <button class="border-2 border-black text-black bg-white " @click="userStore.getfilteredManyUsers(field, value)">Filter</button>
      </div>
      <div>
        <span class="text-white rounded-lg">Sort By:</span>
        <select name="" id="" class="rounded-lg h-10 text-black font-normal" v-model="field">
          <option value="username">Username</option>
          <option value="lastName">Last Name</option>
          <option value="firstName">First Name</option>
          <option value="middleName">Middle Name</option>
          <option value="workRole">Work Role</option>
          <option value="workDepartment">Work Department</option>
          <option value="employmentType">Employment Type</option>
        </select>
        <select name="" id="" v-model="order">
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
        <button class="border-2 border-black text-black bg-white " @click="userStore.getSortedManyUsersBy(field, order)">Sort</button>
      </div>
    </div>
  </div>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg max-h-144">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-auto">
      <TableHead />
      <tbody>
        <TableEntry v-for="(user, index) in userStore.state.users" :key="index" :user="user" />
      </tbody>
    </table>
  </div>
</template>
