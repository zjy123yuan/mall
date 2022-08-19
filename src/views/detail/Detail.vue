<!--  -->
<template>
  <div id="detail">
    <DetailNavBar @titleClick="titleClick"></DetailNavBar>
    <Scroll class="content" ref="scroll">
      <DetailSwiper :top-images="topImages"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad" ></DetailGoodsInfo>
      <DetailParamsInfo :paramInfo="paramInfo" ref="params"></DetailParamsInfo>
      <DetailCommentInfo :rate="rate" ref="comment"></DetailCommentInfo>
      <GoodsList :goods='recommend' ref="goodslist"></GoodsList>
    </Scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import Scroll from 'components/common/scroll/Scroll.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo'
import GoodsList from '@/components/content/goods/GoodsList.vue'

import { getDetail ,Goods,Shop,getRecommend} from 'network/detail'
import {itemListenterMixin} from 'common/mixin'
import { debounce } from '@/common/utils'

export default {
  name:'Detail',
  mixins:[itemListenterMixin],
  data () {
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      rate:{},
      recommend:[],
      themeTopYs:[],
      getThemeTpoY:null,
    }
  },
  created(){
    //保存iid
    this.iid = this.$route.query.iid
    //根据iid请求数据
    getDetail(this.iid).then(res=>{
      const data = res.result
      //1.获取顶部图片
      this.topImages = data.itemInfo.topImages
      //2.获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //3.获取商家信息
      this.shop = new Shop(data.shopInfo)
      //4.获取商品详情
      this.detailInfo = data.detailInfo
      //5.获取产品参数信息
      this.paramInfo = data.itemParams
      //6.获取评论信息
      if(data.rate.cRate!=0){
        this.rate = data.rate.list[0]
      }


    })
    //获取推荐数据
    getRecommend().then(res=>{
      this.recommend = res.data.list
      
    })
    this.getThemeTpoY = debounce(()=>{
      this.themeTopYs = [] 
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.goodslist.$el.offsetTop)
    },50)


  }, 
  destroyed(){
    this.$bus.$off('itemImgeLoad',this.detailItemListener)
  }, 
  mounted(){

  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailCommentInfo,
    DetailParamsInfo,
    GoodsList
  },
  methods:{
    imageLoad() {
      this.$refs.scroll.refresh()
      this.getThemeTpoY()
      // this.refresh()
      // this.getThemeTopY()
    },
    //监听标题的点击
    titleClick(index){
      this.$refs.scroll.refresh()
      console.log(this.themeTopYs)
      console.log(this.rate)
      // this.themeTopYs = [] 
      // this.themeTopYs.push(0)
      // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.goodslist.$el.offsetTop)
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
      
    },

  },
  updated(){


    
  }
}
</script>

<style  scoped>
#detail{
  position: relative;
  z-index: 10;
  background-color: #fff;
}
.detail-nav{
  position: relative;
  z-index: 10;
}
.content{
  height: 88vh;
  /* position: relative;
  top: 0vh;
  bottom: 50vh;
  left: 0;
  right: 0; */
}
</style>
