import Vue from 'vue'
import Vuex from 'vuex'
import indexModule from './index.module'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    introState: 1,
    warnTips: false, //显示隐藏
    warningState: {
      state: false, //警告是否存在
      msg: '请先配置菜单！'
    },
    isAppWork:'false',
    netWork: 0, //有无网络
    sensorStatus: null,
    workStatus: 0
  },
  mutations: {
    changeIntroState (state, num) {
      state.introState = num;
    },
    warningTaggle (state, obj) {
      state.warningState = obj;
    },
    warnTipShow (state, st) {
      state.warnTips = st
    },
    changeIsAppWork (state, st) {
      state.isAppWork = st;
    },
    netWorkChange (state, status) {
      state.netWork = status
    }
  },
  actions: {
    changeStore (context, obj) {
      context.state.netWork = OJS.device.onlineStatus //网络状态
      console.log('dispatch OBJ message:',obj); 
      if(obj){
        context.state.workStatus = obj.WorkStatus;
        context.dispatch('menuChange',obj.WFID)
      }
    }
  },
  modules: {
    indexModule
  }
})

export default store