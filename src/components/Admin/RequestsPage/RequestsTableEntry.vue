<script lang="ts" setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleXmark, faCircleCheck, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
library.add(faCircleXmark, faCircleCheck, faRotateLeft);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { formatISOToReadable } from "@/utilities/time";

const props = defineProps(["schedule"]);

import { useScheduleStore } from "@/stores/schedule";
const scheduleStore = useScheduleStore();
</script>

<template>
  <tr
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  >
    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      v-if="props.schedule.user"
    >
      {{ props.schedule.user.lastName === null ? "" : props.schedule.user.lastName }}
      {{ props.schedule.user.firstName }}
      {{
        props.schedule.user.middleName
          ? (props.schedule.user.middleName as string).charAt(0) + "."
          : ""
      }}
    </th>
    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      v-else
    >
      Unknown/Deleted User
    </th>
    <td class="px-6 py-4">
      <span class="font-bold">{{ props.schedule.scheduleType }}</span> <br />
      <span class="text-xs">{{ formatISOToReadable(props.schedule.createdAt, "PPp") }}</span>
    </td>
    <td class="px-6 py-4 overflow-auto">
      <span class="font-bold">{{ props.schedule.title }}</span> <br />
      {{ props.schedule.description }}
    </td>
    <td class="px-6 py-4">
      {{ formatISOToReadable(props.schedule.start, "Pp") }}
    </td>
    <td class="px-6 py-4">
      {{ formatISOToReadable(props.schedule.end, "Pp") }}
    </td>
    <td class="px-6 py-4">
      <span v-if="'Approved'" class="text-blue-500 font-bold">{{ props.schedule.status }}</span>
    </td>
    <td class="pr-4 text-right">
      <div v-if="props.schedule.status === 'Pending'">
        <button @click="scheduleStore.answerScheduleById(props.schedule.id, 'Approved')">
          <FontAwesomeIcon
            class="px-1 w-6 h-auto text-green-600 hover:text-green-800 transition-all duration-150 ease-in-out"
            icon="fa-solid fa-circle-check"
          />
        </button>
        <button @click="scheduleStore.answerScheduleById(props.schedule.id, 'Declined')" href="#">
          <FontAwesomeIcon
            class="w-6 h-auto text-red-600 hover:text-red-800 transition-all duration-150 ease-in-out"
            icon="fa-solid fa-circle-xmark"
          />
        </button>
      </div>
      <div v-else>
        <button @click="scheduleStore.answerScheduleById(props.schedule.id, 'Pending')" href="#">
          <FontAwesomeIcon
            class="px-4 w-6 h-auto text-orange-500 hover:text-orange-400 transition-all duration-150 ease-in-out"
            icon="fa-solid fa-rotate-left"
          />
        </button>
      </div>
    </td>
  </tr>
</template>
