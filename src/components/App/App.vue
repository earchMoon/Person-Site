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
    #app {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .clearFix::after {
        content: '';
        width: 0;
        clear: both;
    }
</style>
