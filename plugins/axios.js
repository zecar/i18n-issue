import axios from 'axios'

const config = {
    baseURL: 'https://api.example.com',
}

export default defineNuxtPlugin((nuxtContext) => {
  const axiosInstance = axios.create(config)
    return {
      provide: {
        axios: axiosInstance,
      }
    }
})
