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
.fc-toolbar-title{
  font-weight: 900;
}

</style>

<template>
  <div>
    <FullCalendar :options="calendarOptions" />
  </div>
  <div class="w-full my-4">
    <RouterLink
      to="/admin/calendar"
      class="px-4 py-2 text-xs font-bold text-white bg-gray-900 border-2 border-solid rounded-lg hover:bg-gray-500 border-white-500"
    >
      Open Calendar</RouterLink
    >
  </div>
</template>
