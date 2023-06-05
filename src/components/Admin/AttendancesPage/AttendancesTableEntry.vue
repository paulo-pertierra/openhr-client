<script lang="ts" setup>
import { ref } from "vue";
import moment from "moment";
moment.updateLocale(moment.locale(), { invalidDate: "No Data" });
const props = defineProps(["attendance"]);

const late = ref(false);

const todayClass = ref("bg-white");
// bg-emerald-50 border-white
if (moment().format("YYYY MMMM DD") === moment(props.attendance.recordDate).format("YYYY MM DD")) {
  todayClass.value = "bg-emerald-50 border-white"
}

const workHours = ref(props.attendance.hoursWorked)

if (workHours.value > 4) {
  workHours.value--;
}
</script>
<template>
  <tr
    :class="['border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600', todayClass]"
  >
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {{ props.attendance.user.profile.lastName }}
      {{ props.attendance.user.profile.firstName }}
      {{ props.attendance.user.profile.middleName.charAt(0) }}.{{
        props.attendance.user.profile.suffix
      }}
    </th>
    <td class="px-6 py-4">
      {{ props.attendance.user.profile.department }} |
      {{ props.attendance.user.profile.employmentType }}
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
      <span v-if="props.attendance.hoursWorked">{{ workHours }}</span>
      <span v-else>No Data</span>
      <span v-if="props.attendance.hoursWorked > 8"></span>
    </td>
    <td class="px-6 py-4">
      <p
        v-if="props.attendance.remark === 'OnTime'"
        class="mx-0.5 font-bold inline bg-emerald-600 w-10 text-white p-2 rounded-lg text-center"
      >
       🕒 On Time
      </p>
      <p
        v-if="props.attendance.remark === 'Late'"
        class="mx-0.5 font-bold inline bg-orange-500 w-10 text-white p-2 rounded-lg text-center"
      >
      ⏰ Late
      </p>
      <p
        v-if="props.attendance.remark === 'Absent'"
        class="mx-0.5 font-bold inline bg-red-500 w-10 text-white p-2 rounded-lg text-center"
      >
        😔 Absent
      </p>
      <p
        v-if="false"
        class="mx-0.5 inline bg-slate-500 w-10 text-white p-1.5 rounded-lg text-center"
      >
        Early Out
      </p>
    </td>
  </tr>
</template>
