<script lang="ts" setup>
const tableHeads = [
  {
    label: "Name",
    sort: "lastName"
  },
  {
    label: "Department",
    sort: "department"
  },
  {
    label: "Phone",
    sort: "contactNumber"
  },
  {
    label: "Email",
    sort: "contactEmail"
  }
];
import { useEmployeeTableSorterStore } from "@/stores/pinia";
import { ref } from "vue";
const sortState = useEmployeeTableSorterStore();

const orderer = ref("desc");
function sortAlgo(sort: string, order: string) {
  orderer.value === "desc" ? (orderer.value = "asc") : (orderer.value = "desc");
  console.log(order);

  sortState.setSorter(sort, order);
}
</script>
<template>
  <thead
    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0"
  >
    <tr>
      <th
        v-for="(tableHead, index) in tableHeads"
        :key="index"
        scope="col"
        class="px-6 py-3 cursor-pointer"
        @click="sortAlgo(tableHead.sort, orderer)"
      >
        {{ tableHead.label }}
      </th>
      <th scope="col" class="px-6 py-3">Attendance</th>
      <th scope="col" class="px-6 py-3">Actions</th>
      <th scope="col" class="hidden">
        <span class="sr-only">Edit</span>
      </th>
    </tr>
  </thead>
</template>
