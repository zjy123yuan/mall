import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const Home = ()=>import('../views/home/Home.vue')
const Cart = ()=>import('../views/cart/Cart.vue')
const Category = ()=>import('../views/category/Category.vue')
const Profile = ()=>import('../views/profile/Profile.vue')
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
    meta:{
      title:'首页'
    }
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

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
