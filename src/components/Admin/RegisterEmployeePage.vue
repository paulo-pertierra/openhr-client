<script lang="ts" setup>
import { initFlowbite } from "flowbite";
import { ref, reactive, onMounted } from "vue";
const step = ref(0);
const employeeData = reactive({
  user: {
    username: "", // Autogen
    password: "", // Autogen
    role: "" // Final Step
  },
  profile: {
    lastName: "", // Step 0
    firstName: "", // Step 0
    middleName: "", // Step 0
    suffix: "", // Step 0
    gender: "", // Step 1
    birthDate: "", // Step 1
    contactNumber: "", // Step 1
    contactEmail: "", // Step 1
    employmentType: "", // Final Step
    department: "", // Final Step
    hireDate: "", // Autogen
    supervisor: "" // Final Step
  }
});

function nextStep() {
  step.value++;
}

function goBack() {
  step.value--;
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
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Juan"
              required
            />
          </div>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Last Name</label
            >
            <input
              type="text"
              name="lastname"
              id="lastname"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="De La Cruz"
              required
            />
          </div>
        </div>
        <div class="grid sm:grid-cols-1 gap-2 md:grid-cols-2">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Middle Name</label
            >
            <input
              type="text"
              name="lastname"
              id="lastname"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="De La Cruz"
              required
            />
          </div>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Suffix</label
            >
            <input
              type="text"
              name="lastname"
              id="lastname"
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
            id=""
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
          datePicker

          <div class="relative max-w-sm">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              datepicker
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date"
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
            name="roles"
            id="roles"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="ADMIN">ADMIN</option>
            <option value="EMPLOYEE">EMPLOYEE</option>
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
      <div class="grid grid-cols-5 gap-2">
        <button
          @click="goBack()"
          class="col-span-2 w-full text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Go Back
        </button>
        <button
          @click="nextStep()"
          class="col-span-3 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Next Step
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
