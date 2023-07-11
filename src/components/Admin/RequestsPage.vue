<script lang="ts" setup>
import RequestsTableHeader from "./RequestsPage/RequestsTableHeader.vue";
import RequestsTableEntry from "./RequestsPage/RequestsTableEntry.vue";

import { useScheduleStore } from "@/stores/schedule";
import { onMounted } from "vue";
const scheduleStore = useScheduleStore();

onMounted(() => {
  scheduleStore.getSchedules();
});
</script>
<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg max-h-168">
    <table class="w-full overflow-auto text-sm text-left text-gray-500 dark:text-gray-400">
      <RequestsTableHeader />
      <tbody class="z-0">
        <RequestsTableEntry
          v-for="(schedule, index) in scheduleStore.schedules"
          :key="index"
          :schedule="schedule"
        />
      </tbody>
    </table>
  </div>
</template>
