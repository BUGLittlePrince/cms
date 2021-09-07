import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    name: 'main',
    path: '/main',
    component: () => import('@/views/main/main.vue')
  },
  {
    // 当用户输入了不存在的路由页面时候，代替页面
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/main/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

// 导航守卫，判断是否登录，如果已经登录，进入主页
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
