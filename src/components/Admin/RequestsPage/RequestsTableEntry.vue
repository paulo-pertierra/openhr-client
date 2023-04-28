<script lang="ts" setup>
import moment from 'moment';
moment.updateLocale(moment.locale(), {invalidDate: "No Date Specified"})
const props = defineProps(["transaction"]);
</script>
<template>
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {{ props.transaction.user.profile.lastName }} 
      {{ props.transaction.user.profile.firstName }}
      {{ props.transaction.user.profile.middleName.charAt(0) }}.
      {{ props.transaction.user.profile.suffix }}
    </th>
    <td class="px-6 py-4">
      <span class=" text-xs">{{ moment(props.transaction.createdAt).calendar() }}</span> <br>
      <span class="font-bold">{{props.transaction.transactionType}}</span>
    </td>
    <td class="px-6 py-4 overflow-auto">
      {{ props.transaction.description }}
    </td>
    <td class="px-6 py-4">
      {{ moment(props.transaction.startDate).format("LLL") }}
    </td>
    <td class="px-6 py-4">
      {{ moment(props.transaction.endDate).format("LLL") }}
    </td>
    <td class="px-6 py-4">
      PENDING
    </td>
    <td class="px-6 py-4 text-right">
      <button href="#" class="mx-1 font-medium text-slate-600 dark:text-blue-500 p-1 border-blue-500 border rounded-lg hover:bg-blue-500 hover:text-white">Approve</button>
      <button href="#" class="mx-1 font-medium text-slate-600 dark:text-red-500 p-1 border-red-500 border rounded-lg hover:bg-red-500 hover:text-white">Decline</button>
    </td>
  </tr>
</template>