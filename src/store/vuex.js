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
    },
    isAppWork:'false'
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
    }
  }
})

export default store