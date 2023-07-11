<script lang="ts" setup>
import axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps(["id"]);
function deleteEmployee() {
  axios
    .delete(`/users/${props.id}`)
    .then(() => Swal.fire("Success.", "User successfully removed,", "success"));
}
</script>

<template>
  <div class="relative w-1/4 max-w-4xl max-h-full">
    <!-- Modal content -->
    <div class="relative bg-white rounded-lg dark:bg-gray-300">
      <!-- Modal header -->
      <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
          Are you sure you want to delete this employee?
        </h3>
        <button
          type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          :data-modal-hide="props.id + 'delete'"
        >
          <FontAwesomeIcon icon="fa-solid fa-xmark p-2" />
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <div class="p-6 space-y-6 grid">
        <button
          @click="deleteEmployee()"
          class="bg-green-600 text-white font-bold h-8 w-3/4 rounded-lg mx-auto"
        >
          Yes, Delete User
        </button>
        <button
          :data-modal-hide="props.id + 'delete'"
          class="bg-red-600 text-white font-bold h-8 w-3/4 rounded-lg mx-auto"
        >
          No, Cancel
        </button>
      </div>
      <!-- Modal footer -->
    </div>
  </div>
</template>
