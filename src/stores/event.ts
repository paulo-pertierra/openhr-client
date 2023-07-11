import axios from "axios";
import { defineStore } from "pinia";
import Swal from "sweetalert2";
import { reactive, ref } from "vue";

export const useEventStore = defineStore("events", () => {
  const events = ref([]);

  function getEvents(args?: string) {
    axios
      .get("/events")
      .then((res) => {
        events.value = res.data.data;
        console.log(events.value);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const newEvent = reactive({
    title: "",
    description: "",
    start: "",
    end: null,
    allDay: false,
    userUuid: null
  });

  function createNewEvent() {
    axios
      .post("/events", newEvent)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
        Swal.fire("Failed");
      });
  }
  return { getEvents, events, newEvent, createNewEvent };
});

export const useUserEventStore = defineStore("userEvent", () => {
  const events = ref([]);

  function getEvents(args?: string) {
    axios
      .get("/events")
      .then((res) => {
        events.value = res.data.data;
        console.log(events.value);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const newEvent = reactive({
    title: "",
    description: "",
    start: "",
    end: null,
    allDay: false,
    userUuid: null
  });

  function createNewEvent() {
    axios
      .post("/events", newEvent)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
        Swal.fire("Failed");
      });
  }
  return { getEvents, events, newEvent, createNewEvent };
});
