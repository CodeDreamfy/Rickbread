const indexModule = {
  state: {
    loading: {
      loadingState: false, // 遮罩
      loadText: '正在载入APP环境'
    },
    menuState: 1,
    workTime: '--------'
  },
  mutations: {
    loadingChange ({loading}, {flag, txt}) {
      loading.loadingState = flag
      loading.loadText = txt
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
    },
    workTime ({ state, commit, rootState }) {
      let c
      let arr = []
      c = rootState.sensor.WorkTime
      c.split('').reduce(function (accumulator, currentValue, currentIndex, array) {
        if (currentIndex % 2 !== 0) {
          // console.log(accumulator, currentValue, 'Index：',currentIndex)
          let to = accumulator + '' + currentValue
          arr.push(parseInt(to, 16))
        }
        return currentValue
      })
      // console.log(arr)
      state.workTime = arr
    }
  }
}

export default indexModule
