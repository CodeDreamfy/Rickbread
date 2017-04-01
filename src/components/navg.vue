<template>
  <div class="navigation">
    <a href="javascript:;" :class="{ active: isActive == 1 }">
      <span class="icon"></span>
      <span class="text">{{ text1 }}</span>
    </a>
    <a href="javascript:;" :class="{ active: isActive == 2 }">
      <span class="icon"></span>
      <span class="text">{{ text2 }}</span>
    </a>
  </div>
</template>
<script>
  export default {
    name : 'navigation',
    data () {
      return {
        isActive : 1,
        text1: '主页',
        text2: '菜单'
      }
    }
  }
</script>