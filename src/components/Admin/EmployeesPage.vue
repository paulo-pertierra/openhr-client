<script lang="ts" setup>
import TableHead from "./EmployeesPage/EmployeeTableHead.vue";
import TableEntry from "./EmployeesPage/EmployeeTableEntry.vue";
import axios from "axios";
import { ref } from "vue";

const employees = ref([]);
axios.get("/users?profile=true").then((res) => {
  employees.value = res.data;
});
</script>

<template>
  <p class="text-gray-700 text-3xl text-center my-5 font-extrabold">Employees</p>
  <div class="flex">
    <div>
      <button
        class="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded-l-lg border-solid border-white-500 border-2"
      >
        COPY
      </button>
      <button
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
    <div></div>
  </div>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg max-h-144">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-auto">
      <TableHead />
      <tbody>
        <TableEntry v-for="(employee, index) in employees" :key="index" :info="employee" />
      </tbody>
    </table>
  </div>
</template>
