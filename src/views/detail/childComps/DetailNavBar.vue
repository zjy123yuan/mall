<!--  -->
<template>
    <navbar >
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" 
          class="title-item" 
          :class="{active:index===currentIndex}"
          @click="itemClick(index)">
            {{item}}
        </div>
      </div>
    </navbar>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar.vue'
export default {
  name:'DetailNavBar',
  data () {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  components:{
    Navbar
  },
  methods:{
    itemClick(index){
      if(this.currentIndex!=index){
        this.currentIndex=index
        this.$emit('titleClick',index);
      }
    },
    backClick(){
      this.$router.back()
    }

  }
}
</script>

<style  scoped>
.title{
  display: flex; 
  font-size: 3vw;
}
.title-item{
  flex: 1;
}
.active{
  color: var(--color-high-text);
  background-color: rgb(222, 218, 218);
}
.back img{
  margin-top: 1.5vh;
}
</style>
