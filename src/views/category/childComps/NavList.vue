<!--  -->
<template>
  <div class="nav-list">
    <scroll class="content" :probe-type="3" :pull-up-load="true">
      <div v-for="(item,index) in category.list" 
        class="nav-item" 
        :key="index" 
        @click="checkClick(index)"
        :class="{checked:index==currentindex}">
        {{item.title}}
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
export default {
  name:'NavList',
  props:{
    category:{
      type:Object,
      default:{},

    }
  },
  data () {
    return {
      currentindex:0,
    }
  },
  methods:{
    checkClick(index){
      if(this.currentindex!=index){
        this.currentindex=index
        this.$emit('tabClick',index)
      }
    }
  },
  components:{
    Scroll,
  }
}
</script>

<style  scoped>
.content{
  overflow: hidden;
  position: absolute;
  top: 0vh;
  bottom: 6vh;
  left: 0;
  right: 0;
  width: 30VW;
  background-color: rgba(0,0,0,0.05);
}
.nav-list{
  position: relative;
  top: 6vh;
  height: 94vh;
  width: 30vw;
}
.nav-item{
  width: 30vw;
  height: 6vh;
  line-height: 6vh;
  text-align: center;
}
.checked{
  background-color: #fff;
  border-left: 1vw solid var(--color-tint);
}
</style>
