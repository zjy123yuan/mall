import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const Home = ()=>import('../views/home/Home.vue')
const Cart = ()=>import('../views/cart/Cart.vue')
const Category = ()=>import('../views/category/Category.vue')
const Profile = ()=>import('../views/profile/Profile.vue')
const Detail = ()=>import('../views/detail/Detail.vue')
const routes = [
   // 设置默认首页
   {
    path: '/', 
    //重定向
    redirect: '/home',
    component: Home,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/home', 
    component: Home,
  },
  {
    path: '/cart', 
    component:Cart,
    meta:{
      title:'购物车'
    }
  },
  {
    path: '/category', 
    component: Category,
    meta:{
      title:'分类'
    }
  },
  {
    path: '/profile', 
    component: Profile,
    meta:{
      title:'我的'
    }
  },
  {
    path: '/detail', 
    component: Detail,
    meta:{
      title:'商品详情'
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//前置守卫(guard)，在路由跳转前
router.beforeEach((to,from,next)=>{
  //从from跳转到to
  if(to.matched[0].meta.title){
    document.title = to.matched[0].meta.title
  }
  //必须调用next函数，不然无法跳转
  next()
})

export default router
