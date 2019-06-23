import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      meta: {
        title: '首页'
      },
      hidden: true
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录页'
      },
      component: () => import('@/views/Login'),
      hidden: true
    },
    {
      path: '/layout',
      name: 'layout',
      meta: {
        title: '用户管理'
      },
      component: () => import('@/views/Layout'),
      children: [
        {
          path: 'index',
          name: 'index',
          meta: {
            title: '欢迎页'
          },
          component: () => import('@/views/wellCome')
        },
        {
          path: 'adminUser',
          name: 'adminUser',
          meta: {
            title: '管理员管理'
          },
          component: () => import('@/views/adimUser')
        }
      ]
    }
  ]
})
export default router
