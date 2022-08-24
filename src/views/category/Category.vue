<!--  -->
<template>
  <div class="category">
    <navbar class="category_nav"><div slot="center">分类</div></navbar>
    <div class="betweenmaid">
      <NavList :category="category" @tabClick="tabClick"></NavList>
      <scroll class="content" :probe-type="3" :pull-up-load="true" ref="scroll">
      <CategoryList :goods="goods" @imgLoad="imgLoad"></CategoryList>
      <TabControl :titles="['流行','新款','精选']" ></TabControl>
      <GoodsList :goods="detail" class="detail"></GoodsList>
      </scroll>
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/common/navbar/Navbar.vue';
import {getCategorytitle,getCategorydata,getCategoryDetaildata} from 'network/category'
import NavList from './childComps/NavList';
import CategoryList from './childComps/CategoryList.vue';
import GoodsList from '@/components/content/goods/GoodsList.vue';
import TabControl from '@/components/content/tabControl/TabControl.vue';
import Scroll from 'components/common/scroll/Scroll'
export default {
  name:'Category',
  data(){
    return{
      scroll,
      category:{},
      currentindex:0,
      maitKey:3627,
      goods:{},
      miniWallkey:10062603,
      detail:[]
    }
  },
  methods:{
    getCategorytitle(){
      getCategorytitle().then(res=>{
        this.category = res.data.category
        this.maitKey = this.category.list[this.currentindex].maitKey
        this.miniWallkey= this.category.list[this.currentindex].miniWallkey
        // console.log(res)
      })
    },
    getCategorydata(){
      // console.log(this.maitKey)
      getCategorydata(this.maitKey).then(res=>{
        this.goods=res.data
        // console.log(this.goods)
      })
    },
    getCategoryDetaildata(){
      getCategoryDetaildata(this.miniWallkey).then(res=>{
        this.detail=res
      })
    },
    //点击后获取maitKey切换页面
    tabClick(index){
      //获取maityKey
      this.currentindex=index
      this.maitKey = this.category.list[this.currentindex].maitKey
      this.miniWallkey= this.category.list[this.currentindex].miniWallkey
      this.getCategorydata()
      this.getCategoryDetaildata()
    },
    imgLoad(){
      this.$refs.scroll.refresh()
    }
  },
  created(){
    this.getCategorytitle()
    this.getCategorydata()
    this.getCategoryDetaildata()
  
  },
  mounted(){
   
  },
  updated(){
    this.$refs.scroll.scrollTo(0,0,0)
  },
  components:{
    Navbar,
    NavList,
    CategoryList,
    GoodsList,
    Scroll,
    TabControl
}
}
</script>

<style  scoped>

.category_nav{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
.betweenmaid{
  display: flex;
  height: 88vh;
}
.content{
  overflow: hidden;
  position: absolute;
  top: 6vh;
  bottom: 6vh;
  right: 0;
  width: 70VW;
  background-color: #fff;
}
.detail{
  width: 70vw;
}
</style>
