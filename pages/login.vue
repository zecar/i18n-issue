<script setup>
const name = ''
useHead({
  meta: [
    {
      name: 'viewport',
      content: 'overwrite',
    },
  ],
})
definePageMeta({ layout: 'blue' })
</script>

<template>
  <div class="login">
    LOGIN sss <br />
    <NuxtLink to="/home">to home</NuxtLink>
  </div>
</template>
