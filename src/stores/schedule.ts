import { useCredentialsStore } from "@/stores/auth";
import axios from "axios";
import { defineStore } from "pinia";
import Swal from "sweetalert2";
import { ref, reactive } from "vue";

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

export const useUserScheduleStore = defineStore("userSchedules", () => {
  const credentials = useCredentialsStore();
  const userSchedules = ref([]);

  function getUserSchedules() {
    axios.get("/schedules/user/" + credentials.auth.info.uuid).then((res) => {
      userSchedules.value = res.data.data;
    });
  }

  const newUserSchedule = reactive({
    title: "",
    description: "",
    scheduleType: "",
    start: "",
    end: "",
    allDay: false
  })

  function createUserSchedule() {
    axios
      .post(`/schedules/${credentials.auth.info.uuid}`, newUserSchedule)
      .then(() => {
        Swal.fire("Success", "New request uploaded.", "success")
      })
      .catch((error) => {
        Swal.fire("Failed", "Could not upload. Please complete all the fields.", "error")
        console.error(error)
      })
  }

  return { getUserSchedules, userSchedules, newUserSchedule, createUserSchedule };
});
