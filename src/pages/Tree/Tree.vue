<template>
  <div class="tree">
    <NavBar :activeNum="1"></NavBar>
    <ColorPicker></ColorPicker>
  </div>
</template>

<script>
  import { NavBar,ColorPicker } from '../../components';
  export default {
    name: 'tree',
    components: {
      NavBar,
      ColorPicker
    }
  }
</script>