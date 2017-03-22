<template>
    <router-view></router-view>
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

