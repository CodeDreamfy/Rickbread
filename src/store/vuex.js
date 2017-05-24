import Vue from 'vue'
import Vuex from 'vuex'
import indexModule from './index.module'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    introState: 1,
    warnTips: false, // 显示隐藏
    isAppWork: 'false',
    netWork: false, // 有无网络
    sensorStatus: null,
    workStatus: 0,
    sensor: {},
    errorCode: 0,
    msgTypeCode: 0,
    fuctionStatus: 0,
    color: 2,
    weight: 1
  },
  mutations: {
    changeIntroState (state, num) {
      state.introState = num
    },
    warnTipShow (state, st) {
      state.warnTips = st
    },
    changeIsAppWork (state, st) {
      state.isAppWork = st
    },
    netWorkChange (state, status) {
      state.netWork = (!!status)
    },
    msgType (state, o) {
      state.msgTypeCode = o.MessageType
    },
    changeErrLayer () {

    }
  },
  actions: {
    changeStore ({state, dispatch, commit}, obj) {
      state.netWork = OJS.device.onlineStatus // 网络状态
      // console.log('dispatch OBJ message:',obj);
      // state.workStatus = 2
      if (obj) {
        // console.dir("chufa")
        state.workStatus = obj.WorkStatus
        state.fuctionStatus = obj.FuctionStatus
        state.color = obj.Color
        state.weight = obj.Weight
        dispatch('errorOverlay', obj.Error)
        state.sensor = obj
        dispatch('menuChange', obj.WFID)
        dispatch('workTime')
        commit('msgType', obj)
      }
    },
    errorOverlay ({ state }, errCode) {
      // console.info(errCode)
      state.errorCode = errCode
      if (errCode !== 0) {
        state.warnTips = true
      } else {
        state.warnTips = false
      }
    }
  },
  getters: {
    roasted: (state) => {
      console.log(state.color)
      return state.color + 1
    },
    weights: (state) => {
      console.log(state.weight)
      return state.weight + 1
    },
    warningState: ({errorCode, warnTips}) => {
      let aErr = ['设备正常', '温度过高', '温度过低', '温度传感器开路', '温度传感器短路']
      let o = {
        state: false,
        msg: '正常'
      }
      if (errorCode !== 0) {
        warnTips = true
        o = {
          state: true,
          msg: aErr[errorCode]
        }
      }
      return o
    },
    msgType: ({msgTypeCode}) => {
      let aMsgType = ['无提醒', '投果料提醒', '完成提醒', '投酵母提醒']
      return {
        msg: aMsgType[msgTypeCode],
        code: msgTypeCode
      }
    },
    isPause: ({fuctionStatus}) => {
      // console.log(fuctionStatus);
      return !(((fuctionStatus & 0x2) >> 1))
    }
  },
  modules: {
    indexModule
  }
})

export default store
