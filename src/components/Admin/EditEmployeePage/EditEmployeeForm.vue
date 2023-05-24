<script lang="ts" setup>
const props = defineProps(["id"]);

import { useEmployeeDataStore } from "@/stores/pinia";
const employee = useEmployeeDataStore();

import EditEmployeeFormStepOne from "./EditEmployeeForm/EditEmployeeFormStepOne.vue";
import EditEmployeeFormStepTwo from "./EditEmployeeForm/EditEmployeeFormStepTwo.vue";
import EditEmployeeFormStepThree from "./EditEmployeeForm/EditEmployeeFormStepThree.vue";
import EditEmployeeFormControls from "./EditEmployeeForm/EditEmployeeFormControls.vue";
</script>

<template>
  <div
    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1
        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
      >
        Employee Edit Form
      </h1>
      <div class="h-64">
        <EditEmployeeFormStepOne v-if="employee.step === 0" />
        <EditEmployeeFormStepTwo v-if="employee.step === 1" />
        <EditEmployeeFormStepThree v-if="employee.step === 2" />
      </div>
      <div class="grid grid-cols-5 gap-2">
        <EditEmployeeFormControls :id="props.id" />
      </div>
    </div>
  </div>
</template>
