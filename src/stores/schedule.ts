import { defineStore } from "pinia";
import { ref } from "vue";

export const useScheduleStore = defineStore('schedules', () => {
  const schedules = ref([])

  function getSchedules() {

  }

  return { getSchedules, schedules }
})