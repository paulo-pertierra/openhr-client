<script lang="ts" setup>
import moment from "moment";
moment.updateLocale(moment.locale(), { invalidDate: "No Date Specified" });
const props = defineProps(["transaction"]);
</script>
<template>
  <tr
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  >
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {{ props.transaction.user.profile.lastName }}
      {{ props.transaction.user.profile.firstName }}
      {{ props.transaction.user.profile.middleName.charAt(0) }}.
      {{ props.transaction.user.profile.suffix }}
    </th>
    <td class="px-6 py-4">
      <span class="text-xs">{{ moment(props.transaction.createdAt).calendar() }}</span> <br />
      <span class="font-bold">{{ props.transaction.transactionType }}</span>
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
    <td class="px-6 py-4">PENDING</td>
  </tr>
</template>
