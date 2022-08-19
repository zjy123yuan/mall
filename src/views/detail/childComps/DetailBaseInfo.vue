<!--  -->
<template>
  <div class="base-info" v-if="Object.keys(goods).length!==0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBaseInfo',
  data () {
    return {
    }
  },
  props:{
      goods:{
        type:Object,
        default() {
          return {}
          }
      }
  },
  created(){
  },
  computed:{

  }
}
</script>

<style  scoped>

  .base-info {
    margin-top: 2vh;
    padding: 0 2vw;
    color: #999;
    border-bottom: 1vh solid #f2f5f8;
  }

  .info-title {
    color: #222
  }

  .info-price {
    margin-top: 2vh;
  }

  .info-price .n-price {
    font-size: 7vw;
    color: var(--color-high-text);
  }

  .info-price .o-price {
    font-size: 4vw;
    margin-left: 2vw;
    text-decoration: line-through;
  }

  .info-price .discount {
    font-size: 3vw;
    padding: 0.5vh 1.5vw;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 2vw;
    margin-left: 1vw;

    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -1.5vh;
  }

  .info-other {
    margin-top: 2vh;
    line-height: 4vh;
    display: flex;
    font-size: 3vw;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }

  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 8vh;
  }

  .info-service-item img {
    width: 4vw;
    height: 4vw;
    position: relative;
    top: 0.5vh;
  }

  .info-service-item span {
    font-size: 3vw;
    color: #333;
  }
</style>
