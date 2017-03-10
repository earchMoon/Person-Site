<template>
  <div class="tree">
    <NavBar :activeNum="1"></NavBar>
  </div>
</template>

<script>
  import { NavBar } from '../../components';
  export default {
    name: 'tree',
    components: {
      NavBar
    }
  }
</script>
