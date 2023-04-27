<script lang="ts" setup>
import moment from "moment";
moment.updateLocale(moment.locale(), { invalidDate: "No Data" });
const props = defineProps(["attendance"]);
</script>
<template>
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {{ moment(props.attendance.recordDate).format("YYYY MMMM DD") }}
    </th>
    <td class="px-6 py-4">{{ moment(props.attendance.timeIn).format("h:mm A") }}</td>
    <td class="px-6 py-4">{{ moment(props.attendance.timeOut).format("h:mm A") }}</td>
    <td class="px-6 py-4">8</td>
    <td>
      <p class="mx-0.5 inline bg-emerald-600 w-10 text-white p-1.5 rounded-lg text-center">Early</p>
      <p class="mx-0.5 inline bg-orange-500 w-10 text-white p-1.5 rounded-lg text-center">Late</p>
      <p class="mx-0.5 inline bg-slate-500 w-10 text-white p-1.5 rounded-lg text-center">Early Out</p>
      <p class="mx-0.5 inline bg-red-600 w-10 text-white p-1.5 rounded-lg text-center">Absent</p>
    </td>
  </tr>
</template>
