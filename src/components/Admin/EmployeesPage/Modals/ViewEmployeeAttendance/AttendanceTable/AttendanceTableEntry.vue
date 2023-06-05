<script lang="ts" setup>
import moment from "moment";
import { isNull } from "underscore";
import { ref } from "vue";
moment.updateLocale(moment.locale(), { invalidDate: "No Data" });
const props = defineProps(["attendance"]);

const workHours = ref(props.attendance.hoursWorked);
if (workHours.value > 4) workHours.value--;
</script>
<template>
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {{ moment(props.attendance.recordDate).format("YYYY MMMM DD") }}
    </th>
    <td class="px-6 py-4">{{ moment(props.attendance.timeIn).format("h:mm A") }}</td>
    <td class="px-6 py-4">{{ moment(props.attendance.timeOut).format("h:mm A") }}</td>
    <td class="px-6 py-4">{{ workHours }}</td>
    <td>
      <p v-if="props.attendance.remark === 'OnTime'" class="mx-0.5 inline bg-emerald-600 w-10 text-white p-1.5 rounded-lg text-center">On Time</p>
      <p v-if="props.attendance.remark === 'Late'" class="mx-0.5 inline bg-orange-500 w-10 text-white p-1.5 rounded-lg text-center">Late</p>
      <p v-if="false" class="mx-0.5 inline bg-slate-500 w-10 text-white p-1.5 rounded-lg text-center">
        Early Out
      </p>
      <p v-if="props.attendance.remark === 'Absent'" class="mx-0.5 inline bg-red-600 w-10 text-white p-1.5 rounded-lg text-center">Absent</p>
    </td>
  </tr>
</template>
