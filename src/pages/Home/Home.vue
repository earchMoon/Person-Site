<template>
  <div class="main">
    <NavBar :activeNum="0"></NavBar>

    <h3>单元组件</h3>
    <div class="content" flex="box:mean">
      <div flex="cross:center">
        <Loading></Loading>
      </div>
      <div>
        <ReactLogo></ReactLogo>
      </div>
    </div>
  </div>
</template>
<style scoped>
    p {
        margin: 2em auto;
        font-size: 20px;
        text-align: center;
    }
    h3 { 
      width: 1200px;
      margin: 2em auto;
      font-size: 40px; 
    } 
    .content {
      width: 1200px;
      margin: 1em auto;
    }
    .content>div {
      padding: 1em;
      font-size: 20px;
    }
</style>
<script>
  import { NavBar, Loading, ReactLogo } from '../../components';
  export default {
    name: 'home',
    components: {
      NavBar,
      Loading,
      ReactLogo
    }
  }
</script>