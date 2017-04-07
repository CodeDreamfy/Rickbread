<template>
  <div class="menu-wrap">
    <div class="menu-tab">
      <a href="javascript:;" :class="{active: active == 1}" @touchstart="switchTab(1)" >面包</a>
      <a href="javascript:;" :class="{active: active == 2}" @touchstart="switchTab(2)" >米包</a>
      <a href="javascript:;" :class="{active: active == 3}" @touchstart="switchTab(3)" >其他美食</a>
      <a href="javascript:;" :class="{active: active == 4}" @touchstart="switchTab(4)" >常用功能</a>
    </div>
    <div class="menu-tab-content">
      <transition name="menu-tab-fade">
        <div class="menu-tab-item" v-show="active == 1">
          <a href="javascript:;"><i class="iconfont icon-european"></i>欧式/柔软</a>
          <a href="javascript:;"><i class="iconfont icon-noGlutenBread"></i>无筋面包</a>
          <a href="javascript:;"><i class="iconfont icon-french"></i>法式面包</a>
          <a href="javascript:;"><i class="iconfont icon-windBread"></i>和风/英式面包</a>
          <a href="javascript:;"><i class="iconfont icon-organicGrainsBread"></i>有机杂粮</a>
          <a href="javascript:;"><i class="iconfont icon-fast"></i>快速面包</a>
        </div>
      </transition>
      <transition name="menu-tab-fade">
        <div class="menu-tab-item" v-show="active == 2">
          <a href="javascript:;"><i class="iconfont icon-ricebread"></i>米饭面包</a>
          <a href="javascript:;"><i class="iconfont icon-purpleRiceBread"></i>紫米面包</a>
          <a href="javascript:;"><i class="iconfont icon-cornBread"></i>玉米面包</a>
          <a href="javascript:;"><i class="iconfont icon-mysteriousRiceBread"></i>玄米面包</a>
        </div>
      </transition>
      <transition name="menu-tab-fade">
        <div class="menu-tab-item" v-show="active == 3">
          <a href="javascript:;"><i class="iconfont icon-westernCake"></i>西式蛋糕</a>
          <a href="javascript:;"><i class="iconfont icon-european-dessert
"></i>欧式甜点</a>
          <a href="javascript:;"><i class="iconfont icon-flossing"></i>肉松</a>
          <a href="javascript:;"><i class="iconfont icon-babaoRice"></i>八宝米粥</a>
          <a href="javascript:;"><i class="iconfont icon-fancyjam"></i>花式果酱</a>
          <a href="javascript:;"><i class="iconfont icon-rickcake"></i>年糕/糯米团</a>
          <a href="javascript:;"><i class="iconfont icon-yogurt"></i>酸奶</a>
          <a href="javascript:;"><i class="iconfont icon-lowRiceWine"></i>低温发酵/米酒</a>
        </div>
      </transition>
      <transition name="menu-tab-fade">
        <div class="menu-tab-item" v-show="active == 4">
          <a href="javascript:;"><i class="iconfont icon-selfProgramming"></i>自编程</a>
          <a href="javascript:;"><i class="iconfont icon-IMIX"></i>Imix</a>
          <a href="javascript:;"><i class="iconfont icon-andface"></i>和面</a>
          <a href="javascript:;"><i class="iconfont icon-dough"></i>生面团</a>
          <a href="javascript:;"><i class="iconfont icon-customAndFace"></i>自定义和面</a>
          <a href="javascript:;"><i class="iconfont icon-ferment"></i>发酵</a>
          <a href="javascript:;"><i class="iconfont icon-thaw"></i>解冻</a>
          <a href="javascript:;"><i class="iconfont icon-stirFlick"></i>翻炒</a>
          <a href="javascript:;"><i class="iconfont icon-barbecue"></i>烧烤/炖/煮</a>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        active: 1
      }
    },
    methods: {
      switchTab (arg) {
        this.active = arg;
      }
    }
  }
</script>