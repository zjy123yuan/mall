<!--  -->
<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  data () {
    return {
    }
  },
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style  scoped>
  .goods-item{ 
    position: relative;
    width: 48vw;
    padding-bottom: 10vw;
  }
  .goods-item img{
    width: 48vw;
    border-radius: 5px;
  }
  .goods-info{
    font-size: 3vw;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 1vw;
  }
  .goods-info .price{
    color: var(--color-high-text);
    margin-right: 10%;
  }
  .goods-info .collect{
    position: relative;
  }
  .goods-info .collect::before{
    content: '';
    position: absolute;
    left: -3vw;
    width: 4vw;
    height: 4vw;
    background: url("~assets/img/common/collect.svg") no-repeat 0 0 /3vw 3vw  ;

  }
</style>
