<script lang="ts" setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import { useEventStore } from "@/stores/event";

const eventStore = useEventStore();

</script>

<template>
  <div class="lg:col-span-2 w-full border border-black rounded-lg  bg-gray-900 col-span-6 h-[80%] p-5 ">
    <h1 class="p-4 text-2xl font-bold text-center text-white">Create an Event</h1>
    <div>
      <label for="firstname" class="block mb-2 text-sm font-medium text-center text-white dark:text-white"
        >Event Title</label
      >

      <div class="col-span-2 text-center">
        <input
          type="text"
          name="event-title"
          id="event-title"
          v-model="eventStore.newEvent.title"
          class="bg-gray-50 border mx-auto mt-2 border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Aa"
          required
        />
        <label for="firstname" class="block mt-2 mb-2 text-sm font-medium text-white dark:text-white"
          >Event Description</label
        >
        <input
          type="text"
          name="event-title"
          id="event-title"
          v-model="eventStore.newEvent.description"
          class="bg-gray-50 border mx-auto mt-2 border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Aa"
          required
        />
        <label
          for="hiring-date"
          class="block mx-auto mt-2 mb-2 text-sm font-medium text-white dark:text-white"
          >Start Date</label
        >
        <div class="w-3/4 mx-auto mt-2">
          <VueDatePicker v-model="eventStore.newEvent.start"></VueDatePicker>
        </div>
        <div class="col-span-2 mx-auto mt-2">
          <label
            for="hiring-date"
            class="block mx-auto mt-2 mb-2 text-sm font-medium text-white dark:text-white"
            >End Date</label
          >
          <div class="w-3/4 mx-auto mt-2">
            <VueDatePicker v-model="eventStore.newEvent.end"></VueDatePicker>
          </div>
          <div>
            <label
            for="hiring-date"
            class="block mx-auto mt-2 mb-2 text-sm font-medium text-white dark:text-white"
            >All Day</label
          >
            <select class="rounded-lg" name="allday" id="" v-model="eventStore.newEvent.allDay">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <button
            class="col-span-2 w-3/4 mt-6 mx-auto text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="eventStore.createNewEvent"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>