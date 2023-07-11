import "./init.ts";
// Vue Defaults
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Styling
import "./assets/main.css";
import Swal from "sweetalert2";
// Pinia Defaults
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persistedstate";

// Axios Defaults
import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

// Vue Instance
const app = createApp(App);
app.config.globalProperties.$BASE_URL = import.meta.env.VITE_BASE_URL;

app.use(createPinia().use(piniaPersist));
app.use(router);

app.mount("#app");

try {
  const credentials = useCredentialsStore();
  axios.defaults.headers.common = { Authorization: `Bearer ${credentials.auth.info.jwt}` };
  console.log(axios.defaults.headers.common);
} catch (error) {
  console.error(error);
}

import { useCredentialsStore } from "@/stores/auth";
const credentials = useCredentialsStore();
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      credentials.logOut();
      Swal.fire("Expired Token.", "You've been logged out", "warning");
    }
    return Promise.reject(error);
  }
);
