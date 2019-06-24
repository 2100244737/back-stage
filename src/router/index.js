import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
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
      path: '/adminUser',
      name: 'adminUser',
      meta: {
        title: '管理员管理',
        icon: 'icon-gerenzhongxin2'
      },
      component: () => import('@/views/Layout'),
      redirect: '/adminUser/list',
      children: [
        {
          path: 'index',
          name: 'index',
          meta: {
            title: '欢迎页',
            icon: 'icon-huanyingye'
          },
          component: () => import('@/views/wellCome')
        },
        {
          path: 'list',
          name: 'list',
          meta: {
            title: '管理员列表',
            icon: 'icon-iconfonticonliebiao1'
          },
          component: () => import('@/views/adimUser')
        },
        {
          path: 'addUser',
          name: 'addUser',
          meta: {
            title: '添加管理员',
            icon: 'icon-tianjia'
          },
          component: () => import('@/views/addAdminUser')
        }
      ]
    },
    {
      path: '/repairRecord',
      name: 'repairRecord',
      meta: {
        title: '维修记录',
        icon: 'icon-weixiu'
      },
      component: () => import('@/views/Layout'),
      children: [
        {
          path: 'allRepair',
          name: 'allRepair',
          meta: {
            title: '所有维修记录',
            icon: 'icon-iconfonticonliebiao1'
          },
          component: () => import('@/views/repairRecord')
        }
      ]
    }
  ]
})
export default router
