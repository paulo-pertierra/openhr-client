<script lang="ts" setup>
const tableHeads = ["NAME", "DEPARTMENT", "DATE", "AM IN", "AM OUT", "PM IN", "PM OUT", "HOURS", "REMARKS"];
</script>

<template>
  <thead
    class="sticky top-0 text-xs text-gray-700 uppercase bg-attendance dark:bg-gray-700 dark:text-gray-400 border-b-2 border-violet"
  >
    <tr>
      <th v-for="(tableHead, index) in tableHeads" :key="index" scope="col" class="px-6 py-3">
        {{ tableHead }}
      </th>
    </tr>
  </thead>
</template>
