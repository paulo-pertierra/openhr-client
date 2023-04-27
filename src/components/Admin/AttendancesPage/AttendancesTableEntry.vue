<script lang="ts" setup>
import { ref } from 'vue';
import moment from 'moment';
moment.updateLocale(moment.locale(), { invalidDate: "No Data" })
const props = defineProps(["attendance"])


const late = ref(false)

</script>
<template>
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {{ props.attendance.user.profile.lastName }}
      {{ props.attendance.user.profile.firstName }}
      {{ props.attendance.user.profile.middleName.charAt(0) }}.{{ props.attendance.user.profile.suffix }}
    </th>
    <td class="px-6 py-4">
      {{ props.attendance.user.profile.department }} | {{ props.attendance.user.profile.employmentType }}
    </td>
    <td class="px-6 py-4">
      {{ moment(props.attendance.recordDate).format("YYYY MMMM DD") }}
    </td>
    <td class="px-6 py-4">
      {{ moment(props.attendance.timeIn).format("hh:mm A") }}
    </td>
    <td class="px-6 py-4">
      {{ moment(props.attendance.timeOut).format("hh:mm A") }}
    </td>
    <td class="px-6 py-4">
      <p v-if="false" class="mx-0.5 inline bg-emerald-600 w-10 text-white p-1.5 rounded-lg text-center">Early</p>
      <p v-if="late" class="mx-0.5 inline bg-orange-500 w-10 text-white p-1.5 rounded-lg text-center">Late</p>
      <p v-if="false" class="mx-0.5 inline bg-slate-500 w-10 text-white p-1.5 rounded-lg text-center">Early Out</p>
    </td>
    <!-- <td class="px-6 py-4 text-right">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
          </td> -->
  </tr>
</template>