import { useCredentialsStore } from "@/stores/auth";
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
        schedules.value = res.data.data;
      })
      .catch(() => {
        Swal.fire("Something went wrong while fetching transactions.");
      });
  }

  return { getSchedules, schedules };
});

export const useUserScheduleSTore = defineStore("userSchedules", () => {
  const credentials = useCredentialsStore();
  const userSchedules = ref([]);

  function getUserSchedules() {
    axios.get("/schedules/user" + credentials.auth.info.uuid).then((res) => {
      userSchedules.value = res.data.data;
    });
  }

  return { getUserSchedules, userSchedules };
});
