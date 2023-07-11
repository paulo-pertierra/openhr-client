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

import { reactive } from "vue";
import Swal from "sweetalert2";

import { useCredentialsStore } from "@/stores/auth";
export const useNewUserStore = defineStore("newUser", () => {

  const isGeneratedCredentials = ref(false);

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
    function makeid(length) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result;
    }
    const username = newUser.firstName + "." + newUser.lastName + (newUser.middleName as string).charAt(0) || "";
    newUser.username = username.replace(/ +/g, '').toLowerCase();
    newUser.password = makeid(8);
    Swal.fire({
      title: "Credentials Generated",
      html: `<p>Username: ${newUser.username}</p>
             <p>Password: ${newUser.password}</p>
             <p>Copied to clipboard!</p>`,
      icon: "info"
    })
    navigator.clipboard.writeText(
      "Username: " + newUser.username + "\nPassword: " + newUser.password
    );
    isGeneratedCredentials.value = true;
  }

  function createNewUser() {
    if (!isGeneratedCredentials.value) {
      Swal.fire("Error.", "Could not create user without credential generation.")
      return;
    }
    axios
      .post('/users', newUser)
      .then(() => {
        Swal.fire("Success.", "User added successfully.", "success")
      })
      .catch((error) => {
        Swal.fire("Failed", "Could not upload user, invalid data.", "error")
        console.error(error);
      })
  }

  return { newUser, generateNewUserCredentials, createNewUser, isGeneratedCredentials };
});

export const useCurrentUserProfileStore = defineStore("currentUserProfile", () => {
  const user = ref({
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
    workHireDate: "",
    training: [],
    emergencyContact: []
  })

  const credentials = useCredentialsStore();
  function getCurrentUserProfileByUuid() {
    axios
      .get(`/users/${ credentials.auth.info.uuid }`)
      .then((res) => {
        user.value = res.data.data
      })
      .catch((error) => {
        Swal.fire("Warning", "Unable to fetch user profile.", "warning");
        console.error(error)
      })
  }
  return { user, getCurrentUserProfileByUuid }
})