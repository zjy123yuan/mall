<!--  -->
<template>
  <div class="category-list">

      <div class="list">
        <div v-for="(item,index) in goods.list" 
        class="goods-item" 
        :key="index" >
          <a :href="item.link">
            <img :src="item.image" alt="" @load="imgLoad">
            <div><span>{{item.title}}</span></div>
          </a>
      </div>
      </div>
  </div>
</template>

<script>

export default {
  name:'CategoryList',
  data () {
    return {
    }
  },
  props:{
    goods:{
      type:Object,
      default:{}
    }
  },
  components:{
    
  },
  methods:{
    imgLoad(){
      this.$emit('imgLoad')
    }
  },

}
</script>

<style  scoped>
.category-list{
  position: relative;
  top: 0;
  width: 70vw;
}

.list{
    display: flex;
    width: 70vw;
    flex-wrap: wrap;
    justify-content:flex-start; 
    text-align: center;
}
.goods-item{
  padding: 0 1vw;
}
.goods-item img{
  width: 33vw;

}
</style>
