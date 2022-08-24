<!--  -->
<template>
  <div class="check-button" :class="{checked:IsChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name:'CheckButton',
  data () {
    return {
    }
  },
  props:{
    IsChecked:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style  scoped>
.check-button{
  border-radius: 50%;
  width: 6vw;
  height:6vw;
  border: 1px solid #aaa;
}
.checked{
  background-color: pink;
  border: 1px solid rgb(252, 148, 148);
}
.check-button img{
  width: 5vw;
  height: 5vw;
  position: relative;
  top: 0.1vw;
  left: 0.1vw;
}
</style>
