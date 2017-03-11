<template>
    <div class="content colorPicker" flex="dir:left">
        <div class="twod">
            <div class="bg bg1"></div>
            <div class="bg bg2"></div>
        </div>
        <div class="oned">
            <div class="oned-bg" @mousedown="setCurrentTop"></div>
            <div class="pointer" :style="{top: currentTop}"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ColorPicker',
        methods: {
            setCurrentTop: function (e) {
                let that = this,
                    startY = e.offsetY, //相对坐标
                    oldY = e.clientY, //初始化坐标
                    newY = 0;//新坐标
                let getY = function (e) {

                    let event = e || window.e;
                    newY = event.clientY;
                    if (newY >= oldY && newY - oldY <= 400 - startY) {
                        let top = newY - oldY + startY;
                        that.currentTop = Math.floor((top * 100) / 400) + "%";
                    } else if (newY <= oldY && oldY - newY <= startY) {
                        let top = startY - (oldY - newY);
                        that.currentTop = Math.floor((top * 100) / 400) + "%";
                    } else {
                        return;
                    }
                }
                this.currentTop = Math.floor((startY * 100) / 400) + "%";
                document.body.addEventListener("mousemove", getY, false);
                document.body.addEventListener("mouseup", function () {
                    document.body.removeEventListener("mousemove", getY, false);
                });
                return;
            }
        },
        data() {
            return {
                currentTop: '0%'
            }
        }
    }

</script>

<style type="less">
    body {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

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
        overflow: unset;
        cursor: pointer;
        z-index: 2;
    }

    .oned-bg {
        width: 100%;
        height: 100%;
        background: -webkit-linear-gradient(red 0%, #ff0 17%, lime 33%, cyan 50%, blue 66%, #f0f 83%, red 100%);
        background: -o-linear-gradient(red 0%, #ff0 17%, lime 33%, cyan 50%, blue 66%, #f0f 83%, red 100%);
        background: linear-gradient(red 0%, #ff0 17%, lime 33%,
        cyan 50%, blue 66%, #f0f 83%, red 100%);
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

    .oned
    .pointer::before {
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
