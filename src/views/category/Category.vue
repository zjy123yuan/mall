<!--  -->
<template>
  <div>
    <h1>分类</h1>
    <div class="wrapper" refs="aaaa">
      <ul class="content"> 
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
  </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'


export default {
  name:'Category',
  data(){
    return{
      scroll
    }
  },
  created(){
    
  },
  mounted(){
    this.scroll = new BScroll(document.querySelector('.wrapper'),{
      //0和1不监听，2监听手指滑动，3监听惯性
      probeType:3,
      //上拉加载更多
      pullUpLoad:true,
    })
    //监听滚动事件
    this.scroll.on('scroll',(position)=>{

    })
    //上拉加载更多
    this.scroll.on('pullingUp',()=>{

    })
  }
}
</script>

<style  scoped>

</style>
