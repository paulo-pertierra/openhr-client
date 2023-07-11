<script lang="ts" setup>
import { onBeforeUpdate, onMounted, ref } from "vue";
import AttendancesTableHead from "./AttendancesPage/AttendancesTableHead.vue";
import AttendancesTableEntry from "./AttendancesPage/AttendancesTableEntry.vue";
import axios from "axios";
import { saveAs } from "file-saver";

const attendances = ref([]);
onMounted(() => {
  axios.get("/times").then((res) => {
    attendances.value = res.data.data;
  });
});

function arrayToCsv(data) {
  const arrayRaw = [Object.keys(data[0])].concat(data);
  return arrayRaw
    .map((item) => {
      const values = Object.values(item).map((value) => {
        if (typeof value === "object" && value !== null) {
          return (
            value!.lastName +
            " " +
            value!.firstName +
            " " +
            (value!.middleName ? (value!.middleName as string) + "." : "")
          );
        } else {
          return value;
        }
      });
      return values.toString();
    })
    .join("\n");
}

function downloadAttendanceCsv(content, contentType) {
  var blob = new Blob([content], { type: contentType });
  saveAs(blob, "attendances.csv");
  console.log("s");
}
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
        @click="downloadAttendanceCsv(arrayToCsv(attendances), 'text/csv')"
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

  <div class="relative overflow-auto shadow-md sm:rounded-lg max-h-144">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white">
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
