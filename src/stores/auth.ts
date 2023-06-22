import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import router from "@/router";

export const useCredentials = defineStore(
  "user",
  () => {
    const auth = reactive({
      info: {
        uuid: "",
        jwt: "",
        role: "",
        profile: {
          email: "",
          lastName: "",
          firstName: "",
          middleName: ""
        }
      }
    });
    return { auth };
  },
  { persist: true }
);

export const useUserAuthStore = defineStore("userAuthn", () => {
  const user = useCredentials();
  function logInUser({ username, password }) {
    axios
      .post( "http://192.168.100.4:5000" +"/auth/user/login", { username, password })
      .then((res) => {
        user.auth.info = res.data.data;
        router.push("/user");
      })
      .catch(() => {
        Swal.fire("Cant Log In", "Username or password incorrect.", "warning");
      });
  }
  function logOutUser() {
    localStorage.removeItem("user");
  }
  return { logInUser, logOutUser };
});

export const useAdminAuthStore = defineStore("adminAuthn", () => {
  const user = useCredentials();
  function logInAdmin({ username, password }) {
    axios
      .post("http://192.168.100.4:5000"+"/auth/admin/login", { username, password })
      .then((res) => {
        user.auth.info = res.data.data;
        router.push("/admin");
      })
      .catch(() => {
        Swal.fire("Cant Log In", "Username or password incorrect.", "warning");
      });
  }
  function logOutAdmin() {
    localStorage.removeItem("user");
  }

  return { logInAdmin, logOutAdmin };
});
