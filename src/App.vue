<template>
  <div id="app">
    <keep-alive exclude="Detail"><router-view/></keep-alive>
    <Maintabbar></Maintabbar>
  </div>
</template>

<script>
  import Maintabbar from 'components/content/mainTabbar/Maintabbar.vue'
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
