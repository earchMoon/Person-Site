<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link to="/">Home</link-to>
  </div>
</template>

<script>
  export default {
    name: 'nav',
    data() {
      return {
        msg: 'Nav'
      }
    }
  }
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>