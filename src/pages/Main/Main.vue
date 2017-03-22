<template>
    <div class="main-full">
        <div class="content-user">
            <Heads></Heads>
            <div class="link">
                <ol class="breadcrumb">
                    <li class="active">首页</li>
                    <li><router-link to="/home" >练习</router-link></li>
                    <li><router-link to="/tree" >文章</router-link></li>
                    <li><router-link to="/book" >收藏架</router-link></li>
                    <li><router-link to="/about" >简介</router-link></li>
                </ol>
            </div>
        </div>
        <canvas id="canvas" width="400" height="400"></canvas>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    canvas {
        display: block;
        margin: 0;
        background: linear-gradient(to left, rgb(69, 127, 202), rgb(86, 145, 200));
    }
    .content-user {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 480px;
        height: 240px;
        padding: 20px;
        margin-left: -247px;
        margin-top: -120px;
        border-radius: 10px;
        background-color: #1D4E69;
        color: #fff;
        z-index: 15;
        .link {
            margin-top: 25px;
        }
    }
</style>
<script type="text/ecmascript-6">
    import  {BallAnimate} from './ball.js';
    import {Heads} from './../../components';
    export default {
        name: 'main',
        components: {
            Heads,
        },
        mounted: function () {
            (function () {
                let lastTime = 0;
                let vendors = ['ms', 'moz', 'webkit', 'o'];
                for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
                    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
                }
                if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
                    let currTime = new Date().getTime();
                    let timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    let id = window.setTimeout(function () {
                        callback(currTime + timeToCall);
                    }, timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };
                if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
                    clearTimeout(id);
                };
            }());

            let that = this, canvas = document.getElementById('canvas');
            that.setCanvas(canvas);
            let mark = new BallAnimate();
            let ball = new mark();
            ball.start();
            window && window.addEventListener('resize', function () {
                that.setCanvas(canvas);
                ball.reStart();
            });
        },
        methods: {
            setCanvas: function (canvas) {
                canvas.width = document.documentElement.clientWidth || window.innerWidth;
                canvas.height = document.documentElement.clientHeight || window.innerHeight;
            }
        }
    }
</script>
