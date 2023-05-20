<script lang="ts" setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
onMounted(() => initFlowbite());

import EditEmployeeForm from "./EditEmployeePage/EditEmployeeForm.vue";
</script>

<template>
  <EditEmployeeForm />
</template>
