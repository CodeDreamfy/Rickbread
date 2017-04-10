<template>
  <div class="reservation">
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
          <input type="range" class="" title="progress" min='0' step="1" value="40" max='100'>
        </div>
        <span class="valtxt">深</span>
      </div>
      <div class="setting-weight setting-com">
        <span class="valtxt">500</span>
        <div class="slidebar-wrap ui-range">
          <input type="range" class="" title="progress" min='0' step="1" value="40" max='100'>
        </div>
        <span class="valtxt">1000</span>
      </div>
      <div class="reser-btnwrap">
        <a href="javascript:;" class="reserve-btn btnwrap">
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
  export default {
    
  }
</script>
