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
