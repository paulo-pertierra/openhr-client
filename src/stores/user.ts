import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const users = ref([]);

  function getManyUsers() {
    axios
      .get("users")
      .then((res) => {
        users.value = res.data.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getfilteredManyUsers(filterBy: string, value: string) {
    axios
      .get(`users?filterby=${filterBy}&value=${value}`)
      .then((res) => {
        users.value = res.data.data;
      })
      .catch(() => {});
  }

  function getSortedManyUsersBy(field: string, order = "desc") {
    axios
      .get(`users?sortby=${field}&order=${order}`)
      .then((res) => {
        users.value = res.data.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return { users, getManyUsers, getfilteredManyUsers, getSortedManyUsersBy };
});

import generator from "generate-password";
import { reactive } from "vue";
export const useNewUserStore = defineStore("newUser", () => {
  const newUser = reactive({
    username: "",
    password: "",

    lastName: "",
    firstName: "",
    middleName: "",

    contactEmail: "",
    contactNumber: "",

    profileGender: "",
    profileBirthday: "",
    profileCivilStatus: "",
    profileNationality: "",
    profileAddress: "",

    educationLevel: "",
    educationCourse: "",
    educationYearStart: "",
    educationYearGraduate: "",
    educationSchool: "",

    workRole: "",
    workDepartment: "",
    workTitle: "",
    workCode: "",
    workEmploymentType: "",
    workHireDate: ""
  });

  function generateNewUserCredentials() {
    newUser.username =
      newUser.firstName + "." + newUser.lastName + (newUser.middleName as string).charAt(0) || "";
    newUser.password = generator.generate({ length: 8, numbers: true });
  }

  return { newUser, generateNewUserCredentials };
});
