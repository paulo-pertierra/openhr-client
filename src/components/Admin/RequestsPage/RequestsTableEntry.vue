<script lang="ts" setup>
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";
import router from "@/router";
moment.updateLocale(moment.locale(), { invalidDate: "No Date Specified" });
const props = defineProps(["transaction"]);

function approveRequest() {
  axios
    .put(`/transactions/approve/${props.transaction.id}`)
    .then(() => {
      Swal.fire("Success.", "Request has been approved.", "success");
      setInterval(() => router.go(0), 1000);
    })
    .catch(() => {
      Swal.fire("Error", "Could not complete your request.", "error");
    });
}

function declineRequest() {
  axios
    .put(`/transactions/decline/${props.transaction.id}`)
    .then(() => {
      Swal.fire("Success.", "Request has been declined.", "success");
      setInterval(() => router.go(0), 1000);
    })
    .catch(() => {
      Swal.fire("Error", "Could not complete your request.", "error");
    });
}

function pendingRequest() {
  Swal.fire("Don't forget", "You'll have to add this functionality later", "warning");
}
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
    <td class="px-6 py-4">
      <span v-if="props.transaction.status === 'Approved'" class="text-blue-500 font-bold"
        >Approved</span
      >
      <span v-if="props.transaction.status === 'Pending'" class="text-orange-400 font-bold"
        >Pending</span
      >
      <span v-if="props.transaction.status === 'Declined'" class="text-red-500 font-bold"
        >Declined</span
      >
    </td>
    <td class="px-8 py-4 text-right">
      <div v-if="props.transaction.status === 'Pending'">
        <button
          @click="approveRequest()"
          class="mx-1 my-1 font-medium text-slate-600 dark:text-blue-500 w-12 border-blue-500 border rounded-lg hover:bg-blue-500 hover:text-white"
        >
          YES
        </button>
        <button
          @click="declineRequest()"
          href="#"
          class="mx-1 my-1 font-medium text-slate-600 dark:text-red-500 w-12 border-red-500 border rounded-lg hover:bg-red-500 hover:text-white"
        >
          NO
        </button>
      </div>
      <div v-else>
        <button
          @click="pendingRequest()"
          href="#"
          class="mx-1 my-1 font-medium text-slate-600 dark:text-red-500 w-12 border-red-500 border rounded-lg hover:bg-red-500 hover:text-white"
        >
          RESET
        </button>
      </div>
    </td>
  </tr>
</template>
