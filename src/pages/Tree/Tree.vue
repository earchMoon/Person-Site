<template>
  <div class="tree">
    <NavBar :activeNum="1"></NavBar>
    <div class="content colorPicker" flex="dir:left">
      <div class="twod">
        <div class="bg bg1"></div>
        <div class="bg bg2"></div>
      </div>
      <div class="oned" @mousedown="setCurrentH" >
        <div class="pointer" :style="{top: currentTop}" @keypress="moveBar" @></div>
      </div>
    </div>
  </div>
</template>
<style type="less">
    .content {
      width: 1200px;
      margin: 2em auto;
      overflow: unset;
    }
    .twod {
      position: relative;
      width: 400px;
      height: 400px;
      border: 1px solid #ccc;
      z-index: 2;
    }
    .oned {
      position: relative;
      margin-left: 100px;
      width: 50px;
      height: 400px;
      background: linear-gradient(to bottom, red 0%, #ff0 17%, lime 33%, cyan 50%, blue 66%, #f0f 83%, red 100%);
      overflow: unset;
      cursor: pointer;
      z-index: 2;
    }
    .oned .pointer {
      position: absolute;
      top: 0%;
      left: -5px;
      width: 60px;
      height: 4px;
      z-index: 3;
      background-color: #000;
    }
     .oned .pointer::after {
       content: '';
       position: absolute;
       top: -6px;
       right: -8px;
       border-right: 10px solid #000;
       border-top: 8px solid transparent;
       border-bottom: 8px solid transparent;
     }

    .oned .pointer::before {
        content: '';
        position: absolute;
        top: -6px;
        left: -8px;
        border-left: 10px solid #000;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
      }
    .twod .bg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
    }
</style>
<script>
  import { NavBar } from '../../components';
  export default {
    name: 'tree',
    components: {
      NavBar
    },
    methods: {
      setCurrentH: function(e){
        this.onedIsActive = true;
        this.currentTop = Math.floor((e.offsetY*100)/400)+"%";
      },
      moveBar: function(e){
        console.log(e)
      } 
    },
    data() {
      return {
        currentTop: '0%',
        onedIsActive: false
      }
    }
  }
</script>