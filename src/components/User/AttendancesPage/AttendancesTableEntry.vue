<script lang="ts" setup>
import * as fns from "date-fns";
const props = defineProps(["attendance"]);

function formatISOToReadable(dateISOString, args: string) {
  return dateISOString ? fns.format(new Date(dateISOString), args) : "No Data";
}

function isEarly(dateString) {}
</script>
<template>
  <tr
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  >
    <td class="px-6 py-4">
      {{ formatISOToReadable(props.attendance.date, "yyyy MMMM dd") }}
    </td>
    <td class="px-6 py-4">
      {{ formatISOToReadable(props.attendance.timeInAm, "pp") }}
    </td>
    <td class="px-6 py-4">
      {{ formatISOToReadable(props.attendance.timeOutAm, "pp") }}
    </td>
    <td class="px-6 py-4">
      {{ formatISOToReadable(props.attendance.timeInPm, "pp") }}
    </td>
    <td class="px-6 py-4">
      {{ formatISOToReadable(props.attendance.timeOutPm, "pp") }}
    </td>
    <td class="px-6 py-4">
      <p
        v-if="false"
        class="mx-0.5 inline bg-emerald-600 w-10 text-white p-1.5 rounded-lg text-center"
      >
        Early
      </p>
      <p
        v-if="false"
        class="mx-0.5 inline bg-slate-500 w-10 text-white p-1.5 rounded-lg text-center"
      >
        Early Out
      </p>
    </td>
    <!-- <td class="px-6 py-4 text-right">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
          </td> -->
  </tr>
</template>
