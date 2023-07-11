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
