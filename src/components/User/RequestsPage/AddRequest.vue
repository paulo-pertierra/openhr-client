<script lang="ts" setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import { initFlowbite } from "flowbite";
import { onMounted } from "vue";
onMounted(() => initFlowbite());

import { useUserScheduleStore } from "@/stores/schedule";
const userSchedule = useUserScheduleStore();
</script>
<template>
  <div class="relative w-fit max-w-2xl max-h-full">
    <!-- Modal content -->
    <div class="relative bg-white rounded-lg dark:bg-gray-300">
      <!-- Modal header -->
      <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Create a new Request</h3>
        <button
          type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="add-request-modal"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <div class="p-4">
        <div class="m-2">
          <label class="block font-semibold" for="schedule-title">Title</label>
          <input
            class="block rounded-lg w-72"
            type="text"
            name="title"
            id="title"
            v-model="userSchedule.newUserSchedule.title"
          />
        </div>
        <div class="m-2">
          <label class="block font-semibold" for="schedule-description">Description</label>
          <input
            class="block rounded-lg w-72"
            type="text"
            name="description"
            id="description"
            v-model="userSchedule.newUserSchedule.description"
          />
        </div>
        <div class="m-2">
          <label class="block font-semibold" for="schedule-type">Request Type</label>
          <select
            class="block rounded-lg w-72"
            name="schedule-type"
            id=""
            v-model="userSchedule.newUserSchedule.scheduleType"
          >
            <option :value="null" selected="true" disabled>Select a Request Type</option>
            <option class="font-bold" :value="null" disabled>Leaves</option>
            <option value="LvAnnual">Annual Leave</option>
            <option value="LvSick">Sick Leave</option>
            <option value="LvParental">Parental Leave</option>
            <option value="LvBereaved">Bereaved Leave</option>
            <option value="LvPaid">Paid Leave</option>
            <option value="LvUnpaid">Unpaid Leave</option>
            <option value="LvSpecial">Special Leave</option>
            <option value="LvMedical">Medical Leave</option>
            <option value="LvStudy">Study Leave</option>
            <option value="LvOther">Other Leave</option>

            <option class="font-bold" :value="null" disabled>Official Business</option>
            <option value="ObConference">Official - Conference Meeting</option>
            <option value="ObBusinessMeeting">Official - Business Meeting</option>
            <option value="ObClientMeeting">Official - Client Meeting</option>
            <option value="ObSiteVisit">Official - Site Visit</option>
            <option value="ObContract">Official - Contract</option>
            <option value="ObTraining">Official - Training</option>
            <option value="ObPresentation">Official - Presentation</option>
            <option value="ObOther">Official - Other</option>

            <option class="font-bold" :value="null" disabled>Working Schedule</option>
            <option value="OVERTIME">Overtime</option>
            <option value="UNDERTIME">Undertime</option>
          </select>
        </div>
        <hr class="mt-6 mb-3" />
        <div class="m-2">
          <label class="block font-semibold" for="schedule-description">Start Date</label>
          <div class="block rounded-lg w-72 border-gray-500 border">
            <VueDatePicker v-model="userSchedule.newUserSchedule.start" />
          </div>
        </div>
        <div class="m-2">
          <label class="block font-semibold" for="schedule-description">End Date</label>
          <div class="block rounded-lg w-72 border-gray-500 border">
            <VueDatePicker v-model="userSchedule.newUserSchedule.end" />
          </div>
        </div>
        <div class="m-2">
          <label class="block font-semibold" for="schedule-description">All Day</label>
          <div class="flex items-center justify-evenly w-72 rounded-lg border-gray-700 border h-10">
            <div>
              <input
                type="radio"
                name="allDay"
                v-model="userSchedule.newUserSchedule.allDay"
                :value="true"
              />Yes
            </div>
            <div>
              <input
                type="radio"
                name="allDay"
                v-model="userSchedule.newUserSchedule.allDay"
                :value="false"
                checked
              />No
            </div>
          </div>
        </div>
        <div class="m-2">
          <button
            class="bg-blue-600 w-72 rounded-lg h-10 text-white font-bold hover:bg-blue-800 transition-colors"
            @click="userSchedule.createUserSchedule()"
          >
            Create Request
          </button>
        </div>
      </div>
      <!-- Modal footer -->
    </div>
  </div>
</template>
