<!--  -->
<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name:'Tabbar',
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
  
  #tab-bar {
    /* 使用弹性盒 */
    display: flex;
    /* 开启固定定位 */
    position: fixed;
    /* 设置元素位置 */
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow:0 -1px 1px rgba(0.5, 0.5, 0.5, 0.1);
  }
</style>
