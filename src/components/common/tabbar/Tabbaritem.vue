<!--  -->
<template>
  <div class="tabbaritem" @click="itemClick">
    <!-- div包裹插槽可以给div添加样式继承给插槽不会被外部影响 -->
    <div v-if="isactive" ><slot  name="item-icon"></slot></div>
    <div v-else><slot name="item-active"></slot></div>
    <div :style="activestyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>


export default {
  name:'Tabbaritem',
  props:{
    path:String,
    activecolor:{
      String,
      default:'red',
    }
  },
  data () {
    return {
    }
  },
  computed:{
     isactive(){
      return this.$route.path.indexOf(this.path)!=-1
     },
     activestyle(){
      return this.isactive?{color:this.activecolor,}:{}
     }
  },
  methods:{
    
    itemClick(){
      //解决重复点击路由重复跳转报错的问题，如果是当前路由则不进行跳转
      if(!this.isactive){
        this.$router.replace(this.path)
      }
    }
  }
}
</script>

<style  scoped>

  .tabbaritem{
    /* 设置弹性盒 */
    flex:1;
    text-align: center;
    height: 10vw;
    background-color: #f6f6f6;
    /* line-height: 49px; */
    font-size: 3vw;

  }
  .tabbaritem img{
    width: 5vw;
    height: 5vw;
    margin-top: 3px;
    vertical-align: middle;;
    margin: 3px 0; 

  }

</style>
