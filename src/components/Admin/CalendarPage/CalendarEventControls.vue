<script lang="ts" setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useEventStore } from "@/stores/pinia";

const eventStore = useEventStore();
</script>

<template>
  <div class="lg:col-span-2 w-full border border-black col-span-6 h-96 p-4">
    <h1 class="font-bold text-2xl text-center p-4">Create an Event</h1>
    <div>
      <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Event Title</label
      >

      <div class="col-span-2">
        <input
          type="text"
          name="event-title"
          id="event-title"
          v-model="eventStore.event.title"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Aa"
          required
        />
        <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Event Description</label
        >
        <input
          type="text"
          name="event-title"
          id="event-title"
          v-model="eventStore.event.description"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Aa"
          required
        />
        <label
          for="hiring-date"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Start Date</label
        >
        <div class="w-3/4">
          <VueDatePicker v-model="eventStore.event.start"></VueDatePicker>
        </div>
        <div class="col-span-2">
          <label
            for="hiring-date"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >End Date</label
          >
          <div class="w-3/4">
            <VueDatePicker v-model="eventStore.event.end"></VueDatePicker>
          </div>
          <button
            class="col-span-2 w-3/4 mt-4 text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="eventStore.createEvent"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
