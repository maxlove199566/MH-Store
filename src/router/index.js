import Vue from 'vue'
import Router from 'vue-router'


import Dashboard from '@/components/Dashboard'
import Login from '@/components/pages/Login'
import Products from '@/components/pages/Products'
import CustomerOrders from '@/components/pages/CustomerOrders'
import CustomerCheckout from '@/components/pages/CustomerCheckout'
import categories from '@/components/pages/categories'
import Checkout from '@/components/pages/Checkout'

import Home from '@/components/views/Home'
import Comfirm from '@/components/views/comfirm'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      redirect:'/'
    },
    {
      path:'/',
      name:'Home',
      component:Home,
    },
    {
      path:'/categories',
      name:'Categories',
      component:categories,
    },
    {
      path:'/checkout',
      name:'Checkout',
      component:Checkout,
    },
    {
      path:'/comfirm/:orderId',
      name:'Comfirm',
      component:Comfirm,
    },
    {
      path:'/login',
      name:'Login',
      component:Login,
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path:'products',
          name:'Products',
          component:Products,
          meta: { requiresAuth: true }
        },
      ]
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path:'customer_orders',
          name:'CustomerOrders',
          component:CustomerOrders,
        },
        {
          path:'customer_checkout/:orderId',
          name:'CustomerCheckout',
          component:CustomerCheckout,
        },
      ]
    }
  ]
})
