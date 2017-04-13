<template>
  <div class="diycode-wrapper">
    <div class="mask-layer-wrapper diycode-layer" v-show="container"  @touchend.self.prevent="hideLayer($event)">
        <div class="setting-container-layer" v-if="buffData.type=='yuyue'">
          <div class="setting-layer-titile">{{buffData.name}}</div>
          <div class="setting-layer-container">
            <time-pick></time-pick>
          </div>
        </div>
        <div class="setting-container-layer" v-else="typeof(buffData.type) == 'number' ">
          <div class="setting-layer-titile">{{buffData.name}}</div>
          <div class="setting-layer-container">
            <div class="setting-color setting-com" v-show="buffData.type == 1">
              <span class="valtxt">浅</span>
              <div class="slidebar-wrap ui-range">
                <input type="range" class=""  :min="colorPick.min" :step="colorPick.step" :value="vauleData[buffData.buffname] | filterValue" max=''>
              </div>
              <span class="valtxt">深</span>
            </div>
             <div class="setting-weight setting-com" v-show="buffData.type == 2">
              <span class="valtxt">0</span>
              <div class="slidebar-wrap ui-range">
                <input type="range" class="" min="0" step="1" max='30' value="10">
              </div>
              <span class="valtxt">30</span>
            </div>
          </div>
        </div>
        <div class="setting-container-layer" v-show="container == 3">
          <div class="setting-layer-titile">拌面1</div>
          <div class="setting-layer-container">
           
          </div>
        </div>
      </div>
    </transition>
    <div class="block-list">
      <div class="block-list-item" @touchend.self="showLayer('烤色',1,'kaose')">
        <span class="name"><i class="iconfont icon-roasted"></i>烤色</span>
        <span class="value">中色</span>
      </div>
      <div class="block-list-item" @touchend.self="showLayer('拌面1',2,'banmian1')">
        <span class="name"><i class="iconfont icon-noodles"></i>拌面1</span>
        <span class="value">10分钟</span>
      </div>
      <div class="block-list-item" @touchend.self="showLayer('醒面1',3,'xingmian1')">
        <span class="name"><i class="iconfont icon-wekeUp"></i>醒面1</span>
        <span class="value">5分钟</span>
      </div>
      <div class="block-list-item">
        <span class="name"><i class="iconfont icon-stir"></i>搅拌2</span>
        <span class="value">10分钟</span>
      </div>
      <div class="block-list-item">
        <span class="name"><i class="iconfont icon-wekeUp"></i>醒面2</span>
        <span class="value">10分钟</span>
      </div>
      <div class="block-list-item">
        <span class="name"><i class="iconfont icon-ferment"></i>发酵1</span>
        <span class="value">10分钟</span>
      </div>
      <div class="block-list-item">
        <span class="name"><i class="iconfont icon-bake"></i>烘烤</span>
        <span class="value">10分钟</span>
      </div>
      <div class="diycode-btnwrap btnwrap-common">
        <a href="javascript:;" class="btnwrap" @touchend.self.prevent="showLayer(9)">
          <i class="iconfont icon-reservation"></i>
          <p>预约</p>
        </a>
        <a href="javascript:;" class="start-btn btnwrap">
          <i class="iconfont icon-start"></i>
          <p>启动</p>
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
        container: false,
        buffData: {},
        cookieData:[],
        vauleData:[],
        colorPick: {
          min: 1,
          max: 3,
          value: 2,
          step: 1
        },
        timePick: {
          min: 0,
          max: 30,
          value: 15,
          step: 1
        }
      }
    },
    methods: {
      showLayer (name,type,buffname) {
        this.buffData = {
          name: name,
          type: type
        }
        this.cookieData.push(buffname)
        this.container = true;
      },
      hideLayer ($) {
        var elem =  $.target.className;
        if(elem.indexOf('diycode-layer')){
          console.log("kk")
          this.container = 0;
        }
      }
    },
    filters: {
      filtercolorValue (value) {
        if(!value) return 
      }
    },
    components: {
      timePick
    }
  }
</script>
