<template>
  <div class="reser-setting">
    <transition name="fade">
      <div class="mask-layer-wrapper reser-layer" v-show="container != 0"  @touchend.self="hideLayer($event)">
        <div class="setting-container-layer" v-show="container == 1">
          <div class="setting-layer-titile">预约设置</div>
          <div class="setting-layer-container">
            <!--<time-pick></time-pick>-->
            <mt-picker class="mtpicker-custom" v-show="colorVal == 1" :slots="slotVal['1']" @change="changePicker" :visible-item-count="5" :itemHeight="68" ></mt-picker>
            <mt-picker class="mtpicker-custom"  v-show="colorVal == 2"  :slots="slotVal['2']" @change="changePicker" :visible-item-count="5" :itemHeight="68" ></mt-picker>
            <mt-picker class="mtpicker-custom"  v-show="colorVal == 3"  :slots="slotVal['3']" @change="changePicker" :visible-item-count="5" :itemHeight="68" ></mt-picker>
            <div class="ui-btn primary"><a href="javascript:;" class="btn" @touchend="reservation">启动</a></div>
          </div>
        </div>
        <div class="setting-container-layer" v-show="container == 2">
          <div class="setting-layer-titile">配方设置</div>
          <template v-if="!!menuList">
            <div class="setting-layer-container peifang" v-for="data in menuList.list">
              <p>{{data.name}}</p>
              <table class="table-list" >
                <template v-if="menuList.type == 1">
                  <template v-for="(tds, key) in data.rows">
                    <tr>
                      <template v-for="(td, tdkey) in tds">
                        <template v-if="Array.isArray(td)">
                          <td v-for="d in td" colspan="1">{{d}}</td>
                        </template>
                        <template v-else>
                          <td colspan="2">{{td}}</td>
                        </template>
                      </template>
                    </tr>
                  </template>
                </template>
                <template v-if="menuList.type == 2">
                  <template v-for="(tds, key) in data.rows">
                    <tr>
                      <template v-if="tds.length == 1">
                        <td style="text-align:left; text-indent: 1em;" :colspan="data.rows[1].length">{{tds[0]}}</td>
                      </template>
                      <template v-else>
                        <td v-for="td in tds" style="width:auto;">{{td}}</td>
                      </template>
                    </tr>
                  </template>
                </template>
                </tfoot>
              </table>
              <p class="footer" v-if="!!data.foot"><i class="iconfont icon-tips"></i>{{data.foot}}</p>
            </div>
          </template>
        </div>
      </div>
    </transition>

    <div class="reserva-head">
      <div class="round-show-wrap">
        <div class="round-rotate" :class="{'key-animate': _workstatus > 1}">
          <a class="round-type" href="javascript:;">
            <i class="iconfont icon-european"></i>
          </a>
        </div>
        <div class="round-showtime" :class="{'round-animate': _workstatus > 1}">
          <p class="time-txt">{{filterFeatures[paramId][colorVal].time[0] || '00'}}<i>:</i>{{ filterFeatures[paramId][colorVal].time[1] || '30'}}</p>
          <p class="type-txt">{{colorText ? colorText +'色' : '无'}} {{weightText ? weightText : ''}}</p>
        </div>
      </div>
    </div>
    <div class="reser-block">
      <template v-if="!filterFeatures[paramId].color">
        <div class="setting-color setting-com">
          <div class="overlay-no"></div>
          <span class="valtxt">浅</span>
          <div class="slidebar-wrap ui-range">
            <input type="range" class="" min='1' step="1" v-model="colorVal" max='3'>
            <span class="movetips movetips-color">{{colorText}}</span>
          </div>
          <span class="valtxt">深</span>
        </div>
      </template>
      <template v-if="!filterFeatures[paramId].weight">
        <div class="setting-weight setting-com">
          <div class="overlay-no"></div>
          <span class="valtxt">500</span>
          <div class="slidebar-wrap ui-range">
            <input type="range" class="" min="1" step="1" max='3' v-model="weightVal">
            <span class="movetips movetips-weight">{{weightText}}</span>
          </div>
          <span class="valtxt">1000</span>
        </div>
      </template>
      <div class="btnwrap-common">
        <a href="javascript:;" class="reserve-btn btnwrap" @touchend="showLayer(1)">
          <i class="iconfont icon-reservation"></i>
          <p>预约</p>
        </a>
        <a href="javascript:;" @touchend="startDevice" class="start-btn btnwrap">
          <i class="iconfont icon-start"></i>
          <p>启动</p>
        </a>
        <a href="javascript:;" class="formula-btn btnwrap" :class="!!menuList ? '' : 'off' " @touchend="showLayer(2)">
          <i class="iconfont icon-customAndFace"></i>
          <p>配方</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import menuList from '@/assets/menu-data'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        container: 0,
        buffData: {},
        weightVal: 2,
        colorVal: 2,
        reservaVal: [0,0],
				menuList: {},
        filterFeatures: {
          1: { //欧式面包
            1: {time:['03','35']},
            2: {time:['03','40']},
            3: {time:['03','45']},
						yuyue: true
          },
          2: { //法式面包
            1: {time:['03','55']},
            2: {time:['04','00']},
            3: {time:['04','05']},
						yuyue: true
          },
          3: { //和式面包
            1: {time:['03','45']},
            2: {time:['03','50']},
            3: {time:['03','55']},
						yuyue: true
          },
          4: { //有机杂粮
            1: {time:['03','20']},
            2: {time:['03','25']},
            3: {time:['03','30']},
						yuyue: true
          },
          5: { //无筋面包
            1: {time:['02','30']},
            2: {time:['02','35']},
            3: {time:['02','40']},
						yuyue: true
          },
          6: { //快速面包
            1: {time:['01','55']},
            2: {time:['02','00']},
            3: {time:['02','05']},
            timeReserve: true
          },
          7: { //西式蛋糕
            weight: 1,
            timeReserve: true,
            1: {time:['01','50']},
            2: {time:['01','50']},
            3: {time:['01','50']}
          },
          8: { //米饭面包
            1: {time:['02','45']},
            2: {time:['02','50']},
            3: {time:['02','55']},
						yuyue: true
          },
          9: { //玉米面包
            1: {time:['03','35']},
            2: {time:['03','40']},
            3: {time:['03','45']},
						yuyue: true
          },
          10: { //紫米面包
            1: {time:['02','40']},
            2: {time:['02','45']},
            3: {time:['02','50']},
						yuyue: true
          },
          11: { //玄米面包
            1: {time:['03','25']},
            2: {time:['03','30']},
            3: {time:['03','35']},
						yuyue: true
          },
          12: { //八宝
            color: 3,
            weight: 1,
            timeReserve: true,
            1: {time:['01','20']},
            2: {time:['01','20']},
            3: {time:['01','20']}
          },
          13: { //年糕
            color: 3,
            weight: 1,
            1: {time:['01','20']},
            2: {time:['01','20']},
            3: {time:['01','20']},
						yuyue: true
          },
          14: { //iMax
            color: 3,
            weight: 1,
            timeReserve: true,
            1: {time:['01','20']},
            2: {time:['01','20']},
            3: {time:['01','20']}
          },
          15: { //生面团
            color: 3,
            weight: 1,
            1: {time:['01','30']},
            2: {time:['01','30']},
            3: {time:['01','30']},
						yuyue: true
          },
          16: { //自定义和面
            color: 3,
            weight: 1,
            timeReserve: true,
            1: {time:['01','13']},
            2: {time:['01','13']},
            3: {time:['01','13']}
          },
          17: { //米酒低温发酵
            color: 3,
            weight: 1,
            timeReserve: true,
            1: {time:['48','00']},
            2: {time:['48','00']},
            3: {time:['48','00']}
          },
          18: { //葡萄酒
            color: 3,
            weight: 1,
            timeReserve: true,
            1: {time:['48','00']},
            2: {time:['48','00']},
            3: {time:['48','00']}
          },
          19: { //酸奶
            color: 3,
            weight: 1,
            timeReserve: true,
            1: {time:['08','00']},
            2: {time:['08','00']},
            3: {time:['08','00']}
          },
          20: { //花式果酱
            color: 3,
            weight: 1,
            timeReserve: true,
            1: {time:['01','20']},
            2: {time:['01','20']},
            3: {time:['01','20']}
          },
          21: { //翻炒
            color: 3,
            weight: 1,
            timeReserve: true,
            1: {time:['00','30']},
            2: {time:['00','30']},
            3: {time:['00','30']}
          },
          23: { //烘烤、炖
            weight: 1,
            timeReserve: true,
            1: {time:['00','30']},
            2: {time:['00','30']},
            3: {time:['00','30']}
          },
          25: { //欧式甜点
            weight: 3,
            timeReserve: true,
            1: {time:['01','40']},
            2: {time:['01','40']},
            3: {time:['01','40']}
          },
          26: { //解冻
            color: 3,
            weight: 1,
            timeReserve: true,
            1: {time:['00','30']},
            2: {time:['00','30']},
            3: {time:['00','30']}
          },
          28: { //发酵
            color: 3,
            weight: 1,
            timeReserve: true,
            1: {time:['02','00']},
            2: {time:['02','00']},
            3: {time:['02','00']}
          },
          29: { //肉松
            color: 3,
            weight: 1,
            timeReserve: true,
            1: {time:['00','45']},
            2: {time:['00','45']},
            3: {time:['00','45']}
          },
          36: { //和面
            weight: 1,
            color: true,
            1: {time:['00','33']},
            2: {time:['00','33']},
            3: {time:['00','33']},
						yuyue: true
          }
        },
        lastSlotVal: 3,
        slotVal: {},
        colorPickVal: {},
        slotPicker: {}
      }
    },
    watch: {
      colorVal (val, old) {
        let c = document.querySelector('.ui-range .movetips-color');
        let z = ((this.colorVal-1)/2) * 100 + '%'
        c.style.left = z;
      },
      weightVal () {
        let c = document.querySelector('.ui-range .movetips-weight');
        let z = ((this.weightVal-1)/2) * 100 + '%'
        c.style.left = z;
      }
    },
    computed: {
      ...mapState({
				_menuState: state=>state.indexModule.menuState,
				_warningState: (state,getters)=>getters.warningState,
				_msgType: (state,getters)=>getters.msgType,
				_workstatus: 'workStatus',
				_workTime: state=>state.indexModule.workTime,
				_network: 'netWork',
				_isPause: (state,getters)=>getters.isPause,
        _roasted: (state,getters)=>getters.roasted,
        _weights: (state,getters)=>getters.weights,
        _errorCode: 'errorCode'
			}),
      paramId () {
        return this.$route.params.id
      },
      colorText () {
        switch (this.colorVal) {
          case 1: return '浅';
          case 2: return '中';
          case 3: return '深';
          case '1': return '浅';
          case '2': return '中';
          case '3': return '深';
          default: return '无'
        }
      },
      weightText () {
        switch (this.weightVal) {
          case 1: return '500g';
          case 2: return '700g';
          case 3: return '1000g';
          case '1': return '500g';
          case '2': return '700g';
          case '3': return '1000g';
          default: return '无'
        }
      }
    },
    methods: {
      getSlotPicker () {
        var c;
        switch(+this.colorVal){
          case 1: c = this.slotVal['0']; break;
          case 2: c = this.slotVal['1']; break;
          case 3: c = this.slotVal['2']; break;
        }
        return c
      },
      getTimePickData () {
        let o = this.filterFeatures[this.paramId];
				let timeArr, otime = {}, n, min;

        if(o.yuyue) {
					n = this.computedArr(+o[this.colorVal].time[0], 15);
          min  = o[this.colorVal].time[1];
				}else {
          return {3: [1,2,3,4],4:[1,3,5,6]}
        }
				for(let i=0; i<n.length; i++){
					if(i==0){
						otime[n[0]] = this.computedArr(min,60)
					}else {
						otime[n[i]] = this.computedArr(0,60)
					}
				}
				return otime
      },
      getSlotArr (val) {
        // console.log('slot',val)
        let o = this.filterFeatures[this.paramId];
				let timeArr, otime = {}, n, min;

        if(o.yuyue) {
					n = this.computedArr(+o[val].time[0], 15);
          min  = o[val].time[1];
				}else {
          return {3: [1,2,3,4],4:[1,3,5,6]}
        }
				for(let i=0; i<n.length; i++){
					if(i==0){
						otime[n[0]] = this.computedArr(min,60)
					}else {
						otime[n[i]] = this.computedArr(0,60)
					}
				}
				// var c = this.yuyueTimes;
        var c = otime;
        this.colorPickVal[val] = otime;
        // console.log(this.colorPickVal)
        this.lastSlotVal = Object.keys(c)[0]
        return [
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
      computedArr (min, max) {
        var buffArray = [];
        for(var i= min,index=0; (buffArray[index++]=min++) < max -1;);
        return buffArray
      },
      lastSlotMethod (arg) {
       this.lastSlotVal = +arg
      },
      showLayer (num) {
        if(num !== 2) {
          this.container = num;
          // this.slotPicker = this.getSlotPicker()
        }else {
          if(this.menuList){
            this.container = num;
          }else {
            return false
          }
        }
      },
      hideLayer ($) {
        var elem =  $.target.className;
        if(elem.indexOf('reser-layer')){
          this.container = 0;
        }
      },
      changePicker (picker, values) {
        var slotArrL = this.colorPickVal[this.colorVal];
        if(!values[0]){
          values[0] = Object.keys(slotArrL)[0]
        }

				picker.setSlotValues(1, slotArrL[values[0]]);

        if(values[0] != this.lastSlotVal) {
          picker.setSlotValue(1, 0);
          this.lastSlotMethod(values[0]);
        }
        this.reservaVal = [values[0],values[1]];
        console.log(this.reservaVal)
      },
      reservation () {
        //预约
        if(this._workstatus == 13) {
          OJS.app.toast("设备正在预约中")
          return false
        }
        let arr = new Array(11).fill(0);//补充后面11个字节
        //如果制作时间不存在直接抛出异常
        if(!this.filterFeatures[this.paramId]){
          throw "filterFeatures不存在"
        }
        let o = this.getArgument();
        if(this._workstatus == 0 && this._errorCode == 0) {
          this.sendNotify({...o}, ...arr);
        }else {
          this.$store.commit('warnTipShow',true)
          OJS.app.toast("设备只有在待机状态才能预约成功")
          return false
        }
      },
      startDevice () {
        let o = this.getArgument();
        let arr = new Array(11).fill(0);//补充后面11个字节
        // if(this._workstatus == 0 && this._errorCode == 0) {
        //   this.sendNotify({...o}, ...arr);
        // }else {
        //   this.$store.commit('warnTipShow',true)
        //   OJS.app.toast("设备只有在待机状态才能启动成功");
        // }
      },
      //获取参数
      getArgument () {
				let obj =  [
					this.colorVal - 1,
					this.weightVal - 1,
					this.reservaVal[0],
					this.reservaVal[1],
					+this.filterFeatures[this.paramId][this.colorVal].time[0],
					+this.filterFeatures[this.paramId][this.colorVal].time[1]
				]
        if(this.filterFeatures.color){
          obj.color = 3
        }
        if(this.filterFeatures.weight){
          obj.weight = 1
        }
        console.info('预约下发参数打印:', ...obj);
        return obj
      }
    },
		filters: {
			timeFilter (val) {
				if(!val) return '';
				if(val == '-') return val+'-';
				return val >10 ? val : '0'+val
			},
      filterPicker (val,index,slotArr) {
        return slotArr[index]
      }
		},
    created () {
      this.slotVal['1'] = this.getSlotArr(1)
      this.slotVal['2'] = this.getSlotArr(2)
      this.slotVal['3'] = this.getSlotArr(3)
    },
    mounted () {
      this.colorVal = this._roasted;
      this.weightVal = this._weights;
      //menuList
			this.menuList = menuList[this.$route.params.id];
      this.slotPicker = this.getSlotPicker()
    }
  }
</script>
