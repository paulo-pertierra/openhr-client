import { defineStore } from "pinia";
import axios from 'axios';
import { reactive } from "vue";

export const useUserStore = defineStore('user', () => {
  const state = reactive({
    users: []
  })
  
  function getManyUsers() {
    axios
    .get('users')
    .then((res) => {
      state.users = res.data.data
    })
  }

  return { state, getManyUsers }
})