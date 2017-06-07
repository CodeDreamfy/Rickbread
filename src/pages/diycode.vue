<template>
  <div class="diycode-wrapper">
    <div class="mask-layer-wrapper diycode-layer" v-show="container"  @touchend.self.prevent="hideLayer($event)">
        <div class="setting-container-layer" v-if="isType == 'yuyue' ">
          <div class="setting-layer-titile">预约时间</div>
          <div class="setting-layer-container">
            <mt-picker class="mtpicker-custom" :slots="yuyueSlots" @change="onValuesChange" :itemHeight="68"></mt-picker>
            <div class="ui-btn primary"><a href="javascript:;" @touchend="reservation" class="btn">启动</a></div>
          </div>
        </div>
        <div class="setting-container-layer" v-show=" typeof isType == 'number' ">
          <div class="setting-layer-titile">{{typeTitleArr[isType]}}</div>
          <div class="setting-layer-container">
            <div class="setting-color setting-com" v-show="isType == 0">
              <span class="valtxt">浅</span>
              <div class="slidebar-wrap ui-range">
                <input type="range" class="" min=1 step=1 v-model="vals[0]" max=3 >
                <span class="movetips">{{vals[0]}}</span>
              </div>
              <span class="valtxt">深</span>
            </div>
            <div class="setting-weight setting-com" v-show="isType == 1">
              <span class="valtxt">0</span>
              <div class="slidebar-wrap ui-range">
                <input type="range" class="" min=0 step=1 max=30 v-model="vals[1]" >
                <span class="movetips">{{vals[1]}}</span>
              </div>
              <span class="valtxt">30</span>
            </div>
            <div class="setting-weight setting-com" v-show="isType == 2">
              <span class="valtxt">0</span>
              <div class="slidebar-wrap ui-range">
                <input type="range" class="" min=0 step=1 max=30 v-model="vals[2]" >
                <span class="movetips">{{vals[2]}}</span>
              </div>
              <span class="valtxt">30</span>
            </div>
            <div class="setting-weight setting-com" v-show="isType == 3">
              <span class="valtxt">0</span>
              <div class="slidebar-wrap ui-range">
                <input type="range" class="" min=0 step=1 max=30 v-model="vals[3]" >
                <span class="movetips">{{vals[3]}}</span>
              </div>
              <span class="valtxt">30</span>
            </div>
            <div class="setting-weight setting-com" v-show="isType == 4">
              <span class="valtxt">0</span>
              <div class="slidebar-wrap ui-range">
                <input type="range" class="" min=0 step=1 max=30 v-model="vals[4]" >
                <span class="movetips">{{vals[4]}}</span>
              </div>
              <span class="valtxt">30</span>
            </div>
            <div class="setting-weight setting-com" v-show="isType == 5">
              <span class="valtxt">0</span>
              <div class="slidebar-wrap ui-range">
                <input type="range" class="" min=0 step=1 max=25 v-model="vals[5]" >
                <span class="movetips">{{vals[5]}}</span>
              </div>
              <span class="valtxt">25</span>
            </div>
            <div class="setting-weight setting-com" v-show="isType == 6">
              <span class="valtxt">0</span>
              <div class="slidebar-wrap ui-range">
                <input type="range" class="" min=0 step=1 max=60 v-model="vals[6]" >
                <span class="movetips">{{vals[6]}}</span>
              </div>
              <span class="valtxt">60</span>
            </div>
            <div class="setting-weight setting-com" v-show="isType == 7">
              <span class="valtxt">0</span>
              <div class="slidebar-wrap ui-range">
                <input type="range" class="" min=0 step=1 max=60 v-model="vals[7]" >
                <span class="movetips">{{vals[7]}}</span>
              </div>
              <span class="valtxt">60</span>
            </div>
            <div class="setting-weight setting-com" v-show="isType == 8">
              <span class="valtxt">0</span>
              <div class="slidebar-wrap ui-range">
                <input type="range" class="" min=0 step=1 max=60 v-model="vals[8]" >
                <span class="movetips">{{vals[8]}}</span>
              </div>
              <span class="valtxt">60</span>
            </div>
            <div class="setting-weight setting-com" v-show="isType == 9">
              <span class="valtxt">0</span>
              <div class="slidebar-wrap ui-range">
                <input type="range" class="" min=0 step=1 max=80 v-model="vals[9]" >
                <span class="movetips">{{vals[9]}}</span>
              </div>
              <span class="valtxt">80</span>
            </div>
            <div class="setting-weight setting-com" v-show="isType == 10">
              <span class="valtxt">0</span>
              <div class="slidebar-wrap ui-range">
                <input type="range" class="" min=0 step=1 max=60 v-model="vals[10]" >
                <span class="movetips">{{vals[10]}}</span>
              </div>
              <span class="valtxt">60</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="block-list">
      <div class="block-list-item" @touchend="showLayer(0)">
        <span class="name"><i class="iconfont icon-roasted"></i>烤色</span>
        <span class="value">{{vals[0] | filterColor }}</span>
      </div>
      <div class="block-list-item" @touchend="showLayer(1)">
        <span class="name"><i class="iconfont icon-noodles"></i>搅拌1</span>
        <span class="value">{{vals[1]}}分钟</span>
      </div>
      <div class="block-list-item" @touchend="showLayer(2)">
        <span class="name"><i class="iconfont icon-wekeUp"></i>醒面1</span>
        <span class="value">{{vals[2]}}分钟</span>
      </div>
      <div class="block-list-item" @touchend="showLayer(3)">
        <span class="name"><i class="iconfont icon-stir"></i>搅拌2</span>
        <span class="value">{{vals[3]}}分钟</span>
      </div>
      <div class="block-list-item" @touchend="showLayer(4)">
        <span class="name"><i class="iconfont icon-wekeUp"></i>醒面2</span>
        <span class="value">{{vals[4]}}分钟</span>
      </div>
      <div class="block-list-item" @touchend="showLayer(5)">
        <span class="name"><i class="iconfont icon-stir"></i>搅拌3</span>
        <span class="value">{{vals[5]}}分钟</span>
      </div>
      <div class="block-list-item" @touchend="showLayer(6)">
        <span class="name"><i class="iconfont icon-ferment"></i>发酵1</span>
        <span class="value">{{vals[6]}}分钟</span>
      </div>
      <div class="block-list-item" @touchend="showLayer(7)">
        <span class="name"><i class="iconfont icon-ferment"></i>发酵2</span>
        <span class="value">{{vals[7]}}分钟</span>
      </div>
      <div class="block-list-item" @touchend="showLayer(8)">
        <span class="name"><i class="iconfont icon-ferment"></i>发酵3</span>
        <span class="value">{{vals[8]}}分钟</span>
      </div>
      <div class="block-list-item" @touchend="showLayer(9)">
        <span class="name"><i class="iconfont icon-bake"></i>烘烤</span>
        <span class="value">{{vals[9]}}分钟</span>
      </div>
      <div class="block-list-item" @touchend="showLayer(10)">
        <span class="name"><i class="iconfont icon-insulation"></i>保温</span>
        <span class="value">{{vals[10]}}分钟</span>
      </div>
      <div class="diycode-btnwrap btnwrap-common">
        <a href="javascript:;" class="btnwrap" @touchend="showLayer('yuyue')">
          <i class="iconfont icon-reservation"></i>
          <p>预约</p>
        </a>
        <a href="javascript:;" class="start-btn btnwrap" @touchend="startDevice">
          <i class="iconfont icon-start"></i>
          <p>启动</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  // import timePick from '@/components/time-pick'
  export default {
    data () {
      return {
        container: false,
        isType: 1,
        vals: [2,15,3,20,10,0,42,40,0,50,60],
        typeTitleArr: ['烧色','搅拌1','醒面1','搅拌2','醒面2','搅拌3','发酵1','发酵2','发酵3','烘烤','保温'],
        valsMinMax: [[1,3],[0,30],[0,30],[0,30],[0,30],[0,25],[0,60],[0,60],[0,60],[0,80],[0,60]],
        yuyueSlots:[],
        colorPickVal: [],
        lastSlotVal: 4
      }
    },
    watch: {
      vals () {
        let c = document.querySelectorAll('.setting-container-layer .movetips')[this.isType];
        let pick = this.valsMinMax[this.isType];
        let z = ((this.vals[this.isType]-pick[0])/(pick[1]-pick[0])) * 100 + '%'
        c.style.left = z;
        console.log(z)
      }
    },
    computed: {
    },
    methods: {
      movetips () {
        if(this.isType == 'yuyue'){
          return false;
        }
        let c = document.querySelectorAll('.setting-container-layer .movetips')[this.isType];
        let pick = this.valsMinMax[this.isType];
        let z = ((this.vals[this.isType]-pick[0])/(pick[1]-pick[0])) * 100 + '%'
        c.style.left = z;
      },
      onValuesChange (picker, values) {
        // console.log(picker,picker._self.$children)
        // colorPickVal
        console.log(values)
        if(!values[0]){
          values[0] = Object.keys(this.colorPickVal)[0]
        }

				picker.setSlotValues(1, this.colorPickVal[values[0]]);

        if(values[0] != this.lastSlotVal) {
          picker.setSlotValue(1, 0);
          this.lastSlotVal = values[0];
        }
        this.reservaVal = [values[0],values[1]];
        console.log(this.reservaVal)
      },
      showLayer (index) {
        this.container = true;
        this.isType = index;
        this.movetips();
        if(this.isType == 'yuyue'){
          this.$forceUpdate()
          // this.$nextTick(()=>{
            this.slots()
          // })
        }
      },
      hideLayer ($) {
        var elem =  $.target.className;
        if(elem.indexOf('diycode-layer')){
          this.container = false;
        }
      },
      computedArr (min, max) {
        var buffArray = [];
        for(var i= min; buffArray.push(i++) <= max;);
        return buffArray
      },
      yuyueMinTime () {
        //计算预约时间
        var sumArr = this.vals.reduce((a, c, i) => {
          return a + c
        });
        var yuyueMin = sumArr%60;
        var yuyueHour = parseInt(sumArr/60);
        return [yuyueHour, yuyueMin]
      },
      slots () {
        var otime={},n, min;
        var times = this.yuyueMinTime()
        n = this.computedArr(times[0], 15);
        min  = times[1];
        console.log(times,n)
				for(let i=0; i<n.length; i++){
					if(i==0){
						otime[n[0]] = this.computedArr(min,60)
					}else {
						otime[n[i]] = this.computedArr(0,60)
					}
				}
				// var c = this.yuyueTimes;
        var c = otime;
        this.lastSlotVal = Object.keys(c)[0]
        this.colorPickVal = otime;
        // console.log( this.yuyueSlots, this.colorPickVal)
        this.yuyueSlots =  [
          {
            flex: '0 0 10%',
            values: Object.keys(c),
            className: 'slot1',
            textAlign: 'center',
						// defaultIndex: 0,
          },{
            divider: true,
            content:'小时',
            className: 'divider-hour'
          }, {
            flex: '0 0 10%',
            values: Object.values(c)[0],
            className: 'solt2',
            textAlign: 'center',
						// defaultIndex: 0
          }, {
            divider: true,
            content: '分钟',
            className: 'divider-min'
          }
        ]
      },
      reservation () {
        //预约
        if(this._workstatus == 13) {
          OJS.app.toast("设备正在预约中")
          return false
        }
        var yuyueTime = this.yuyueMinTime()

        let o = this.getArgument(yuyueTime);
        if(this._workstatus == 0 && this._errorCode == 0) {
          this.sendNotify(...o);
        }else {
          this.$store.commit('warnTipShow',true)
          OJS.app.toast("设备只有在待机状态才能预约成功")
          return false
        }
      },
      startDevice () {
        let o = this.getArgument();
        if(this._workstatus == 0 && this._errorCode == 0) {
          this.sendNotify(...o);
        }else {
          this.$store.commit('warnTipShow',true)
          OJS.app.toast("设备只有在待机状态才能启动成功");
        }
      },
      //获取参数
      getArgument () {
        let ms = this.vals.slice(1);
        let val = ms.join('-0-').split('-');
        let yuyueHour = arguments[0] ? arguments[0][0] : 0;
        let yuyueMin = arguments[0] ? arguments[0][1] : 0;
        val.unshift(0);
				let obj =  [
          parseInt(20,16),
          this.vals[0], //烤色
          0, //重量
          0, //果料
          0, //保留
          yuyueHour,
          yuyueMin,
          ...val,
          0,0,0,0
				]
        console.info('预约下发参数打印:', ...obj);
        return obj
      }
    },
    filters: {
      filterColor (val) {
        var c;
        switch(+val){
          case 1: c = '浅色'; break;
          case 2: c = '中色'; break;
          case 3: c = '深色'; break;
        }
        return c
      }
    }
  }
</script>
