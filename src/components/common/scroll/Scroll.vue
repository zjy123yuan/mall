<!--  -->
<template>
  <div class="wrapper" ref="homescroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      scroll:null
    }
  },
   mounted(){
 
    this.scroll = new BScroll(this.$refs.homescroll,{
      //0和1不监听，2监听手指滑动，3监听惯性
      probeType:this.probeType,
      //上拉加载更多
      pullUpLoad:this.pullUpLoad,
      //监听除了按钮以外的点击生效
      click:true,
      //监听网页DOM结构的变化
      observeDOM: true
      
    })
    //监听滚动
    if(this.probeType>1){
      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)  
      })
    }
    //监听底部下拉
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
    }
  },
  methods:{
    //回到指定位置
    scrollTo(x,y,time=500){
      this.scroll&&this.scroll.scrollTo(x,y,time)
    },
    //结束下拉
    finishPullUp(){
      this.scroll&&this.scroll.finishPullUp()
    },
    //刷新scroll，重新计算高度
    refresh(){
      this.scroll&&this.scroll.refresh()
    },
    getscrollY(){
      return this.scroll?this.scroll.y:0
    }
  }
}

</script>

<style  scoped>
  .wrapper{
    overflow: hidden;
    position: absolute;
  }

</style>
