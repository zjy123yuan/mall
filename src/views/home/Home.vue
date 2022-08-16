<!--  -->
<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">首页</div></navbar>
    <homeSwiper :banners="banners"></homeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
    <FeatureView></FeatureView>
    <TabControl :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></TabControl>
    <GoodsList :goods='showGoods'></GoodsList>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar.vue'
import homeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import TabControl from 'components/content/tabControl/TabControl'
import GoddList from 'components/content/goods/GoodsList'

import {getHomeMultidata, getHomeGoods} from 'network/home'
import GoodsList from '../../components/content/goods/GoodsList.vue'

export default {
  name:'home',
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
      currenttype:'pop'
    }
  },
  components:{
    Navbar,
    homeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoddList,
    GoodsList
},
computed:{
  showGoods(){
    return this.goods[this.currenttype].list
  }
},
  created(){
    //请求数据，调用封装在methods中的请求方法
    this.getHomeMultidata()
    //请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
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
      })
    }
  }
}
</script>

<style  scoped>
#home{
  padding-top: 10vw;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}
.tab-control{
  position: sticky;
  top: 10vw;
}
</style>
