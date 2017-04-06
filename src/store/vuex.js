import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    introState: 2
  },
  mutations: {
    changeIntroState (state, num) {
      state.introState = num;
    }
  }
})

export default store