import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import router from "@/router";

export const useCredentialsStore = defineStore(
  "credentials",
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
    
    async function logOut() {
      auth.info = {};
      await localStorage.removeItem("user");
      router.push("/")
    }
    return { auth, logOut };
  },
  { persist: true }
);

export const useUserAuthStore = defineStore("userAuthn", () => {
  const user = useCredentialsStore();
  function logInUser({ username, password }) {
    axios
      .post( import.meta.env.VITE_BASE_URL +"/auth/user/login", { username, password })
      .then((res) => {
        user.auth.info = res.data.data;
        router.push("/user");
      })
      .catch(() => {
        Swal.fire("Cant Log In", "Username or password incorrect.", "warning");
      });
  }

  return { logInUser };
});

export const useAdminAuthStore = defineStore("adminAuthn", () => {
  const user = useCredentialsStore();
  function logInAdmin({ username, password }) {
    axios
      .post(import.meta.env.VITE_BASE_URL + "/auth/admin/login", { username, password })
      .then((res) => {
        user.auth.info = res.data.data;
        router.push("/admin");
      })
      .catch(() => {
        Swal.fire("Cant Log In", "Username or password incorrect.", "warning");
      });
  }

  return { logInAdmin };
});
