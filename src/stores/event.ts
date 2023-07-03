import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

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

  return { getEvents, events }
})