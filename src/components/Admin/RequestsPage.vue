<script lang="ts" setup>
import RequestsTableHeader from './RequestsPage/RequestsTableHeader.vue';
import RequestsTableEntry from './RequestsPage/RequestsTableEntry.vue';
import axios from 'axios';
import { ref } from 'vue';
import Swal from 'sweetalert2';

const transactions = ref([])
axios.get("/transactions?profile=true")
  .then((res)=> {
    transactions.value = res.data
  })
  .catch((err) => {
    Swal.fire("Error. Wrong request." + err.message)
  })
</script>
<template>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <RequestsTableHeader />
        <tbody>
          <RequestsTableEntry v-for="transaction, index in transactions" :key="index" :transaction="transaction" />
        </tbody>
    </table>
</div>

</template>