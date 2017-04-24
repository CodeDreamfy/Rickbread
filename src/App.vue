<template>
  <div id="app">
    <div class="warning-tips" v-show="warnTips">
      <div class="tipstext">
        <i class="iconfont icon-tips"></i>{{warningState.msg}}
      </div>
      <a href="javascript:;" class="close" @click="closeTips">&#10005;</a>
    </div>
    <router-view></router-view>
    <div class="mask-layer-wrapper zindex" v-show="loadShow.loadingState">
      <div class="loadText">{{loadShow.loadText}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  computed: {
    warningState () {
      // console.log(this.$store.state.warningState)
      return this.$store.state.warningState;
    },
    warnTips () {
      return this.$store.state.warnTips
    },
    loadShow () {
      return this.$store.state.indexModule.loading
    }
  },
  methods: {
    closeTips () {
      this.$store.commit('warnTipShow',false)
    }
  },
  mounted () {
    //是否存在警告
    // if(this.$store.state.warningState.state) {
    //   this.$store.commit('warnTipShow',true)
    // }
    let _this = this;
    OJS.bindAppReady(function(){
      // _this.loadingState = true;
      // _this.loadText = '正在与设备进入连接';
      _this.$store.commit({
        type: 'loadingChange',
        flag: true,
        txt: '正在与设备进行连接'
      })
      OJS.app.toast("ojs app ready");
      
      OJS.bindReady(function(){
        // _this.readOjs = true;
        OJS.app.toast("ojs ojs ready");
        console.dir(OJS.device.getSensorData())
        //有无网络
        _this.$store.commit({
          type: 'netWorkChange',
          status: (!!OJS.device.onlineStatus)
        })
        //数据状态更新

      })
    })
    
  }
}
</script>

<style lang="less">
@import './css/main.less';
</style>
