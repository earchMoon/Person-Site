<template>
    <div class="react-logo" v-bind:style="{fontSize:size}">
        <div class="circle"></div>
        <div class="logo-circle circle-one"></div>
        <div class="logo-circle circle-two"></div>
        <div class="logo-circle circle-three"></div>
    </div>
</template>
<script>
    export default {
        name: 'ReactLogo',
        props: ['size']
    }
</script>
<style type="less">
    .react-logo {
        position: relative;
        margin: 0 auto;
        width: 16em;
        height: 16em;
        background: #222222;
        font-size: 12px;
    }

    .logo-circle {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -3em;
        margin-top: -7.5em;
        width: 6em;
        height: 15em;
        border-radius: 50%;
        border: .7em solid #00d8ff;
        box-sizing: border-box;
    }

    .circle {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -1.2em;
        margin-top: -1.2em;
        width: 2.4em;
        height: 2.4em;
        border-radius: 50%;
        background: #00d8ff;

    }

    .circle-one {
        transform: rotate(30deg);
        transform-origin: center;
    }
    .circle-two {
        transform: rotate(-30deg);
        transform-origin: center;
    }
    .circle-three {
        transform: rotate(90deg);
        transform-origin: center;
    }
</style>