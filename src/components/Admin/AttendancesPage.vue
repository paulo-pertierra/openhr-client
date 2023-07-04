<script lang="ts" setup>
import { ref } from "vue";
import AttendancesTableHead from "./AttendancesPage/AttendancesTableHead.vue";
import AttendancesTableEntry from "./AttendancesPage/AttendancesTableEntry.vue";
import axios from "axios";
import { saveAs } from 'file-saver'

const attendances = ref([]);
axios.get("/time").then((res) => {
  attendances.value = res.data;
});

function arrayToCsv() {
  const arrayRaw = [Object.keys(data[0])].concat(data)

  return arrayRaw.map(it => {
    return Object.values(it).toString()
  }).join('\n')
}


function downloadEmployeesToCsv(content, contentType) {
  var blob = new Blob([content], { type: contentType })
  saveAs(blob, 'employees.csv')
  console.log("s")
}
function downloadEmployeesToPdf(content, contentType) {
  var blob = new Blob([content], { type: contentType })
  saveAs(blob, 'employees.pdf')
  console.log("s")
}
</script>
<template>
  <p class="my-5 text-3xl font-extrabold text-center text-gray-700">Attendances</p>
  <div class="flex">
    <div>
      <button
        class="px-4 py-2 my-2 text-xs font-bold text-white bg-blue-500 border-2 border-solid rounded-l-lg hover:bg-blue-700 border-white-500"
      >
        COPY
      </button>
      <button @click="downloadEmployeesToCsv()"
        class="px-4 py-2 my-2 text-xs font-bold text-white bg-blue-500 border-2 border-solid hover:bg-blue-700 border-white-500"
      >
        CSV
      </button>
      <button @click="downloadEmployeesToPdf()"
        class="px-4 py-2 my-2 text-xs font-bold text-white bg-blue-500 border-2 border-solid hover:bg-blue-700 border-white-500"
      >
        PDF
      </button>
      <button
        class="px-4 py-2 my-2 text-xs font-bold text-white bg-blue-500 border-2 border-solid rounded-r-lg hover:bg-blue-700 border-white-500"
      >
        PRINT
      </button>
    </div>
  </div>

  <div class="relative overflow-auto shadow-md sm:rounded-lg h-144">
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
