<template>
    <Layout description="Tree">
        TREE
    </Layout>
</template>

<script>
    import {Layout} from '../../components';
    export default {
        name: 'tree',
        components: {
            Layout
        },
        created(){
            this.$store.commit('SET_NAV_BAR_INDEX',{
                index: 2
            });
        }
    }
</script>
