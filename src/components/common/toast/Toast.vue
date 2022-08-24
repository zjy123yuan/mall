<!--  -->
<template>
  <div class="toast" v-show="isshow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name:'Toast',
  data () {
    return {
      message:'',
      isshow:false,
    }
  },
  methods:{
    Show(message='默认文字',duration=1000){
      this.isshow = true;
      this.message =message
      setTimeout(() => {
        this.isshow = false;
        this.message =''
      }, duration);
    }
  }
  // props:{
  //   message:{
  //     type:String,
  //     default(){
  //       return ''
  //     }
  //   },
  //   show:{
  //     type:Boolean,
  //     default:false
  //   }
  // }
}
</script>

<style  scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color:#fff;
  background-color: rgba(0,0,0,0.5);
  width: 60vw;
  height: 10vh;
  text-align: center;
  line-height: 10vh;
  border-radius: 2vw;
  z-index: 10;
}
</style>
