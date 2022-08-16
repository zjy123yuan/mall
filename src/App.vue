<template>
  <div id="app">
    <router-view/>
    <Maintabbar></Maintabbar>
  </div>
</template>

<script>
  import Maintabbar from 'components/content/maintabbar/Maintabbar.vue'
  export default {
    name: 'App',
    components: {
      Maintabbar
    }
  }
</script>

<style>
  @import url(./assets/css/base.css);
</style>
