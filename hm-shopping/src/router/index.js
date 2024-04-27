import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页
import Layout from '@/views/layout'
import Home from '@/views/layout/home'
import Cart from '@/views/layout/cart'
import Category from '@/views/layout/category'
import User from '@/views/layout/user'
import store from '@/store'

const Login = () => import('@/views/login')
const Myorder = () => import('@/views/myorder')
const Pay = () => import('@/views/pay')
const Prodetail = () => import('@/views/prodetail')
const Search = () => import('@/views/search/index')
const SearchList = () => import('@/views/search/list')

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: '/home', component: Home },
      { path: '/cart', component: Cart },
      { path: '/category', component: Category },
      { path: '/user', component: User }
    ]
  },
  { path: '/myorder', component: Myorder },
  { path: '/pay', component: Pay },
  // 动态路由传参， 确认将来时能够商品，路由参数带id
  { path: '/prodetail/:id', component: Prodetail },
  { path: '/search', component: Search },
  { path: '/searchlist', component: SearchList }
]

const router = new VueRouter({
  routes
})

// 所有的路由在真正被访问到之前（解析渲染对应组件页面前），都会先经过全局前置守卫
// 只有全局前置守卫放行了， 才会到达对应页面

// 全局前置导航守卫
// to: 到哪里去，到哪里去的完整路由信息对象（路径，参数）
// from: 从哪里来，从哪里来的完整路由信息对象（路径，参数）
// next() :是否放行
// 1. next() 直接放行，放行到to要到的`路径
// 2. next(路径) 进行拦截，拦截到next里面配置的路径

// 定义一个数组，专门用户存放所有需要全选访问的页面
const authUrls = ['/pay', '/myorder']
router.beforeEach((to, from, next) => {
  // 看to.path是否在authUrls中出现过
  if (!authUrls.includes(to.path)) {
    // 非权限页面，直接放行
    next()
    return
  }
  // 是权限页面，需要判断token
  const token = store.getters.token
  console.log(token)
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
