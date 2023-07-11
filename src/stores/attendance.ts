import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAttendanceStore = defineStore("attendance", () => {
  const attendances = ref([]);

  axios.get("/");
  return {};
});
