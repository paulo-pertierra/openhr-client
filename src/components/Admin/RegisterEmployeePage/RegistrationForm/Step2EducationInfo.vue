<script lang="ts" setup>
import { useNewUserStore } from '@/stores/user';

const newUserStore = useNewUserStore();
</script>

<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-3 p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
  >
    <div>
      <label class="block" for="last-name">Level of Education</label>
      <select class="block h-10 rounded-lg w-52" name="education" id="education" v-model="newUserStore.newUser.educationLevel">
        <option value="College">College</option>
        <option value="SeniorHighSchool">Senior High School</option>
        <option value="JuniorHighSchool">Junior High School</option>
        <option value="Secondary">Secondary</option>
        <option value="Primary">Primary</option>
      </select>
    </div>
    <div>
      <label class="block" for="course">Course/Strand</label>
      <input class="block h-8 rounded-lg" type="text" v-model="newUserStore.newUser.educationCourse" />
    </div>
    <div>
      <label class="block" for="year-start">Year Started</label>
      <input class="block h-8 rounded-lg" type="number" v-model="newUserStore.newUser.educationYearStart" />
    </div>
    <div>
      <label class="block" for="year-graduate">Year Graduated</label>
      <input class="block h-8 rounded-lg" type="number" v-model="newUserStore.newUser.educationYearGraduate" />
    </div>
    <div>
      <label class="block" for="school">School/College</label>
      <input class="block h-8 rounded-lg" type="text" v-model="newUserStore.newUser.educationSchool" />
    </div>
  </div>
</template>
