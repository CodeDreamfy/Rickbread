// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/vuex'

import { Picker } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Picker.name, Picker)

// 是否显示生产环境备注
Vue.config.productionTip = false

let SensorUtils = {}

// Vue.Plugs

SensorUtils.install = function (Vue) {
  Vue.prototype.notifyFactory = function () {
    if (arguments.length === 0) return false
    console.info(...arguments)
    let arguArr = Array.call(null, ...arguments).slice(0)
    arguArr.unshift(0x01)
    let length = arguArr.length + 1
    var args = []
    let verify = Array.call(null, ...arguArr, length).reduce((a, c, i) => {
      args.push('0x' + arguArr[i - 1])
      return a + c
    })
    verify = ((~verify + 1) & 0xff).toString(16)
    console.info(...args)
    return {
      'noti': ['0x55', '0x' + length, ...args, '0x' + verify]
    }
  },
  Vue.prototype.checkSensor = function (arg) {
    if (!arg) return false
    let arr = []
    arg.split('').reduce(function (accumulator, currentValue, currentIndex, array) {
      if (currentIndex % 2 !== 0) {
        // console.log(accumulator, currentValue, 'Index：',currentIndex)
        let to = accumulator + '' + currentValue
        arr.push(parseInt(to, 16))
      }
      return currentValue
    })
    return arr
  },
  Vue.prototype.sendNotify = function () {
    console.info('Send info notify')
    let args, o, notiResult
    args = Array.call([], ...arguments).slice(0)
    o = this.notifyFactory(...args).noti
    notiResult = OJS.device.sendNotify({
      'noti': String.fromCharCode(...o)
    }, function () {}, function () {
      OJS.app.toast('命令已下发')
    })

    if (!notiResult) {
      OJS.app.toast('命令发送失败，无法连接到服务器')
    }
  }
}

Vue.use(SensorUtils)

/* eslint-disable no-new */
new Vue({
  store,
  router: router(store),
  template: '<App/>',
  components: { App }
}).$mount('#app')
