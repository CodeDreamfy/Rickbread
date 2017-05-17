<template>
  <div id="app">
    <div class="warning-tips" v-show="_warnTips">
      <div class="tipstext">
        <i class="iconfont icon-tips"></i>{{ _warningState.msg }}
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
import { mapState } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState({
      _warnTips: 'warnTips',
      _warningState: (state,getters)=>getters.warningState,
      _loading: state=>state.indexModule.loading
    }),
    loadShow () {
      return this.$store.state.indexModule.loading
    }
  },
  methods: {
    closeTips () {
      this.$store.commit('warnTipShow',false)
    }
  }
}
</script>

<style lang="less">
@import './css/main.less';
</style>
