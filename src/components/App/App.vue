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
    watch : {
      '$route': 'setTitle'
    },
    methods: {
      setTitle(){
        document.title = this.$route.meta.title || '文皓均';
      }
    }

  }
</script>