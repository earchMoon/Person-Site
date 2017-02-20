<template>
 <div>
    <NavBar :activeNum="3"></NavBar>
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
    name: 'moon',
    components: {
      NavBar
    },
    data() {
      return {
        msg: 'Welcome to Your Moon'
      }
    }
  }
</script>