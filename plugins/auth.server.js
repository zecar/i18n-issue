import { useUserStore } from '~/store/user'
export default defineNuxtPlugin((nuxtApp) => {
  // console.log(nuxtApp)
  const userStore = useUserStore(nuxtApp.$pinia)
  console.log('plugin')
  userStore.changeName('new name')
})
