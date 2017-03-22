<template>
    <div class="head">
        <div class="user-head">
            <div class="pic"></div>
            <div class="name">小小鸣人</div>
        </div>
        <p class="desc">It is a joke of the motto that nothing is impossible</p>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .head {
        font-size: 16px;
        .user-head {
            width: inherit;
            height: 50px;
            line-height: 50px;
            text-align: center;
            >div {
                display: inline-block;
                height: inherit;
                vertical-align: top;
            }
            .pic {
                width: 50px;
                margin-right: 10px;
                background: url("./../../assets/mr.png") no-repeat center;
                border-radius: 50%;
                background-size: cover;
                vertical-align: top;
            }
        }
        p.desc {
            margin-top: 20px;
            padding: 10px;
            text-align: center;
        }
    }
</style>
<script>
    export default {
        name: 'head'
    }
</script>
