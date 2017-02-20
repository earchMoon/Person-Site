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
    <div class="content" flex="box:mean">
      <div flex="cross:center">
        <Loading></Loading>
      </div>
      <div flex="cross:center">
        <Loading></Loading>
      </div>
    </div>
  </div>
</template>
<style scoped>
    p {
        margin: 2em auto;
        text-align: center;
        font-size: 20px;
    }
    h3 { 
      width: 1200px;
      margin: 2em auto;
      font-size: 40px; 
    } 
    .content {
      margin: 1em auto;
      width: 1200px;
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