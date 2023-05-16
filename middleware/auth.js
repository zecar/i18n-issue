import { useUserStore } from '~/store/user'

export default defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useUserStore()
  if (loggedIn === false) {
    return navigateTo('/login')
  }
})
