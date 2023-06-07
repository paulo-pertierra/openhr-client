<script lang="ts" setup>
import AttendanceChart from "./DashboardPage/AttendanceChart.vue";
import AttendancesCard from "./DashboardPage/AttendancesCard.vue";
import AttendancesPieChart from "./DashboardPage/AttendancesPieChart.vue";
import DashboardCalendar from "./DashboardPage/DashboardCalendar.vue";
import AttendanceTime from "./DashboardPage/AttendanceTime.vue";
import AdminHeader from "./DashboardPage/AdminHeader.vue";
</script>
<template>
  <div class="grid gap-4 lg:grid-cols-4 md:grid-cols-1">
    <div class="lg:col-span-3 md:col-span-1">
      <AttendancesCard />
    </div>
    <div class="lg:col-span-1 md:col-span-1">
      <AttendanceTime />
    </div>
    <div class="lg:col-span-1 row-span-1 md:col-span-1">
      <div
        class="w-full h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <AttendancesPieChart/>
      </div>
    </div>
    <div class="lg:col-span-2 row-span-1 md:col-span-1">
      <div
        class="w-full h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <AttendanceChart />
      </div>
    </div>
    <div class="lg:col-span-1 row-span-2 md:col-span-1">
      <DashboardCalendar />
    </div>
  </div>
</template>
