<!--  -->
<template>
  <div class="goods">
    <GoodsListItem v-for="item in goods" :goods-item="item" key="item.title"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem';
export default {
  name:'GoodsList',
  data () {
    return {
    }
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style  scoped>
.goods{
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  justify-content: space-evenly ;
}
</style>
