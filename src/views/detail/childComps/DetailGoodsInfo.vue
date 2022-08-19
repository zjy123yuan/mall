<!--  -->
<template>
  <div v-if="Object.keys(detailInfo).length!==0" id="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
        <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
        <div class="info-list">
          <img v-for="(item,index) in detailInfo.detailImage[0].list" 
              :src="item" 
              :key="index"
              @load="loadImg"
              alt="">
        </div>
  </div>
</template>

<script>
export default {
  name:'DetailGoodsInfo',
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },  
   data() {
    return {
      counter: 0,
      imageLength: 0,
    }
  },
  methods: {
    loadImg() { // 判断,所有的图片都加载完成了.那么进行一次回调
      if(this.counter%5 === 0 || this.counter ===this.imageLength) {
       this.$emit("imageLoad");
      }
      this.counter+=1
    }
  },
  watch: {
    detailInfo() { // 获取图片的个数
      this.imageLength += this.detailInfo.detailImage[0].list.length
    }
  }
};
</script>
<style scoped>
 #goods-info {
  font-size:3vh;
}


.info-desc {
  font-size: 2vh;
  padding: 0.42rem 0.34rem;
}

.start {
  width: 40vw;
  height: 0.5vh;
  background-color: gray;
  float: left;
}
.start::before{
  content: "";
  display: block;
  height: 0.25vh;
  background-color: black;
  width: 25%;
}
.end {
  width: 40vw;
  height: 0.5vh;
  background-color: gray;
  position: relative;
  float: right;
}
.end::after{
  content: "";
  display: block;
  height: 0.25vh;
  background-color: black;
  width: 25%;
  float: right;
}


.desc {
  padding:3vh 0;
  color: gray;
}

.info-key {
  padding: 0.42rem 0.34rem;
  text-align: center;
}
.info-list img {
  width: 100%;
  margin: 0;
  padding: 0;
} 
</style>
