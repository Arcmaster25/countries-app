import { createRouter, createWebHistory } from 'vue-router'
import Layout from './../views/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
    },
    {
      path: '/russia',
      name: 'russia',
      component: Layout
    },
    {
      path: '/china',
      name: 'china',
      component: Layout
    },
    {
      path: '/qatar',
      name: 'qatar',
      component: Layout
    },
    {
      path: '/belarus',
      name: 'bielorrusia',
      component: Layout
    },
    {
      path: '/turkey',
      name: 'turquia',
      component: Layout
    },
    {
      path: '/united kingdom',
      name: 'reinoUnido',
      component: Layout
    },
  ]
})

export default router
