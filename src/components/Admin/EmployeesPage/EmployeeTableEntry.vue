<script lang="ts" setup>
import { useUserStore } from "@/stores/pinia";
import ViewEmployeeAttendance from "./Modals/ViewEmployeeAttendance.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faUserPen, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(faEye, faUserPen, faTrash, faXmark);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import DeleteEmployee from "./Modals/DeleteEmployee.vue";
import router from "@/router";

const props = defineProps(["info"]);
const user = useUserStore();
</script>
<template>
  <tr
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  >
    <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      <RouterLink :to="'/admin/employees/' + props.info.id">
        {{ props.info.profile.lastName }},
        {{ props.info.profile.firstName }}
        {{ props.info.profile.middleName.charAt(0) }}.
        {{ props.info.profile.suffix }}
      </RouterLink>
    </th>
    <td class="px-6 py-4">
      {{ props.info.profile.department }} | {{ props.info.profile.employmentType }}
    </td>
    <td class="px-6 py-4">{{ props.info.profile.contactNumber }}</td>
    <td class="px-6 py-4">{{ props.info.profile.contactEmail }}</td>
    <td class="px-6 py-4">
      <button
        :data-modal-target="props.info.id"
        :data-modal-toggle="props.info.id"
        class="mx-1 my-1 inline text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <FontAwesomeIcon icon="fa-solid fa-eye" />
      </button>
    </td>
    <td>
      <button
        @click="router.push('/admin/employees/edit')"
        class="mx-1 my-1 inline text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <FontAwesomeIcon icon="fa-solid fa-user-pen" />
      </button>
      <button
        v-if="props.info.id != user.id"
        :data-modal-target="props.info.id + 'delete'"
        :data-modal-toggle="props.info.id + 'delete'"
        class="mx-1 my-1 inline text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <FontAwesomeIcon icon="fa-solid fa-trash" />
      </button>
    </td>
  </tr>

  <!-- Main modal -->
  <div
    :id="props.info.id"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <ViewEmployeeAttendance :user-id="props.info.id" />
  </div>

  <!-- Deletion confirmation modal-->
  <div
    :id="props.info.id + 'delete'"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <DeleteEmployee />
  </div>
</template>
