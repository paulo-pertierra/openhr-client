import axios from "axios";
import { defineStore } from "pinia";
import Swal from "sweetalert2";
import { reactive, ref } from "vue";

export const useEventStore = defineStore('events', () => {
  const events = ref([])

  function getEvents(args?: string) {
    axios
      .get('/events')
      .then((res) => {
        events.value = res.data.data
        console.log(events.value)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const newEvent = reactive({
    title: "",
    description: "",
    start: "",
    end: "",
    allDay: false,
    userUuid: ""
  })

  function createNewEvent() {
    axios
      .post('/events', {newEvent})
      .then((res) => {
        console.log(res.status)
      })
      .catch((error) => {
        console.log(error)
        Swal.fire("Failed")
      })
  }
  return { getEvents, events, newEvent, createNewEvent }
})