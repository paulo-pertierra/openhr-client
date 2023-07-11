<script lang="ts" setup>
import { reactive, ref } from "vue";
import AttendancesTableHead from "./AttendancesPage/AttendancesTableHead.vue";
import AttendancesTableEntry from "./AttendancesPage/AttendancesTableEntry.vue";
import axios from "axios";

import { useCredentialsStore } from "@/stores/auth";
const credentials = useCredentialsStore();
const attendances = ref([]);
axios.get(`/times/user/${credentials.auth.info.uuid}`).then((res) => {
  attendances.value = res.data.data;
});
</script>
<template>
  <p class="text-gray-700 text-3xl text-center my-5 font-extrabold">Attendances</p>
  <div class="grid grid-cols-6 w-full gap-4">
    <div class="col-span-6">
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
      <div class="cols-6 relative overflow-x-auto shadow-md sm:rounded-lg">
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
    </div>
  </div>
</template>
