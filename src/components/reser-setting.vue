<template>
  <div class="reser-setting">
    <transition name="fade">
      <div class="mask-layer-wrapper reser-layer" v-show="container != 0"  @touchend.self="hideLayer($event)">
        <div class="setting-container-layer" v-show="container == 1">
          <div class="setting-layer-titile">预约设置</div>
          <div class="setting-layer-container">
            <!--<mt-picker :slots="slots" class="mtpicker-custom"></mt-picker>-->
            <time-pick></time-pick>
          </div>
        </div>
        <div class="setting-container-layer" v-show="container == 2">
          <div class="setting-layer-titile">配方设置</div>
          <div class="setting-layer-container">
            <table class="table-list" >
              <tr>
                <td>鸡蛋（轻微搅拌）3个</td>
                <td>熟米饭 1+3/4杯</td>
              </tr>
              <tr>
                <td>糖 1/8杯</td>
                <td>葡萄干 1/8杯</td>
              </tr>
              <tr>
                <td>香草精 1小勺</td>
                <td>肉桂 1小勺</td>
              </tr>
              <tfoot>
                <tr>
                  <td colspan="2"><i class="iconfont icon-tips"></i>提示：鸡蛋需要搅拌均匀！</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </transition>
    
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
      <div class="btnwrap-common">
        <a href="javascript:;" class="reserve-btn btnwrap" @touchend="showLayer(1)">
          <i class="iconfont icon-reservation"></i>
          <p>预约</p>
        </a>
        <a href="javascript:;" class="start-btn btnwrap">
          <i class="iconfont icon-start"></i>
          <p>启动</p>
        </a>
        <a href="javascript:;" class="formula-btn btnwrap" @touchend="showLayer(2)">
          <i class="iconfont icon-customAndFace"></i>
          <p>配方</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import timePick from '@/components/time-pick'

  export default {
    data () {
      return {
        container: 1,
        slots: [
          {
            flex: '0 0 1',
            values: ['1','2','3','4','5','6','7','8'],
            className: 'slot1',
            textAlign: 'right'
          },{
            flex: '0 0 10%',
            divider: true,
            content: '小时',
            className: 'divider1',
            textAlign: 'left'
          },{
            flex: '0 0 1',
            values: ['1','2','3','4','5','6','7','8'],
            className: 'slot2',
            textAlign: 'left'
          },{
            flex: '0 0 10%',
            divider: true,
            content: '分钟',
            className: 'divider2',
            textAlign: 'left'
          }
        ]
      }
    },
    methods: {
      computedArr (min, max) {
        var buffArray = [];
        for(var i= min; buffArray.push(i++) <= max;);
        return buffArray
      },
      showLayer (num) {
        this.container = num;
      },
      hideLayer ($) {
        var elem =  $.target.className;
        if(elem.indexOf('reser-layer')){
          this.container = 0;
        }
      }
    },
    components: {
      timePick
    }
  }
</script>
