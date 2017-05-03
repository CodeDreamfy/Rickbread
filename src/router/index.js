import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import reserSetting from '@/components/reser-setting'
import diyCode from '@/pages/diycode'

Vue.use(Router)


let routes = [
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


function configRouter(store){

  let router = new Router({
    // mode: 'history',
    routes
  })

  router.beforeEach((to, from, next) => {
    OJS.bindAppReady(function(){
      console.info('BindAppReady');
      OJS.app.toast("已经可以调用app的api了");
      store.dispatch('AppReadyStore');
      OJS.bindReady(function(){
        console.info('bindReady', OJS.device.id, OJS.device.getSensorData());
        store.dispatch('OJSReadyStore');
        OJS.device.bindPushData({
          'deviceStatusChange': function(data){
            store.dispatch('changeStore',data)
          }
        })
      })
    })
    // store.dispatch('AppReadyStore')
    next()
  })


  return router
}


export default configRouter