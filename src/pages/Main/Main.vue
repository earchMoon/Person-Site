<template>
    <div class="main">
        <div class="full-bg"></div>
        <div class="content">

        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .main {
        .content {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 600px;
            height: 300px;
            padding: 20px;
            transform: translate(-50%,-50%);
            background-color: slategray;
        }
        .full-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to right, #ace 0%, #d4bc5e 100%);
        }
        width: 100%;
        height: 100%;
    }

</style>
<script>
    export default {
        name: 'main'
    }
</script>
