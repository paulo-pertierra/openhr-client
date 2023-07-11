<script lang="ts" setup>
import { departments } from "@/components/Admin/RegisterEmployeePage/employeefields";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
</script>

<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-3 p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
  >
    <div>
      <label class="block" for="last-name">Work Role</label>
      <select class="block h-10 rounded-lg w-52">
        <option value="EMPLOYEE">Employee</option>
        <option value="INTERN">Intern</option>
      </select>
    </div>
    <div>
      <label class="block" for="last-name">Department</label>
      <select class="block h-10 rounded-lg w-52">
        <option v-for="(department, index) in departments" :key="index" :value="department">
          {{ department }}
        </option>
      </select>
    </div>
    <div>
      <label class="block" for="course">Work Title</label>
      <input class="block h-8 rounded-lg" type="text" />
    </div>
    <div>
      <label class="block" for="course">Work Code</label>
      <input class="block h-8 rounded-lg" type="text" />
    </div>
    <div>
      <label class="block" for="course">Employment Type</label>
      <select class="block h-10 w-52 rounded-lg">
        <option value="FULLTIME">Full Time</option>
        <option value="PARTTIME">Part Time</option>
        <option value="ONCALL">On Call</option>
      </select>
    </div>
    <div>
      <label class="block" for="birthday">Hire Date</label>
      <div class="block border border-gray-600 rounded-lg w-52">
        <VueDatePicker />
      </div>
    </div>
  </div>
</template>
