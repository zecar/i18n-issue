<template>
  <NuxtLayout>
    <NuxtPage />
    app.vue: {{ name }}
  </NuxtLayout>
</template>

<script>
import { mapState } from 'pinia'
import { useUserStore } from '~/store/user'
export default {
  computed: {
    ...mapState(useUserStore, {
      name: (state) => state.name,
    }),
  },
  mounted() {
    // this.$axios.get("/api/asdasd").then((res) => {
    //   console.log(res)
    // })
  },
}
</script>
