<template>
 <div>
    <NavBar :activeNum="3"></NavBar>
    <p>{{msg}}</p>
    </div>
</template>
<style>

</style>

<script>
  import { NavBar } from '../../components';
  export default {
    name: 'about',
    components: {
      NavBar
    },
    data() {
      return {
        msg: 'Welcome to here'
      }
    }
  }
</script>
