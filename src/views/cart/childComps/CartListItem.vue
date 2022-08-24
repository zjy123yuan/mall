<template>
  <div id="shop-item">
    <div class="item-button">
     <CheckButton :IsChecked = 'product.checked' @click.native="ChangeCheck"></CheckButton>
    </div>
  <div class="item-img">
    <img :src="product.image" alt="">
  </div>


  <div class="item-info">
    <div class="title">{{product.title}}</div>
    <div class="desc">{{product.desc}}</div>
    <div class="info-buttom">
      <div class="info-price">{{price}}</div>
      <div class="info-count">{{count}}</div>
    </div>
  </div>
  </div>

</template>

<script>

import CheckButton from 'components/content/checkButtom/CheckButton'


export default {
    name: "CartListItem",
    props: {
        product: {
            type: Object,
            defult() {
                return {};
            }
        }
    },
    data() {
        return {};
    },
    methods:{
      ChangeCheck(){
        this.product.checked = !this.product.checked
      }
    },
    components: { CheckButton },
    computed:{
      price(){
        return `￥${this.product.price}`
      },
      count(){
        return `×${this.product.count}`
      }
    }
}
</script>

<style  scoped>
#shop-item{
  height: 15vh;
  display: flex;
  border-bottom: 0.04rem solid rgba(128, 128, 128, 0.4);
  /* align-items: center; */
  align-content:space-around;
  padding: 1vh 0;
}
.item-button{
  width: 12vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img {
  height: 13vh;

}
.item-img img{
  height: 100%;
  width: auto;
  border-radius: .8vh;
}

.item-info {
  position: relative;
  margin-left: 1vw;
  width: 60vw;
  height: 13vh;
  padding: 0 2vw;
}
.item-info>div{
  height: 4vh;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 4vh;
}
.title {

  font-size: 6vw;

}

.desc {
  font-size: 3vw;
  color: gray;

}
.info-buttom{
  font-size: 5vw;
}
.info-price {
  float: left;
  color: orangered;
}
.info-count {
  
  float: right;
}
</style>
