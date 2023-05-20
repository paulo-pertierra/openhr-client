<script lang="ts" setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
onMounted(() => initFlowbite());

import RegistrationForm from "./RegisterEmployeePage/RegistrationForm.vue";
</script>

<template>
  <RegistrationForm />
</template>
