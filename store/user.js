import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user-store',
  state: () => ({
    name: 'Eduardo',
    loggedIn: true,
  }),
  getters: {
    name2: (state) => state.name + ' 2',
  },
  actions: {
    changeName(newName) {
      console.log('changing to ', newName)
      this.name = newName
    },
  },
})
