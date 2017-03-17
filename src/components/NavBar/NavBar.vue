<template>
    <header class="header ">
        <div class="container">
            <div class="header-logo clearfix">
                <div class="logo"></div>
                <div class="title">
                    <p class="subtitle">小小鸣人</p>
                    <p class="description">理想还是要有的</p>
                </div>
            </div>
            <ul class="nav nav-pills header-nav">
                <li role="presentation">
                    <router-link to="/home" class="item" :class="{active:activeNum === 0}">练习</router-link>
                </li>
                <li role="presentation">
                    <router-link to="/tree" class="item" :class="{active:activeNum === 1}">文章</router-link>
                </li>
                <li role="presentation">
                    <router-link to="/book" class="item" :class="{active:activeNum === 2}">收藏架</router-link>
                </li>
                <li role="presentation">
                    <router-link to="/about" class="item" :class="{active:activeNum === 3}">简介</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>
<script>
    export default {
        name: 'navBar',
        props: {
            activeNum: {
                type: Number,
                required: true,
                default: 0
            },
        }
    }
</script>
<style rel="stylesheet/less" lang="less">
    .header {
        position: relative;
        padding-bottom: 60px;
        background: #26272b;
        -webkit-user-select: none;

        .header-logo {
            padding: 30px;
        }
        .logo {
            float: left;
            width: 70px;
            height: 70px;
            padding-top: 10px;
            padding-bottom: 10px;
            margin-right: 10px;
            background: url('./../../assets/logo.png') no-repeat left center;
            background-size: 100% auto;
        }
        .title {
            float: left;
            .subtitle {
                margin-top: 8px;
                line-height: 30px;
                font-size: 22px;
                color: #fa862e;
                text-shadow: 0 1px rgba(0,0,0,0.2);
            }
            .description {
                margin-bottom: 0;
                line-height: 20px;
                font-size: 16px;
                color: #777;
                letter-spacing: 2px;
            }
        }
        .header-nav {
            background-color: #33363b;
        }
    }

</style>
