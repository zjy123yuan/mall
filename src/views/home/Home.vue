<!--  -->
<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">首页</div></navbar>
    <TabControl :titles="['流行','新款','精选']"  
                @tabClick="tabClick" 
                ref="tabControl1" 
                class="tabControl" v-show="isTabfixed"></TabControl> 
    <Scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            @scroll="contentScroll" 
            :pull-up-load="true"
            @pullingUp="loadMore">
      <homeSwiper :banners="banners" class="homeswiper" @swiperImgeLoad.once="swiperImgeLoad"></homeSwiper>
      <RecommendView :recommends="recommends"></RecommendView>
      <FeatureView></FeatureView>
      <TabControl :titles="['流行','新款','精选']"  @tabClick="tabClick" ref="tabControl2" ></TabControl>
      <GoodsList :goods='showGoods'></GoodsList>
    </Scroll>
    <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>
  </div>
</template>

<script>
//轮播图，推荐，特色专栏
import homeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
//首页头，商品类型控制，商品列表,滑动插件，回到顶部
import Navbar from 'components/common/navbar/Navbar.vue'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'
//获取轮播图等数据，获取商品列表
import {getHomeMultidata, getHomeGoods} from 'network/home'
import {itemListenterMixin} from 'common/mixin'


export default {
  name:'home',
  mixin:[itemListenterMixin],
  data () {
    return {
      // result:null,
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currenttype:'pop',
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabfixed:false,
      saveY:0,
    }
  },
  components:{
    Navbar,
    homeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
},
computed:{
  showGoods(){
    return this.goods[this.currenttype].list
  }
},
destroyed(){

},
//在下一次进入时跳转到上一次的位置
//不刷新可能会回到顶部
activated(){
  this.$refs.scroll.refresh()
  this.$refs.scroll.scrollTo(0,this.saveY,0)
  // this.$refs.scroll.refresh()
},
//为了保险记录一下离开前停留位置
deactivated(){
  this.saveY = this.$refs.scroll.getscrollY()
  this.$bus.$off('itemImgeLoad',this.ItemListener)
},
created(){
    //请求数据，调用封装在methods中的请求方法
    this.getHomeMultidata()
    //请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted(){

  },
  methods:{
 
    //事件监听
    tabClick(index){
      switch(index){
        case 0:
          this.currenttype='pop'
          break
        case 1:
          this.currenttype='new'
          break
        case 2:
          this.currenttype='sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    //回到顶部
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    //判断回到顶部是否显示
    contentScroll(position){
      //判断是否显示回到顶部
      this.isShowBackTop = -(position.y) > 1000
      //判断是否吸顶
      this.isTabfixed = -(position.y)>this.tabOffsetTop
    },
    //上拉加载
    loadMore(){
      this.getHomeGoods(this.currenttype)

    },
    //监听轮播图的加载
    swiperImgeLoad(){
      //获取tabcontrol的offsettop
      this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
    },


    //网络请求
     getHomeMultidata(){
       getHomeMultidata().then(res=>{
      // console.log(res)
      // this.result=res
      this.banners = res.data.banner.list
      this.recommends= res.data.recommend.list
      })
     },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
        this.$refs.scroll.finishPullUp()
        this.$refs.scroll.refresh()
      })
    }
  },

 
}
</script>

<style  scoped>
#home{
  /* padding-top: 6vh; */
  height: 88vh;

}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  /* top: 6vh; */
  /* 使用scroll后不需要使用这个 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999; */
}
.content{
  /* height: 88vh; */
  overflow: hidden;
  position: absolute;
  top: 6vh;
  bottom: 6vh;
  left: 0;
  right: 0;
}
.tabControl{
  position: relative;
  background-color: #fff;
  z-index: 9;
}
/* .fixed{
  position: fixed;
  left: 0;
  right: 0;
  top: 6vh;

} */
</style>
