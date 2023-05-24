<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";
onMounted(() => initFlowbite());

import EditEmployeeForm from "./EditEmployeePage/EditEmployeeForm.vue";

import { useRoute } from "vue-router";
const route = useRoute();

import { useEmployeeDataStore } from "@/stores/pinia";
const employee = useEmployeeDataStore();

import axios from "axios";
axios.get(`/users/${route.params.id}?profile=true`).then((res) => {
  employee.data = res.data;
});
</script>

<template>
  <EditEmployeeForm :id="route.params.id" />
</template>
