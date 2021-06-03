import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from "../views/Index"
import User from "../views/system/User"
import Role from "../views/system/Role"
import Menu from "../views/system/Menu"
import UserCenter from "../views/UserCenter";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/index',
        name: 'Index',
        component: Index
      },
      {
        path: '/userCenter',
        name: 'UserCenter',
        component: () => import('../views/UserCenter.vue')
      },
      {
        path: '/system/user',
        name: 'SysUser',
        component: User
      },
      {
        path: '/system/role',
        name: 'SysRole',
        component: Role
      },
      {
        path: '/system/menu',
        name: 'SysMenu',
        component: Menu
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
