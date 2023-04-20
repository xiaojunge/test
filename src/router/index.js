import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/wxLogin',
    name: 'wxLogin',
    component: () => import( '../views/Login/wxLogin.vue')
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import( '../views/reg.vue')
  },
  {
    path: '/regDetails',
    name: 'regDetails',
    component: () => import( '../views/regContent/regDetail.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
