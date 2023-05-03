<script lang="ts" setup>
import Swal from "sweetalert2";
import { useRouter, useRoute } from "vue-router";
let uuidPattern: RegExp =
  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
const route = useRoute();
const router = useRouter();

let id: string;
Array.isArray(route.params.id) ? (id = route.params.id[0]) : (id = route.params.id);

if (!uuidPattern.test(id)) {
  Swal.fire("Invalid user ID", "Please enter a valid UUID", "warning");
  router.push("/admin/employees");
}
</script>
<template>
  <main>{{ route.params.id }}</main>
</template>
