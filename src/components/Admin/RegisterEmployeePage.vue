<script lang="ts" setup>
import { initFlowbite } from "flowbite";
import { ref, onMounted } from "vue";
import axios from "axios";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import randomstring from "randomstring";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faArrowRight, faUserPlus, faGear } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowLeft, faArrowRight, faUserPlus, faGear);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Swal from "sweetalert2";

const step = ref(0);

import { useEmployeeDataStore } from "@/stores/pinia";
const employee = useEmployeeDataStore();


function generateCredentials() {
  if (!employee.data.profile.lastName || !employee.data.profile.firstName) {
    Swal.fire("Error", "No data to generate from.", "error");
    return;
  }
  employee.data.user.username = (
    employee.data.profile.firstName.toLowerCase() +
    "." +
    employee.data.profile.lastName.toLowerCase() +
    employee.data.profile.middleName.charAt(0).toLowerCase()
  ).replace(" ", "");
  employee.data.user.password = randomstring.generate(12);
}

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
  <div
    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1
        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
      >
        Employee Registration Form
      </h1>
      <div class="space-y-4 md:space-y-6" v-if="step == 0">
        <div class="grid sm:grid-cols-1 gap-2 md:grid-cols-2">
          <div>
            <label
              for="firstname"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >First Name</label
            >
            <input
              type="text"
              name="firstname"
              id="firstname"
              v-model="employee.data.profile.firstName"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Juan"
              required
            />
          </div>
          <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Middle Name</label
            >
            <input
              type="text"
              name="lastname"
              id="lastname"
              v-model="employee.data.profile.middleName"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="De La Cruz"
              required
            />
          </div>
        </div>
        <div class="grid sm:grid-cols-1 gap-2 md:grid-cols-2">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Last Name</label
            >
            <input
              type="text"
              name="lastname"
              id="lastname"
              v-model="employee.data.profile.lastName"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="De La Cruz"
              required
            />
          </div>
          <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Suffix</label
            >
            <input
              type="text"
              name="suffix"
              id="suffix"
              v-model="employee.data.profile.suffix"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="De La Cruz"
              required
            />
          </div>
        </div>
      </div>
      <div class="space-y-4 md:space-y-6" v-if="step == 1">
        <div>
          <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Sex</label
          >
          <select
            name="Gender"
            id="gender"
            v-model="employee.data.profile.gender"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="N/A">Prefer not to say</option>
          </select>
        </div>
        <div>
          <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Birth Date</label
          >
          <VueDatePicker v-model="employee.data.profile.birthDate"></VueDatePicker>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="col-span-1">
            <label
              for="contactnumber"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Contact Number</label
            >
            <input
              name="contactnumber"
              id="contactnumber"
              v-model="employee.data.profile.contactNumber"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="col-span-1">
            <label
              for="contactemail"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Contact Email</label
            >
            <input
              type="email"
              name="contactemail"
              id="contactemail"
              v-model="employee.data.profile.contactEmail"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      <div class="space-y-4 md:space-y-6" v-else-if="step == 2">
        <div>
          <label for="role" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Role</label
          >
          <select
            v-model="employee.data.user.role"
            name="roles"
            id="roles"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="ADMIN">ADMIN</option>
            <option value="EMPLOYEE" selected>EMPLOYEE</option>
            <option value="INTERN">INTERN</option>
          </select>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label
              for="department"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Department</label
            >
            <select
              name="roles"
              id="roles"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="ADMIN">Admin & Finance</option>
              <option value="EMPLOYEE">Production</option>
              <option value="INTERN">Marketing</option>
              <option value="ADMIN">Social Media</option>
              <option value="EMPLOYEE">DevOps</option>
              <option value="INTERN">Mobile Dev</option>
              <option value="INTERN">Web Development</option>
              <option value="ADMIN">Human Resource</option>
            </select>
          </div>
          <div>
            <label
              for="employment-type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Employment Type</label
            >
            <select
              name="roles"
              id="roles"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="ADMIN">Full Time</option>
              <option value="EMPLOYEE">Part Time</option>
              <option value="INTERN">Intern</option>
            </select>
          </div>
        </div>
      </div>

      <div class="space-y-4 md:space-y-6" v-else-if="step == 3">
        <div>
          <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Username</label
          >
          <input
            type="text"
            name="firstname"
            id="firstname"
            disabled
            v-model="employee.data.user.username"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Generated"
            required
          />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Password</label
          >
          <input
            type="text"
            name="firstname"
            id="firstname"
            disabled
            v-model="employee.data.user.password"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Generated"
            required
          />
        </div>
        <button
          @click="generateCredentials()"
          class="col-span-3 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <FontAwesomeIcon icon="fa-solid fa-gear" class="px-2" />Generate username and Password
        </button>
      </div>
      <div class="grid grid-cols-5 gap-2">
        <button
          @click="goBack()"
          class="col-span-2 w-full text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
          Go Back
        </button>
        <button
          v-if="step < 3"
          @click="nextStep()"
          class="col-span-3 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Next Step
          <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        </button>
        <button
          v-else
          @click="registerEmployee()"
          class="col-span-3 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <FontAwesomeIcon icon="fa-solid fa-user-plus" class="px-2" />Register Employee
        </button>
      </div>
    </div>
  </div>
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
