import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import toast from 'components/common/toast'

Vue.config.productionTip = false
//创建全局总线通信对象
Vue.prototype.$bus = new Vue()
//全局弹窗
Vue.use(toast)
//解决移动端300延迟
fastclick.attach(document.body)

//使用图片懒加载
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/placeholder.gif')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
