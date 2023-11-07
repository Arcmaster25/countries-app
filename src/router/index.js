import { createRouter, createWebHistory } from 'vue-router'

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
    },
    {
      path: '/china',
      name: 'china',
    },
    {
      path: '/qatar',
      name: 'qatar',
    },
    {
      path: '/belarus',
      name: 'bielorrusia',
    },
    {
      path: '/turkey',
      name: 'turquia',
    },
    {
      path: '/united kingdom',
      name: 'reinoUnido',
    },
  ]
})

export default router
