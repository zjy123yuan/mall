<!--  -->
<template>
    <tabbar>
      <tabbaritem path="/home" activecolor="rgb(255,17,119)">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem path="/category" activecolor="rgb(255,17,119)">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem path="/cart" activecolor="rgb(255,17,119)">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tabbaritem>
  </tabbar>
</template>

<script>
import Tabbar from 'components/common/tabbar/Tabbar.vue'
import Tabbaritem from 'components/common/tabbar/Tabbaritem.vue'
export default {
  name:'Maintabbar',
  components: {
    tabbar:Tabbar,
    tabbaritem:Tabbaritem
  },
  data () {
    return {
    }
  }
}
</script>

<style  scoped>

</style>
