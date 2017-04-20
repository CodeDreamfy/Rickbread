<template>
  <div id="app">
  123
    <div class="warning-tips" v-show="warnTips">
      <div class="tipstext">
        <i class="iconfont icon-tips"></i>{{warningState.msg}}
      </div>
      <a href="javascript:;" class="close" @click="closeTips">&#10005;</a>
    </div>
    <router-view></router-view>
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
    }
  },
  methods: {
    closeTips () {
      this.$store.commit('warnTipShow',false)
    }
  },
  mounted () {
    if(this.$store.state.warningState.state) {
      this.$store.commit('warnTipShow',true)
    }
    
  }
}
</script>

<style lang="less">
@import './css/main.less';
</style>
