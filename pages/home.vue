<script>
import { mapState } from 'pinia'
import { useUserStore } from '~/store/user'
export default defineNuxtComponent({
  name: 'Home',
  setup() {
    definePageMeta({ layout: 'default', middleware: 'auth' })
  },
  head() {
    return {
      meta: [
        {
          name: 'viewport',
          content: 'overwrite',
        },
      ],
    }
  },
  async asyncData() {
    const { changeName } = useUserStore()
    changeName('name from asyncData')
    return {
      test: 'asyncData',
    }
  },
  data: () => ({
    test: 'asd',
  }),
  computed: {
    ...mapState(useUserStore, {
      name: (state) => state.name,
    }),
  },
})
</script>

<template>
  <div class="home">
    <Head>
      <Meta name="viewport" :content="test" />
    </Head>
    home.vue: {{ name }}<br />
    HOME<br />
    <NuxtLink to="/login">to login</NuxtLink>
  </div>
</template>
