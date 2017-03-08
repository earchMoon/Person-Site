<template>
  <div class="main">
    <NavBar :activeNum="0"></NavBar>
    <section class="desc">
      <h3>CSS模块</h3>
      <p>实用的纯 CSS UI效果代码段，带你体验 CSS 的魅力和强大</p>
    </section>
    <div class="content" flex="box:mean">
      <div class="bar" flex="dir:top">
          <Loading flex-box="1"></Loading>
          <p flex-box="0">Loading加载</p>
      </div>
      <div class="bar">
        <ReactLogo size="12px" flex-box="1"></ReactLogo>
        <p flex-box="0">LOGO for react</p>
      </div>
      
    </div>
  </div>
</template>
<style scoped>
    .desc { 
      width: 1200px;
      margin: 2em auto;
      text-align: center;
      font-size: 20px; 
    } 
    .content {
      width: 1200px;
      margin: 1em auto;
      background-color: #fff;
      overflow: hidden;
      border-radius: 6px;
    }
    .bar {
      margin: 1em;
      padding: 1em;
      border-radius: 6px;
      background-color: #eee;
    }
    .bar>div {
      margin:  auto;
    }
    .bar>p {
      margin-top: 6px;
      text-align: center;
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