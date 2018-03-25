import Vue from 'vue'
import Router from 'vue-router'
import cart from '@/components/cart'
import indexHome from '@/components/indexHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: indexHome
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})
