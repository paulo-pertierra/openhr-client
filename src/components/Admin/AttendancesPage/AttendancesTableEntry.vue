<script lang="ts" setup>
import { ref } from "vue";
import * as fns from "date-fns";
const props = defineProps(["attendance"]);

function formatDateTime(raw: string) {
  try {
    const date = new Date(raw);
    return raw === null ? "No Data" : fns.format(date, "p");
  } catch {
    return "No Data";
  }
}
</script>
<template>
  <tr>
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {{ props.attendance.user.lastName }}
      {{ props.attendance.user.firstName }}
      {{ props.attendance.user.middleName }}
    </th>
    <td class="px-6 py-4">
      {{ props.attendance.user.workDepartment }}
    </td>
    <td class="px-6 py-4">
      {{ fns.format(new Date(props.attendance.date), "PP") }}
    </td>
    <td class="px-6 py-4">
      {{ formatDateTime(props.attendance.timeInAm) }}
    </td>
    <td class="px-6 py-4">
      {{ formatDateTime(props.attendance.timeOutAm) }}
    </td>
    <td class="px-6 py-4">
      {{ formatDateTime(props.attendance.timeInPm) }}
    </td>
    <td class="px-6 py-4">
      {{ formatDateTime(props.attendance.timeOutPm) }}
    </td>
    <td class="px-6 py-4">
      <span>{{ props.attendance.hoursWorkedAm }}</span>
      <span>{{ props.attendance.hoursWorkedPm }}</span>
    </td>
    <td class="px-6 py-4">
      <!-- <p
        v-if="Object.is(props.attendance.timeOut, null) && props.attendance.remark != 'Absent'"
        class="mx-0.5 font-bold inline bg-blue-500 w-10 text-white p-2 rounded-lg text-center"
      >
        ⌛ No Out
      </p> -->
    </td>
  </tr>
</template>
