<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        created() {
            this.setTitle()
        },
        watch: {
            '$route': 'setTitle'
        },
        methods: {
            setTitle() {
                document.title = this.$route.meta.title || '文皓均';
            }
        }
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        height: 100%;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 14px;
        line-height: 1.5;
        background-color: #F8F8F8;
    }

    h1, h3, h4 {
        text-align: center;
    }

    #app {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
