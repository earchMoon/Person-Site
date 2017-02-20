<template>
    <div>
        <NavBar :activeNum="2"></NavBar>
        <p>{{msg}}</p>
        <Loading size="30px" style="margin: auto"></Loading>
    </div>
</template>
<style>
    p {
        margin: 2em auto;
        text-align: center;
        font-size: 20px;
    }
</style>
<script>
    import { NavBar,Loading } from '../../components';
    export default {
        name: 'book',
        components: {
            NavBar,
            Loading
        },
        data() {
            return {
                msg: 'Welcome to Your Book'
            }
        }
    }
</script>