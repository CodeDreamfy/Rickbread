import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import reserSetting from '@/components/reser-setting'
import diyCode from '@/pages/diycode'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/setting',
      name: 'setting',
      component: reserSetting
    },
    {
      path: '/diyCode',
      name: 'diyCode',
      component: diyCode
    }
  ]
})
