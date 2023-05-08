<script lang="ts" setup>
import RequestsTableHeader from "./RequestsPage/RequestsTableHeader.vue";
import RequestsTableEntry from "./RequestsPage/RequestsTableEntry.vue";
import axios from "axios";
import { ref } from "vue";
import Swal from "sweetalert2";
import { useUserStore } from "@/stores/pinia";
const user = useUserStore();

const transactions = ref([]);
axios
  .get(`/transactions/${user.id}?profile=true`)
  .then((res) => {
    transactions.value = res.data;
  })
  .catch((err) => {
    Swal.fire("Error. Wrong request." + err.message);
  });
</script>
<template>
  <div class="flex my-4 justify-end">
    <button
      class="bg-blue-600 hover:bg-blue-800 transition-all ease-in-out duration-250 text-white p-2 rounded-lg"
    >
      Add a Request
    </button>
  </div>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <RequestsTableHeader />
      <tbody>
        <RequestsTableEntry
          v-for="(transaction, index) in transactions"
          :key="index"
          :transaction="transaction"
        />
      </tbody>
    </table>
  </div>
</template>
