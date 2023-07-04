<script lang="ts" setup>
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";
import router from "@/router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleXmark, faCircleCheck, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
library.add(faCircleXmark, faCircleCheck, faRotateLeft);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps(['schedule'])
</script>

<template>
  <tr
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  >
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {{ props.schedule.user.lastName }}
      {{ props.schedule.user.firstName }}
      {{ props.schedule.user.middleName ? (props.schedule.user.middleName as string).charAt(0) + "." : "" }}
    </th>
    <td class="px-6 py-4">
      <span class="font-bold">{{ props.schedule.scheduleType }}</span> <br />
      <span class="text-xs">{{ props.schedule.createdAt }}</span>
    </td>
    <td class="px-6 py-4 overflow-auto">
      <span class="font-bold">{{ props.schedule.title }}</span> <br />
      {{ props.schedule.description }}
    </td>
    <td class="px-6 py-4">
      {{ props.schedule.start }}
    </td>
    <td class="px-6 py-4">
      {{ props.schedule.end || 'No Info' }}
    </td>
    <td class="px-6 py-4">
      <span v-if="'Approved'" class="text-blue-500 font-bold"
        >{{ props.schedule.status }}</span
      >
    </td>
    <td class="pr-4 text-right">
      <div v-if="'Pending'">
        <button @click="() => {}">
          <FontAwesomeIcon
            class="px-1 w-6 h-auto text-green-600 hover:text-green-800 transition-all duration-150 ease-in-out"
            icon="fa-solid fa-circle-check"
          />
        </button>
        <button @click="() => {}" href="#">
          <FontAwesomeIcon
            class="w-6 h-auto text-red-600 hover:text-red-800 transition-all duration-150 ease-in-out"
            icon="fa-solid fa-circle-xmark"
          />
        </button>
      </div>
      <div v-else>
        <button @click="() => {}" href="#">
          <FontAwesomeIcon
            class="px-4 w-6 h-auto text-orange-500 hover:text-orange-400 transition-all duration-150 ease-in-out"
            icon="fa-solid fa-rotate-left"
          />
        </button>
      </div>
    </td>
  </tr>
</template>
