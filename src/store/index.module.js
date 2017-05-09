const indexModule = {
  state: {
    loading: {
      loadingState: true, //遮罩
      loadText: '正在载入APP环境'
    },
    menuState: 1
  },
  mutations: {
    loadingChange (state, {flag, txt}) {
      state.loading.loadingState = flag;
      state.loading.loadText = txt;
    }
  },
  actions: {
    AppReadyStore (context) {
      context.state.loading = {
        loadingState: true,
        loadText: '正在连接设备'
      }
    },
    OJSReadyStore (context) {
      // let status = OJS.device.getSensorData();
      context.state.loading = {
        loadingState: false,
        loadText: '正在连接设备'
      }
    },
    menuChange (context, o) {
      context.state.menuState = o
    }
  }
}

export default indexModule;