<!--  -->
<template>
    <swiper class="swipers">
      <SwiperItem v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="" >
      </SwiperItem>
    </swiper>
</template>

<script>
import { Swiper,SwiperItem } from 'components/common/swiper';
export default {
  name:'DetailSwiper',
  props:{
    topImages:{
      type:Array,
      default(){return[]}
    }
  },
  data () {
    return {
    }
  },
  components:{
     Swiper,
     SwiperItem
  }
}
</script>

<style  scoped>
  .swipers{
    height: 60vh;
    overflow: hidden;
  }
</style>
