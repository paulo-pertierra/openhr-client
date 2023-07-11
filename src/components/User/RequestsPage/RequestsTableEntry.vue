<script lang="ts" setup>
import * as fns from "date-fns";
function formatISOToReadable(dateISOString, args: string) {
  return dateISOString ? fns.format(new Date(dateISOString), args) : "No Data";
}

const props = defineProps(["schedule"]);
</script>
<template>
  <tr
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  >
    <td class="px-6 py-4">
      <span class="text-xs">{{ props.schedule.title }}</span> <br />
      <span class="font-bold">{{ props.schedule.transactionType }}</span>
    </td>
    <td class="px-6 py-4 overflow-auto">
      {{ props.schedule.description }}
    </td>
    <td class="px-6 py-4">{{}}</td>
    <td class="px-6 py-4">{{}}</td>
    <td class="px-6 py-4">{{ props.schedule.status }}</td>
  </tr>
</template>
