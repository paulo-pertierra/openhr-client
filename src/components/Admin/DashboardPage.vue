<script lang="ts" setup>
import DashboardPage from "./DashboardPage/AttendancesCard.vue";
</script>
<template>
  <div class="grid lg:grid-cols-4 md:grid-cols-1">
    <div class="lg:col-span-2 md:col-span-1">
      <DashboardPage />
    </div>
    <div class="col-span-1">
      <DashboardPage />
    </div>
    <div class="col-span-1">
      <DashboardPage />
    </div>
    <div class="lg:col-span-4 md:col-span-1">
      <DashboardPage />
    </div>
  </div>
</template>
