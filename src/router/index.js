import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import Cartview from '../views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
     {
      path: '/product/:id',
      name: 'product',
      component: ProductView,
      props: true,
    },
    {
      path: '/cart/:id',
      name: 'cart',
      component: Cartview,
      props: true,
    },
  ]
})

export default router
