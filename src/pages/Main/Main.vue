<template>
    <div class="main">
        <div class="full-bg"></div>
        <!--<div class="content-user">-->
            <!--MR 文-->
        <!--</div>-->
        <canvas id="canvas" width="400" height="400"></canvas>

    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .main {
        canvas {
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 12;
        }
        .content-user {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 600px;
            height: 300px;
            padding: 20px;
            border-radius: 10px;
            transform: translate(-50%, -50%);
            background-color: slategray;
            z-index: 15;
        }
        .full-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to right, #ace 0%, #d4bc5e 100%);
            z-index: 10;
        }
        width: 100%;
        height: 100%;
    }

</style>
<script type="text/ecmascript-6">
    import  { BallAnimate } from './ball.js';
    export default {
        name: 'main',
        mounted: function () {
            let that = this, canvas = document.getElementById('canvas');
            that.setCanvas(canvas);
            BallAnimate().start();
            window && window.addEventListener('resize',function () {
                that.setCanvas(canvas);
                BallAnimate().start();
            });

        },
        methods: {
            setCanvas: function (canvas) {
                canvas.width = document.body.clientWidth;
                canvas.height = document.body.clientHeight;
            }
        }
    }
</script>
