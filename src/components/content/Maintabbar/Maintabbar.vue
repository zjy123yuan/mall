<!--  -->
<template>
    <tabbar>
      <tabbaritem path="/home" activecolor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/11.gif" alt="">
        <img slot="item-active" src="~assets/img/tabbar/20.gif" alt="">
        <div slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem path="/category" activecolor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/20.gif" alt="">
        <img slot="item-active" src="~assets/img/tabbar/11.gif" alt="">
        <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem path="/cart" activecolor="green">
        <img slot="item-icon" src="~assets/img/tabbar/5.gif" alt="">
        <img slot="item-active" src="~assets/img/tabbar/9.gif" alt="">
        <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/9.gif" alt="">
        <img slot="item-active" src="~assets/img/tabbar/5.gif" alt="">
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
