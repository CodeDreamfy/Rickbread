<template>
  <div class="reser-setting">
    <mask-layer >
      <div class="setting-container-layer" slot="container" >
        <div class="setting-layer-titile">预约设置1</div>
      </div>
      <div class="setting-container-layer"  >
        <div class="setting-layer-titile">预约设置2</div>
      </div>
      <div class="setting-container-layer"  >
        <div class="setting-layer-titile">预约设置3</div>
      </div>
    </mask-layer>
    <div class="reserva-head">
      <div class="round-show-wrap">
        <div class="round-rotate key-animate">
          <a class="round-type" href="javascript:;">
            <i class="iconfont icon-european"></i>
          </a>
        </div>
        <div class="round-showtime">
          <p class="time-txt">03<i>:</i>06</p>
          <p class="type-txt">浅色 1000g</p>
        </div>
      </div>
    </div>
    <div class="reser-block">
      <div class="setting-color setting-com">
        <span class="valtxt">浅</span>
        <div class="slidebar-wrap ui-range">
          <input type="range" class=""  min='1' step="1" value="2" max='3'>
        </div>
        <span class="valtxt">深</span>
      </div>
      <div class="setting-weight setting-com">
        <span class="valtxt">500</span>
        <div class="slidebar-wrap ui-range">
          <input type="range" class="" min="500" step="50" max='1000' value="750">
        </div>
        <span class="valtxt">1000</span>
      </div>
      <div class="reser-btnwrap">
        <a href="javascript:;" class="reserve-btn btnwrap" @touchend="showLayer(1)">
          <i class="iconfont icon-reservation"></i>
          <p>预约</p>
        </a>
        <a href="javascript:;" class="start-btn btnwrap">
          <i class="iconfont icon-start"></i>
          <p>启动</p>
        </a>
        <a href="javascript:;" class="formula-btn btnwrap">
          <i class="iconfont icon-customAndFace"></i>
          <p>配方</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import maskLayer from '@/components/mask-layer'
  export default {
    data () {
      return {
        container: null
      }
    },
    methods: {
      showLayer (num) {
        this.container = num;
        console.log(this.isState)
      },
      changeMasklayer () {
        console.log("assa")
        //this.container = true;
      }
    },
    components: {
      maskLayer
    }
  }
</script>
