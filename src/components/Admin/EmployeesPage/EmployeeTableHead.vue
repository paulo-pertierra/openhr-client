<script lang="ts" setup>
const tableHeads = [
  "Name",
  "Department",
  "Phone",
  "Email",
  "Attendance"
];
</script>
<template>
  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th v-for="(tableHead, index) in tableHeads" :key="index" scope="col" class="px-6 py-3">
        {{ tableHead }}
      </th>
      <th scope="col" class="hidden">
        <span class="sr-only">Edit</span>
      </th>
    </tr>
  </thead>
</template>
