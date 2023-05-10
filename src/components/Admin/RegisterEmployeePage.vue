<script lang="ts" setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { initFlowbite } from "flowbite";
import randomstring from "randomstring";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faArrowRight, faUserPlus, faGear } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowLeft, faArrowRight, faUserPlus, faGear);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Swal from "sweetalert2";

const step = ref(0);

import { useEmployeeDataStore } from "@/stores/pinia";
import RegistrationForm from "./RegisterEmployeePage/RegistrationForm.vue";
const employee = useEmployeeDataStore();

function nextStep() {
  if (step.value >= 4) return;
  step.value++;
}

function goBack() {
  if (step.value <= 0) return;
  step.value--;
}

function registerEmployee() {
  axios
    .post("/users", employee.data)
    .then(() => {
      Swal.fire("Success", "Employee created successfully.");
    })
    .catch((error) => (Swal.fire("Error", "Something went wrong.", "error"), console.error(error)));
}

onMounted(() => initFlowbite());
</script>

<template>
  <RegistrationForm />
</template>

<!-- <div>
  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >Password</label
  >
  <input
    type="text"
    name="password"
    id="password"
    :placeholder="'blinc.e.juandelacruz'"
    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    disabled
  />
</div> -->
