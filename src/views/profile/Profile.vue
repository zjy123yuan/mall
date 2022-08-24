<!--  -->
<template>
  <div>
    <navbar class="profile_nav"><div slot="center">我的</div></navbar>
    
  </div>
</template>

<script>
import Navbar from '@/components/common/navbar/Navbar.vue';
export default {
  name:'prfile',
  data () {
    return {
    }
  },
  components:{
    Navbar,
  }
}
</script>

<style  scoped>
.profile_nav{
    background-color: var(--color-tint);
  color: #fff;
}
</style>
