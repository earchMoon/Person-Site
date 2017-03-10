<template>
    <div class="head" flex="dir:top">
        <div class="user-info" flex="main:center" title="随风而逝">
            <span class="user-name" >小小鸣人</span>
            <span class="user-head"></span>
        </div>
        <p class="desc">It is a joke of the motto that nothing is impossible</p>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .head {
        .user-info {
            .user-head {
                width: 50px;
                background: url("./../../assets/mr.png") no-repeat center;
                background-size: cover;
                border-radius: 50%;
            }
            .user-name {
                padding-left: 20px;
                padding-right: 20px;
                font-size: 20px;
            }
            height: 50px;
            line-height: 50px;
        }
        p.desc{
            padding: 10px;
            font-size: 16px;
            text-align: center;
        }
        font-size: 14px;
    }
</style>
<script type="text/ecmascript-6">
    export default {
        name: 'Head',
    }
</script>
