<script lang="ts" setup>
const props = defineProps(["id"]);

import { useEmployeeDataStore } from "../../../../stores/pinia";
const employee = useEmployeeDataStore();

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGear,
  faArrowRight,
  faUserPlus,
  faArrowLeft,
  faCopy
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGear, faArrowRight, faUserPlus, faArrowLeft, faCopy);
</script>

<template>
  <button
    @click="employee.goBack()"
    class="col-span-2 w-full text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
    Go Back
  </button>
  <button
    v-if="employee.step < 2"
    @click="employee.nextStep()"
    class="col-span-3 w-full text-white bg-primary hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Next Step
    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
  </button>
  <button
    v-else
    @click="employee.editEmployee(props.id)"
    class="col-span-3 w-full text-white bg-primary hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    <FontAwesomeIcon icon="fa-solid fa-user-plus" class="px-2" />Edit Employee
  </button>
</template>
