<template>
  <div class="navigation">
    <a href="javascript:;" @touchstart="activeChange(1)" :class="{ active: isActive == 1 }">
      <span class="nav-icon"><i class="iconfont icon-index"></i></span>
      <span>{{ text1 }}</span>
    </a>
    <a href="javascript:;" @touchstart="activeChange(2)" :class="{ active: isActive == 2 }">
      <span class="nav-icon"><i class="iconfont icon-menu"></i></span>
      <span>{{ text2 }}</span>
    </a>
  </div>
</template>
<script>
  export default {
    name : 'navigation',
    data () {
      return {
        isActive: 1,
        text1: '主页',
        text2: '菜单'
      }
    },
    methods: {
      activeChange(num) {
        this.$store.commit('changeIntroState', num)
        this.isActive = num;
      }
    }
  }
</script>