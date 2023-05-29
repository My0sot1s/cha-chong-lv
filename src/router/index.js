import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Monitor from '@/views/Monitor'
import Setting from '@/views/Setting'
import Detail from '@/views/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  { name: '茶虫滤', path: '/home', component: Home },
  {
    name: '农地管理',
    path: '/monitor',
    component: Monitor
  },
  {
    name: '实时监控 - 1号地',
    path: '/detail',
    component: Detail
  },
  {
    name: '设置',
    path: '/setting',
    component: Setting
  }
]

const router = new VueRouter({
  routes
})

export default router
