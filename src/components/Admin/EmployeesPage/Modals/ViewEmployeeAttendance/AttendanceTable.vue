<script lang="ts" setup>
import axios from "axios";
import { reactive, ref } from "vue";
import AttendanceTableHead from "./AttendanceTable/AttendanceTableHead.vue";
import AttendanceTableEntry from "./AttendanceTable/AttendanceTableEntry.vue";
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";

// initialize components based on data attribute 
const attendances = reactive({
  state: []
});
const props = defineProps(["userId"]);

onMounted(() => {
  axios
  .get(`/times/user/${props.userId}`)
  .then((res) => {
    attendances.state = res.data.data;
    console.log('working')
  })
  .catch(() => {
    console.log("error");
  }).finally(()=> {
    console.log(attendances.state)
  });
});
</script>

<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <AttendanceTableHead />
      <tbody>
        <AttendanceTableEntry
          v-for="(attendance, index) in attendances.state"
          :key="index"
          :attendance="attendance"
        />
      </tbody>
    </table>
  </div>
</template>
