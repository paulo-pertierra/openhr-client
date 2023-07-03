<script lang="ts" setup>
import { useUserStore } from "@/stores/pinia";
import ViewEmployeeAttendance from "./Modals/ViewEmployeeAttendance.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faUserPen, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(faEye, faUserPen, faTrash, faXmark);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import DeleteEmployee from "./Modals/DeleteEmployee.vue";
import router from "@/router";
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";

const props = defineProps(["user"]);
const user = useUserStore();

onMounted(() => {
  initFlowbite();
})
</script>
<template>
  <tr
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  >
    <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      <RouterLink :to="'/admin/employees/' + props.user.uuid">
        {{ props.user.lastName }},
        {{ props.user.firstName }}
        {{ props.user.middleName as string || '' }}
      </RouterLink>
    </th>
    <td class="px-6 py-4">
      {{ props.user.workDepartment }}
    </td>
    <td class="px-6 py-4">{{ props.user.contactNumber }}</td>
    <td class="px-6 py-4">{{ props.user.contactEmail }}</td>
    <td class="px-6 py-4">
      <button
        :data-modal-target="props.user.uuid"
        :data-modal-toggle="props.user.uuid"
        class="mx-1 my-1 inline text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <FontAwesomeIcon icon="fa-solid fa-eye" />
      </button>
    </td>
    <td>
      <button
        @click="router.push(`/admin/employees/edit/${props.user.uuid}`)"
        class="mx-1 my-1 inline text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <FontAwesomeIcon icon="fa-solid fa-user-pen" />
      </button>
      <button
        :data-modal-target="props.user.uuid + 'delete'"
        :data-modal-toggle="props.user.uuid + 'delete'"
        class="mx-1 my-1 inline text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <FontAwesomeIcon icon="fa-solid fa-trash" />
      </button>
    </td>
  </tr>

  <!-- Main modal -->
  <div
    :id="props.user.uuid"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <ViewEmployeeAttendance :user-id="props.user.uuid" />
  </div>

  <!-- Deletion confirmation modal-->
  <div
    :id="props.user.uuid + 'delete'"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <DeleteEmployee :id="props.user.uuid" />
  </div>
</template>
