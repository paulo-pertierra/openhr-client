<script lang="ts" setup>
import RequestsTableHeader from "./RequestsPage/RequestsTableHeader.vue";
import RequestsTableEntry from "./RequestsPage/RequestsTableEntry.vue";
import AddRequest from "../User/RequestsPage/AddRequest.vue";

import { initFlowbite } from "flowbite";
import { onMounted } from "vue";

onMounted(() => {
  initFlowbite();
  userScheduleStore.getUserSchedules();
});

import { useUserScheduleSTore } from "@/stores/schedule";
const userScheduleStore = useUserScheduleSTore();
</script>
<template>
  <div class="flex my-4 justify-end">
    <button
      data-modal-target="add-request-modal"
      data-modal-toggle="add-request-modal"
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
          v-for="(schedule, index) in userScheduleStore.userSchedules"
          :key="index"
          :schedule="schedule"
        />
      </tbody>
    </table>
  </div>
  <div
    id="add-request-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <AddRequest />
  </div>
</template>
