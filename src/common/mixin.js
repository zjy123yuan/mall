import { debounce } from 'common/utils' 
export const itemListenterMixin = {
  data(){
    return{
      ItemListener:null,
    }
  },
  mounted(){
        //监听item中的图片加载
        const refresh = debounce(this.$refs.scroll.refresh,50)
        this.ItemListener=()=>{
          // this.$refs.scroll.refresh()
          refresh()
        }
        this.$bus.$on('itemImgeLoad',this.ItemListener)
    
  }
}