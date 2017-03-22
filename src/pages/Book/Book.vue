<template>
    <Layout description="Book">
        {{msg}}
    </Layout>
</template>
<style>

</style>
<script>
    import { Layout } from '../../components';
    export default {
        name: 'book',
        components: {
            Layout
        },
        created(){
            this.$store.commit('SET_NAV_BAR_INDEX',{
                index: 3
            });
        },
        data() {
            return {
                msg: 'Welcome to here'
            }
        }
    }
</script>
