import Vue from 'vue'
import Router from 'vue-router'
import cart from '@/views/cart'
import indexHome from '@/views/indexHome'
import homePage from '@/views/homePage'

Vue.use(Router)

let router = [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }]

export default new Router({
  routes: router,
  linkActiveClass: 'active'
})
