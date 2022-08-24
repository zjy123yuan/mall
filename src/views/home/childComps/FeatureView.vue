<!--  -->
<template>
  <div class="feature">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="~assets/img/home/recommend_bg.jpg" alt="" @load="imgeLoad">
    </a>
  </div>
</template>

<script>
export default {
  name:'FeatureView',
  data () {
    return {
    }
  },
  methods:{
    imgeLoad(){
      this.$emit('swiperImgeLoad')
    }
  }
}
</script>
  
<style  scoped>
  .feature img{
    width: 100vw;
  }
</style>
