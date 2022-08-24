<!--  -->
<template>
  <div class="cart_list">
    <scroll class="content">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"></cart-list-item>
      <!-- <i v-for="item in cartList">{{item}}</i> -->
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll';
import CartListItem from './CartListItem.vue';

import { mapGetters } from 'vuex';
export default {
  name:'CartList',
  data () {
    return {
    }
  },
  components:{
    Scroll,
    CartListItem,

  },
  computed:{
    ...mapGetters(['cartList'])
  }
}
</script>

<style  scoped>
.cart_list{
  position: absolute;
  top: 6vh;
  right: 0;
  left: 0;
  bottom: 12vh;

}
.content{
  /* height: 88vh; */
  overflow: hidden;
  position: absolute;
  top: 0vh;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
