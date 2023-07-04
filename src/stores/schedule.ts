import axios from "axios";
import { defineStore } from "pinia";
import Swal from "sweetalert2";
import { ref } from "vue";

export const useScheduleStore = defineStore("schedules", () => {
  const schedules = ref([]);

  function getSchedules() {
    axios
      .get("/schedules")
      .then((res) => {
        schedules.value = res.data.data
      })
      .catch(() => {
        Swal.fire("Something went wrong while fetching transactions.")
      });
  }

  return { getSchedules, schedules };
});
