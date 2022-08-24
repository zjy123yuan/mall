<!--  -->
<template>
  <div class="bottom-bar">
     <div class="bottom_left">
      <div class="service">
        <i class="icon"></i>
        <span>客服</span>
      </div>
      <div class="shop">
        <i class="icon"></i>
        <span>店铺</span>
      </div>
      <div class="collect">
        <i class="icon"></i>
        <span>收藏</span>
      </div>
    </div>

    <div class="bottom_right">
      <div class="cart"  @click="addToCart">
        加入购物车
      </div>
      <div class="buy">
        购买
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailBottomBar",
  data () {
    return {
    }
  },
  methods:{
    addToCart(){
      this.$emit('addCart')
    }
  }
}
</script>

<style  scoped>
.bottom-bar{
  font-size: 3vw;
  position: fixed;
  z-index: 10;
  background-color: #fff;
  height: 6vh;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  text-align: center;

  box-shadow: 0 1px 2px rgb(10, 10, 10);
  /* padding-top: 2px; */
}
.bottom_left {
  display: flex;
  flex: 1;
  padding-top: 0.5vh;
}
.bottom_left > div {
  flex: 1;
  /* border-right: 1px solid rgba(128, 128, 128, 0.2); */
}
.bottom_left .icon {
  display: block;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  width: 5vw;
  height: 3vh;
  margin: 0 auto 0;
}
.service .icon {
  background-position: 0 -12vw;
}
.shop .icon {
  background-position: 0 -22.5vw;
}
.collect .icon{
  background-position: 0 .5vw;
}
.bottom_right {
  display: flex;
  flex: 1;
  height: 5vh;
  margin: auto 0;
  border-radius: 3vh;
  overflow: hidden;
}
.bottom_right > div {
  flex: 1;
  line-height: 5vh;
}
.cart {
  background-color: rgb(255, 174, 0);
  color: white;
}
.buy {
  background-color: var(--color-tint);
  color: white;
}
</style>
