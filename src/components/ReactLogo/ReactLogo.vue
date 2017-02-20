<template>
    <div class="react-logo" :style="{fontSize:size}">
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
        width: 8em;
        height: 8em;
        background: #222222;
        font-size: 12px;
    }

    .logo-circle {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -1.5em;
        margin-top: -3.75em;
        width: 3em;
        height: 7.5em;
        border-radius: 50%;
        border: .35em solid #00d8ff;
        box-sizing: border-box;
    }

    .circle {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -0.6em;
        margin-top: -0.6em;
        width: 1.2em;
        height: 1.2em;
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