<script lang="ts" setup>
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";
import router from "@/router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleXmark, faCircleCheck, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
library.add(faCircleXmark, faCircleCheck, faRotateLeft);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

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
    <td class="pr-4 text-right">
      <div v-if="props.transaction.status === 'Pending'">
        <button @click="approveRequest()">
          <FontAwesomeIcon
            class="px-1 w-6 h-auto text-green-600 hover:text-green-800 transition-all duration-150 ease-in-out"
            icon="fa-solid fa-circle-check"
          />
        </button>
        <button @click="declineRequest()" href="#">
          <FontAwesomeIcon
            class="w-6 h-auto text-red-600 hover:text-red-800 transition-all duration-150 ease-in-out"
            icon="fa-solid fa-circle-xmark"
          />
        </button>
      </div>
      <div v-else>
        <button @click="pendingRequest()" href="#">
          <FontAwesomeIcon
            class="px-4 w-6 h-auto text-orange-500 hover:text-orange-400 transition-all duration-150 ease-in-out"
            icon="fa-solid fa-rotate-left"
          />
        </button>
      </div>
    </td>
  </tr>
</template>
