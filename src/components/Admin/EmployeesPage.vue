<script lang="ts" setup>
import TableHead from "./EmployeesPage/EmployeeTableHead.vue";
import TableEntry from "./EmployeesPage/EmployeeTableEntry.vue";

import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { useUserStore } from "@/stores/user";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
library.add(faUserPlus)

const userStore = useUserStore();

onMounted(() => {
  console.log("yes")
  initFlowbite();
  userStore.getManyUsers()
});

function arrayToCsv(data) {
  const arrayRaw = [Object.keys(data[0])].concat(data)

  return arrayRaw.map(it => {
    return Object.values(it).toString()
  }).join('\n')
}

import { saveAs } from 'file-saver'



function downloadEmployeesToCsv(content, contentType) {
  var blob = new Blob([content], { type: contentType })
  saveAs(blob, 'employees.csv')
  console.log("s")
}

</script>

<template>
  <p class="text-gray-700 text-3xl text-center my-5 font-extrabold">Employees</p>
  <div class="flex justify-between">
    <div>
      <button
        class="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded-l-lg border-solid border-white-500 border-2"
      >
        COPY
      </button>
      <button
        @click="downloadEmployeesToCsv(arrayToCsv(userStore.state.users), 'text/csv')"
        class="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 border-solid border-white-500 border-2"
      >
        CSV
      </button>
      <button
        class="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 border-solid border-white-500 border-2"
      >
        PDF
      </button>
      <button
        class="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded-r-lg border-solid border-white-500 border-2"
      >
        PRINT
      </button>
    </div>
    <div>
      <RouterLink
        to="/admin/register"
        class="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded-lg border-solid border-white-500 border-2"
      >
        <FontAwesomeIcon icon="fa-solid fa-user-plus" />
        New Employee
      </RouterLink>
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
