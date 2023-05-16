<script>
import { mapState } from 'pinia'
import { useUserStore } from '~/store/user'
export default defineNuxtComponent({
  name: 'Test',
  computed: {
    ...mapState(useUserStore, {
      name: (state) => state.name,
    }),
  },
})
</script>

<template>
  <div class="home">Test.vue: {{ name }}<br /></div>
</template>
