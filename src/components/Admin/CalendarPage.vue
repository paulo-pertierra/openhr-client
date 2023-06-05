<script lang="ts" setup>
import CalendarView from "./CalendarPage/CalendarView.vue";
import CalendarEventControls from "./CalendarPage/CalendarEventControls.vue";
</script>
<template>
  <div class="grid grid-cols-6 gap-10">
    <CalendarView class="lg:col-span-4 w-full col-span-6" />
    <CalendarEventControls />
  </div>
</template>
