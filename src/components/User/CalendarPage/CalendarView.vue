<script lang="ts">
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";

import { useEventStore } from "@/stores/event";
import router from "@/router";
const eventStore = useEventStore();

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, listPlugin],
        showNonCurrentDates: false,
        height: 700,
        initialView: "dayGridMonth",
        moreLinkClick: "popover",
        dayMaxEvents: 2,
        eventClick: this.handleDateClick,
        views: {
          dayGridMonth: { buttonText: "Grid" },
          listDay: { buttonText: "Days" },
          listWeek: { buttonText: "Weeks" },
          listMonth: { buttonText: "Months" }
        },
        headerToolbar: {
          left: "prev,today,next",
          center: "title",
          right: "dayGridMonth,listDay,listWeek,listMonth"
        },
        events: []
      }
    };
  },
  methods: {
    handleDateClick: function (arg: any) {
      alert("date click! " + arg.dateStr);
    }
  },
  mounted() {
    axios.get("/events").then((res) => {
      this.calendarOptions.events = res.data.data;
    });
  }
};
</script>

<style scoped>
.baguio-holiday {
  background-color: #c4d9e0;
  color: #000000;
}
</style>

<template>
  <div>
    <FullCalendar ref="calendar" :options="calendarOptions" />
  </div>
</template>
