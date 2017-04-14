<template>
  <div class="diycode-wrapper">
    <div class="mask-layer-wrapper diycode-layer" v-show="container"  @touchend.self.prevent="hideLayer($event)">
        <div class="setting-container-layer" v-if="buffData.type==3">
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
                <input type="range" class="" :min="colorPick.min" :step="colorPick.step"    v-model="vals[buffData.index]" :max='colorPick.max' >
              </div>
              <span class="valtxt">深</span>
            </div>
             <div class="setting-weight setting-com" v-show="buffData.type == 2">
              <span class="valtxt">0</span>
              <div class="slidebar-wrap ui-range">
                <input type="range" class="" :min="timePick.min" :step="timePick.step" :max='timePick.max' v-model="vals[buffData.index]" >
              </div>
              <span class="valtxt">30</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="block-list">
      <div class="block-list-item" @touchend="showLayer('烤色',1,0)">
        <span class="name"><i class="iconfont icon-roasted"></i>烤色</span>
        <span class="value">{{vals[0] | filterColor }}</span>
      </div>
      <div class="block-list-item" @touchend="showLayer('拌面1',2,1)">
        <span class="name"><i class="iconfont icon-noodles"></i>拌面1</span>
        <span class="value">{{vals[1]}}分钟</span>
      </div>
      <div class="block-list-item" @touchend="showLayer('醒面1',2,2)">
        <span class="name"><i class="iconfont icon-wekeUp"></i>醒面1</span>
        <span class="value">{{vals[2]}}分钟</span>
      </div>
      <div class="block-list-item" @touchend="showLayer('搅拌2',2,3)">
        <span class="name"><i class="iconfont icon-stir"></i>搅拌2</span>
        <span class="value">{{vals[3]}}分钟</span>
      </div>
      <div class="block-list-item" @touchend="showLayer('醒面2',2,4)">
        <span class="name"><i class="iconfont icon-wekeUp"></i>醒面2</span>
        <span class="value">{{vals[4]}}分钟</span>
      </div>
      <div class="block-list-item" @touchend="showLayer('发酵1',2,5)">
        <span class="name"><i class="iconfont icon-ferment"></i>发酵1</span>
        <span class="value">{{vals[5]}}分钟</span>
      </div>
      <div class="block-list-item" @touchend="showLayer('烘烤',2,6)">
        <span class="name"><i class="iconfont icon-bake"></i>烘烤</span>
        <span class="value">{{vals[6]}}分钟</span>
      </div>
      <div class="diycode-btnwrap btnwrap-common">
        <a href="javascript:;" class="btnwrap" @touchend.self.prevent="showLayer('预约',3,'yuyue')">
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
        },
        vals: [2,15,15,15,15,15,15]
      }
    },
    watch: {
      vals () {
        
      }
    },
    computed: {
      
    },
    methods: {
      showLayer (name,type,index) {
       this.buffData = {
         name: name,
         type: type,
         index: index
       }
       this.container = true;
       if(type == 3) {
         return true;
       }
      },
      hideLayer ($) {
        var elem =  $.target.className;
        if(elem.indexOf('diycode-layer')){
          
          this.container = false;
        }
        // console.log(this.)
      },
      inputChange (e) {
        // console.log(e.target.value)
        this.valueData[this.cookieData.indexOf(this.buffData.buffname)] = e.target.value
      //  this.valueData[index]
      }
    },
    filters: {
      filterColor (val) {
        var c;
        console.log('filterColor - c',c)
        switch(val){
          case 1: c = '浅色'; break;
          case 2: c = '中色'; break;
          case 3: c = '深色'; break;
        }
        console.log('filterColor',val,c);
        return c
      }
    },
    components: {
      timePick
    }
  }
</script>
