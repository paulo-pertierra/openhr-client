<script lang="ts" setup>
import { ref } from "vue";
import AttendancesTableHead from "./AttendancesPage/AttendancesTableHead.vue";
import AttendancesTableEntry from "./AttendancesPage/AttendancesTableEntry.vue";
import axios from "axios";

const attendances = ref([]);
axios.get("/time").then((res) => {
  attendances.value = res.data;
});
</script>
<template>
  <p class="text-gray-700 text-3xl text-center my-5 font-extrabold">Attendances</p>
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
  </div>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <AttendancesTableHead />
      <tbody>
        <AttendancesTableEntry
          v-for="(attendance, index) in attendances"
          :key="index"
          :attendance="attendance"
        />
      </tbody>
    </table>
  </div>
</template>
