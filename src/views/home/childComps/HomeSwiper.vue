<!--  -->
<template>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.title">
        <a :href="item.link"><img :src="item.image" alt="" @load="imgeLoad"></a>
     </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name:'homeswiper',
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  components:{
    Swiper,
    SwiperItem,
  },
  methods:{
    imgeLoad(){
      this.$emit('swiperImgeLoad')
    }
  }
}
</script>

<style  scoped>

</style>
