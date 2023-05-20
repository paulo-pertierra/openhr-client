import "./init.ts";
// Vue Defaults
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Pinia Defaults
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persistedstate";

// Axios Defaults
import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
try {
  axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("user")}`;
} catch {
  Swal.fire("Expired User", "Your session has expired. Log in again.", "warning");
}
// Styling
import "./assets/main.css";
import Swal from "sweetalert2";

// Vue Instance
const app = createApp(App);

app.use(createPinia().use(piniaPersist));
app.use(router);

app.mount("#app");
