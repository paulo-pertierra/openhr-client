<script lang="ts" setup>
import { reactive, ref } from "vue";
import AttendancesTableHead from "./AttendancesPage/AttendancesTableHead.vue";
import AttendancesTableEntry from "./AttendancesPage/AttendancesTableEntry.vue";
import axios from "axios";

const user = reactive(JSON.parse(localStorage.getItem("user") || "{}"))
console.log(user);

const attendances = ref([]);
axios.get(`/time/${user.id}`).then((res) => {
  attendances.value = res.data;
});
</script>
<template>
  <p class="text-gray-700 text-3xl text-center my-5 font-extrabold">Attendances</p>
  <div class="grid grid-cols-6 w-full gap-4">
    <div class="col-span-4">
      <div class="flex">
        <div>
          <button
            class="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded-l-lg border-solid border-white-500 border-2">
            COPY
          </button>
          <button
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
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <AttendancesTableHead />
          <tbody>
            <AttendancesTableEntry v-for="(attendance, index) in attendances" :key="index" :attendance="attendance" />
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-span-2">
      <div class="h-96 border-2 border-gray-800">
        <span>Calendar Here</span>
      </div>
    </div>
  </div>
</template>
