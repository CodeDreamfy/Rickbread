import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    introState: 1,
    warnTips: false,
    warningState: {
      state: true,
      msg: '请先配置菜单！'
    }
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
    }
  }
})

export default store