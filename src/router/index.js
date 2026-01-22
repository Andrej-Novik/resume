import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/routes/HomePage.vue')
  }
]

const router = createRouter({
  // GitHub Pages doesn't support SPA history routing without extra 404 rewrites.
  // Hash history works reliably on static hosting.
  history: createWebHashHistory(),
  routes
})

export default router
