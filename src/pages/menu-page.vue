<template>
  <div class="menu-page">
    <div class="block-common">
      <div class="block-row-center">
        <a href="javascript:;" class="clound">
          <span class="clound-icon"></span>
          <span>云食谱</span>
        </a>
        <a href="javascript:;" class="repice">
          <span class="repice-icon"></span>
          <span>我的食谱</span>
        </a>
      </div>
    </div>
    <div class="block-common block-menu-tab">
      <menu-tab></menu-tab>
    </div>
  </div>
</template>

<script>
  import menuTab from '@/components/menu-tab'
  export default {
    components: {
      menuTab
    }
  }
</script>