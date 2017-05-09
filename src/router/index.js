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
        console.info('bindReady', OJS.device.id);
        store.dispatch('OJSReadyStore');
        //0x55 包长度  0x01 校验
        //String.fromCharCode(0x55,0x03,0x01,0x01,0xFB)
        //主动发送请求设备当前状态
        var rs = OJS.device.sendNotify({
          'noti': String.fromCharCode(0x55,0x03,0x01,0x01,0xFB)
        }, function(){
          console.info("命令已下发")
        }, function(){
          console.log("设备已收到命令")
        })
        if(!rs){
          console.error("命令发送失败，无法连接到服务器")
        }
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