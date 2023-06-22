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

try {
  const user = JSON.parse(localStorage.getItem('user'));
  axios.defaults.headers.common = {'Authorization': `Bearer ${user.auth.info.jwt as string}`}
} catch (error) {
  error
}

// Vue Instance
const app = createApp(App);
app.config.globalProperties.$BASE_URL = import.meta.env.VITE_BASE_URL;

app.use(createPinia().use(piniaPersist));
app.use(router);

app.mount("#app");
