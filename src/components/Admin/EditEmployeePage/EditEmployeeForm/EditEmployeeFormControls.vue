<script lang="ts" setup>
import { useEmployeeDataStore } from '@/stores/pinia';
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

import axios from "axios";
import Swal from 'sweetalert2';
function registerEmployee() {
  axios
    .post("/users", employee.data)
    .then(() => {
      Swal.fire("Success", "Employee created successfully.");
    })
    .catch((error) => (Swal.fire("Error", "Something went wrong.", "error"), console.error(error)));
}
</script>

<template>
  <button @click="employee.goBack()"
    class="col-span-2 w-full text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
    Go Back
  </button>
  <button v-if="employee.step < 3" @click="employee.nextStep()"
    class="col-span-3 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Next Step
    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
  </button>
  <button v-else @click="registerEmployee()"
    class="col-span-3 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    <FontAwesomeIcon icon="fa-solid fa-user-plus" class="px-2" />Register Employee
  </button>
</template>