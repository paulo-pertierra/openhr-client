<script lang="ts" setup>
import { ref } from "vue";
import * as fns from "date-fns";
const props = defineProps(["attendance"]);
import { formatISOToReadable } from '@/utilities/time'
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
      {{ formatISOToReadable(props.attendance.date, 'yyyy MMMM dd') }}
    </td>
    <td class="px-6 py-4">
      {{ formatISOToReadable(props.attendance.timeInAm, 'p') }}
    </td>
    <td class="px-6 py-4">
      {{ formatISOToReadable(props.attendance.timeOutAm, 'p') }}
    </td>
    <td class="px-6 py-4">
      {{ formatISOToReadable(props.attendance.timeInPm, 'p') }}
    </td>
    <td class="px-6 py-4">
      {{ formatISOToReadable(props.attendance.timeOutPm, 'p') }}
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
