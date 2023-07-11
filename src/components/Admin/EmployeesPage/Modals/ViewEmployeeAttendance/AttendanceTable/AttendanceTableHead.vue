<script lang="ts" setup>
const tableHeads = ["Date", "AM In", "AM Out", "PM In", "PM Out", "Hours Worked", "Remarks"];
</script>

<template>
  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th v-for="(tableHead, index) in tableHeads" :key="index" scope="col" class="px-6 py-3">
        {{ tableHead }}
      </th>
    </tr>
  </thead>
</template>
