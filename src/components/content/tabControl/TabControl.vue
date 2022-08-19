<!--  -->
<template>
  <div class="tab_control">
    <div v-for="(item,index) in titles" :key="item" :class="{active:index==currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex:0
    }
  },
  props:{
    titles:{
      type:Array,
      default:[]
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style  scoped>
  .tab_control{
    background-color: #fff;
    display: flex;
    text-align: center;
    font-size: 4vw;
    height: 6vh;
    line-height: 6vh;
    /* z-index: 8; */
  }
  .tab_control div{
    flex: 1;

  }
  .tab_control>div>span{
    padding: 1vw;
  }
  .active{
    color:var(--color-high-text);

  }
  .active span{
    border-bottom: 1vw solid var(--color-high-text);
  }
</style>
