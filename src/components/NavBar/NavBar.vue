<template>
    <div class="wrap">
        <div class="nav" flex="dir:left;box:last">
            <div class="logo" flex-box="1">Mr Wen</div>
            <div class="list" flex="dir:left">
                <router-link to="/" class="item" :class="{active:activeNum === 0}">Components</router-link>
                <router-link to="/tree" class="item" :class="{active:activeNum === 1}">Tree</router-link>
                <router-link to="/book" class="item" :class="{active:activeNum === 2}">Book</router-link>
                <router-link to="/moon" class="item" :class="{active:activeNum === 3}">Moon</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'navBar',
        props:{
            activeNum: {
                type: Number,
                required: true,
                default: 0
            },
        }
    }
</script>
<style type="less">
    .wrap {
        box-shadow: 0 0 12px 1px rgba(204,204,204,.3);
    }
    .logo {
        padding-left: 70px;
        height: inherit;
        line-height: 70px;
        font-size: 24px;
        font-weight: 500;
        background: url('./../../assets/logo.png') no-repeat left center;
        background-size: auto 80%;
    }
    .nav {
        width: 1200px;
        height: 70px;
        margin: auto;
    }
    .item {
        display: block;
        padding: 0 5px;
        margin: 0 20px;
        line-height: 70px;
        color: #666;
        text-decoration: none;
    }
    .item:hover,.item.active{
        border-bottom: 4px solid #666;
    }
</style>