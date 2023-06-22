import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import router from "@/router";
import axios from "axios";
import Swal from "sweetalert2";

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
  const step = ref(0);
  function nextStep() {
    if (step.value >= 4) return;
    step.value++;
  }
  function goBack() {
    if (step.value <= 0) {
      router.go(-1);
      return;
    }

    step.value--;
  }
  function clearCache() {
    data.user = {
      username: "",
      role: ""
    };
    data.profile = {
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
    };
  }

  const data = reactive({
    user: {
      username: "",
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
  function editEmployee(userId) {
    axios
      .put(`/users/${userId}`, () => data)
      .then(() => {
        console.log(data);

        Swal.fire("Success!", "Employee successfully edited.", "success");
        clearCache();
      })
      .catch(() => {
        console.log(data);
        Swal.fire("Error", "Something went wrong.", "error");
      });
  }
  return { data, step, goBack, nextStep, clearCache, editEmployee };
});

export const useEmployeeTableSorterStore = defineStore("employeeTableSorter", () => {
  const by = ref("lastName");
  const order = ref("asc");
  function setSorter(newBy: string, newOrder: string) {
    by.value = newBy;
    order.value = newOrder;
    console.log("Changed: " + by.value + order.value);
  }
  return { by, order, setSorter };
});

export const useEventStore = defineStore("event", () => {
  type Event = {
    title: string;
    description: string;
    start: string;
    end: string | undefined;
    allDay: boolean;
  };
  const event: Event = reactive({
    title: "",
    description: "",
    start: "",
    end: "",
    allDay: false
  });
  function createEvent() {
    axios
      .post("/events", event)
      .then(() => {
        Swal.fire("Success!", "Event successfully created.", "success");
      })
      .catch((error) => {
        Swal.fire("Failed", "Failed to create event.", "error");
        console.error(error);
      });
  }
  return { event, createEvent };
});
