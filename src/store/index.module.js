const indexModule = {
  state: {
    loading: {
      loadingState: false, //遮罩
      loadText: '正在载入APP环境'
    }
  },
  mutations: {
    loadingChange (state, {flag, txt}) {
      state.loading.loadingState = flag;
      state.loading.loadText = txt;
    }
  },
  actions: {

  }
}

export default indexModule;