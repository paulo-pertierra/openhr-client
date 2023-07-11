<script lang="ts" setup>
const tableHeads = ["NAME", "TRANSACTION TYPE", "DESCRIPTION", "START DATE", "END DATE", "STATUS"];
</script>
<template>
  <thead
    class="sticky top-0 text-xs text-gray-700 uppercase bg-attendance dark:bg-gray-700 dark:text-gray-400 border-b-2 border-violet z-40"
  >
    <tr>
      <th v-for="(tableHead, index) in tableHeads" :key="index" scope="col" class="px-6 py-3">
        {{ tableHead }}
      </th>
      <th scope="col" class="px-6 py-3 text-center">
        <span class="">ACTIONS</span>
      </th>
    </tr>
  </thead>
</template>
