<script lang="ts" setup>
import { nationalities } from "../employeefields";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import { useNewUserStore } from "@/stores/user";
const newUserStore = useNewUserStore();
</script>

<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-3 p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
  >
    <div class="col-span-1 lg:col-span-3 my-4 font-semibold">Identification</div>
    <div>
      <label class="block" for="last-name">Last Name</label>
      <input class="block h-8 rounded-lg" type="text" />
    </div>
    <div>
      <label class="block" for="first-name">First Name</label>
      <input class="block h-8 rounded-lg" type="text" />
    </div>
    <div>
      <label class="block" for="middle-name">Middle Name</label>
      <input class="block h-8 rounded-lg" type="text" />
    </div>
    <div>
      <label class="block" for="contact-email">Email Address</label>
      <input class="block h-8 rounded-lg" type="email" />
    </div>
    <div>
      <label class="block" for="contact-phone">Phone Number</label>
      <input class="block h-8 rounded-lg" type="text" />
    </div>
    <div class="col-span-1 lg:col-span-3 my-4 font-semibold">Personal Information</div>
    <div>
      <label class="block" for="gender">Gender</label>
      <select class="block h-10 rounded-lg w-52" name="gender" id="gender">
        <option :value="null" selected disabled>Select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="PreferNotToSay">Prefer not to Say</option>
      </select>
    </div>
    <div>
      <label class="block" for="birthday">Birthday</label>
      <div class="block border border-gray-600 rounded-lg w-52">
        <VueDatePicker />
      </div>
    </div>
    <div>
      <label class="block" for="civil-status">Civil Status</label>
      <select class="block h-10 rounded-lg w-52" name="civil-status" id="civil-status">
        <option :value="null" selected disabled>Select civil status</option>
        <option value="Single">Single</option>
        <option value="Married">Married</option>
        <option value="Separated">Separated</option>
        <option value="Widowed">Widowed</option>
        <option value="Annuled">Annuled</option>
        <option value="Divorced">Divorced</option>
      </select>
    </div>
    <div>
      <label class="block" for="nationality">Nationality</label>
      <select class="block h-10 rounded-lg w-52" name="nationality" id="nationality">
        <option :value="null" selected disabled>Select nationality</option>
        <option v-for="(nationality, index) in nationalities" :key="index" :value="nationality">
          {{ nationality }}
        </option>
      </select>
    </div>
    <div>
      <label class="block" for="address">Address</label>
      <input class="block h-8 rounded-lg" type="text" />
    </div>
  </div>
</template>
