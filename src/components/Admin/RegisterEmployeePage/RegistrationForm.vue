<script lang="ts" setup>
import { useEmployeeDataStore } from "@/stores/pinia";
const employee = useEmployeeDataStore();

import RegistrationFormStepOne from "./RegistrationForm/RegistrationFormStepOne.vue";
import RegistrationFormStepTwo from "./RegistrationForm/RegistrationFormStepTwo.vue";
import RegistrationFormStepThree from "./RegistrationForm/RegistrationFormStepThree.vue";
import RegistrationFormStepFour from "./RegistrationForm/RegistrationFormStepFour.vue";
import RegistrationFormControls from "./RegistrationForm/RegistrationFormControls.vue";
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
      <div class="h-64">
        <RegistrationFormStepOne v-if="employee.step === 0" />
        <RegistrationFormStepTwo v-if="employee.step === 1" />
        <RegistrationFormStepThree v-if="employee.step === 2" />
        <RegistrationFormStepFour v-if="employee.step === 3" />
      </div>
      <div class="grid grid-cols-5 gap-2">
        <RegistrationFormControls />
      </div>
    </div>
  </div>
</template>
