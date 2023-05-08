import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore(
  "user",
  () => {
    const id = ref("");
    const role = ref("");
    const jwt = ref("");
    function setUser(input: any) {
      id.value = input.id;
      role.value = input.role;
      jwt.value = input.jwt;
    }

    return { setUser, id, role, jwt };
  },
  { persist: true }
);

export const useEmployeeDataStore = defineStore("employeeData", () => {
  const data = reactive({
    user: {
      username: "",
      password: "",
      role: ""
    },
    profile: {
      lastName: "", // Step 0
      firstName: "", // Step 0
      middleName: "", // Step 0
      suffix: "", // Step 0
      gender: "", // Step 1
      birthDate: "", // Step 1
      contactNumber: "", // Step 1
      contactEmail: "", // Step 1
      employmentType: "", // Final Step
      department: "", // Final Step
      hireDate: "", // Autogen
      supervisor: "" // Final Step
    }
  });
  return { data }
});
