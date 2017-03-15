<template>
    <div>
        <NavBar :activeNum="3"></NavBar>
    </div>
</template>
<style>

</style>

<script>
    import {NavBar} from '../../components';
    export default {
        name: 'about',
        components: {
            NavBar
        },
    }
</script>
