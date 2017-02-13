<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link to="/nav">Nav</link-to>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>