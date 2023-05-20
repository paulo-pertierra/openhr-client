<script lang="ts" setup>
import { reactive } from "vue";

import { useEmployeeDataStore } from '@/stores/pinia';
const employee = useEmployeeDataStore();

import Swal from "sweetalert2";
import randomstring from "randomstring";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCopy, faGear } from "@fortawesome/free-solid-svg-icons";
library.add(faGear, faCopy);

const credentials = reactive({
  username: "",
  password: ""
});

function generateCredentials() {
  if (!employee.data.profile.lastName || !employee.data.profile.firstName) {
    Swal.fire("Error", "No data to generate from.", "error");
    return;
  }
  employee.data.user.username = (
    employee.data.profile.firstName.toLowerCase() +
    "." +
    employee.data.profile.lastName.toLowerCase().replace(" ", "") +
    employee.data.profile.middleName.charAt(0).toLowerCase().replace(" ", "")
  ).replace(" ", "");
  employee.data.user.password = randomstring.generate(12);

  credentials.username = employee.data.user.username;
  credentials.password = employee.data.user.password;
}

function copyCredentialsToClipboard() {
  if (!credentials.username.length || !credentials.password.length) {
    Swal.fire("Error", "No data is generated.", "error");
    return;
  }
  navigator.clipboard.writeText(
    "Username: " + credentials.username + "\nPassword: " + credentials.password
  );
}
</script>
<template>
  <div class="space-y-4 md:space-y-6">
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
    <div class="grid grid-cols-2 gap-2">
      <button
        @click="generateCredentials()"
        class="col-span-1 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <FontAwesomeIcon icon="fa-solid fa-gear" class="px-2" />Generate
      </button>
      <button
        @click="copyCredentialsToClipboard()"
        class="col-span-1 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <FontAwesomeIcon icon="fa-solid fa-copy" class="px-2" />Copy to Clipboard
      </button>
    </div>
  </div>
</template>
