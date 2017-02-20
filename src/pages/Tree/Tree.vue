<template>
<div>
        <NavBar :activeNum="1"></NavBar>
        <p>{{msg}}</p>
    </div>
</template>
<style>
    p {
        margin: 2em auto;
        text-align: center;
        font-size: 20px;
    }
</style>
<script>
  import { NavBar } from '../../components';
  export default {
    name: 'tree',
    components: {
      NavBar
    },
    data() {
      return {
        msg: 'Welcome to Your Tree'
      }
    }
  }
</script>