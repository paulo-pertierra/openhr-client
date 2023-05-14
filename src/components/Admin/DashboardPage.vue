<script lang="ts" setup>
import AttendanceChart from "./DashboardPage/AttendanceChart.vue";
import DashboardPage from "./DashboardPage/AttendancesCard.vue";
import LineChart from "./DashboardPage/LineChart.vue";
</script>
<template>
      <h1 class="font-bold text-4xl">Today at a Glance</h1>
  <div class="grid lg:grid-cols-4 md:grid-cols-1">
    <div class="lg:col-span-2 md:col-span-1">
      <DashboardPage />
    </div>
    <div class="col-span-1">
      <LineChart />
    </div>
    <div class="col-span-1 p-4 mt-10">
      <AttendanceChart />
    </div>
    <div class="lg:col-span-4 md:col-span-1">
      <DashboardPage />
    </div>
  </div>
</template>
