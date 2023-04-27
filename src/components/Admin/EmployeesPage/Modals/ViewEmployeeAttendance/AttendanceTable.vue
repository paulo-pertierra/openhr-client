<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";
import AttendanceTableHead from "./AttendanceTable/AttendanceTableHead.vue";
import AttendanceTableEntry from "./AttendanceTable/AttendanceTableEntry.vue";
const user = defineProps(["userId"]);

const attendances = ref([]);

axios
  .get(`/time/${user.userId}`)
  .then((res) => {
    attendances.value = res.data;
    console.log(attendances.value);
  })
  .catch(() => {
    console.log("error");
  });
</script>

<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <AttendanceTableHead />
      <tbody>
        <AttendanceTableEntry
          v-for="(attendance, index) in attendances"
          :key="index"
          :attendance="attendance"
        />
      </tbody>
    </table>
  </div>
</template>
