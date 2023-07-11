<script lang="ts">
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, listPlugin],
        showNonCurrentDates: false,
        height: 500,
        width: "100%",
        initialView: "dayGridMonth",
        moreLinkClick: "popover",
        dayMaxEvents: 2,
        views: {
          dayGridMonth: { buttonText: "Grid" },
          listDay: { buttonText: "Days" },
          listWeek: { buttonText: "Weeks" },
          listMonth: { buttonText: "Months" }
        },
        headerToolbar: {
          left: "prev,today,next",
          right: "title"
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
    axios.get("/events").then((response) => {
      this.calendarOptions.events = response.data.data;
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
    <FullCalendar :options="calendarOptions" />
  </div>
  <div class="my-4 w-full">
    <RouterLink
      to="/admin/calendar"
      class="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg border-solid border-white-500 border-2"
    >
      Open Calendar</RouterLink
    >
  </div>
</template>
