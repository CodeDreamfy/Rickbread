<template>
  <div class="reser-setting">
    <transition name="fade">
      <div class="mask-layer-wrapper reser-layer" v-show="container != 0"  @touchend.self="hideLayer($event)">
        <div class="setting-container-layer" v-show="container == 1">
          <div class="setting-layer-titile">预约设置</div>
          <div class="setting-layer-container">
            <!--<time-pick></time-pick>-->
            <mt-picker class="mtpicker-custom" :slots="slots" @change="onValuesChange" :itemHeight="68"></mt-picker>
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
        reservationVal: [0,0],
				menuList: {},
        filterFeatures: {
          1: { //欧式面包
            1: {time:['03','35']},
            2: {time:['03','40']},
            3: {time:['03','45']}
          },
          2: { //法式面包
            1: {time:['03','55']},
            2: {time:['04','00']},
            3: {time:['04','05']}
          },
          3: { //和式面包
            1: {time:['03','45']},
            2: {time:['03','50']},
            3: {time:['03','55']}
          },
          4: { //有机杂粮
            1: {time:['03','20']},
            2: {time:['03','25']},
            3: {time:['03','30']}
          },
          5: { //无筋面包
            1: {time:['02','30']},
            2: {time:['02','35']},
            3: {time:['02','40']}
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
            3: {time:['02','55']}
          },
          9: { //玉米面包
            1: {time:['03','35']},
            2: {time:['03','40']},
            3: {time:['03','45']}
          },
          10: { //紫米面包
            1: {time:['02','40']},
            2: {time:['02','45']},
            3: {time:['02','50']}
          },
          11: { //玄米面包
            1: {time:['03','25']},
            2: {time:['03','30']},
            3: {time:['03','35']}
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
            3: {time:['01','20']}
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
            3: {time:['01','30']}
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
            3: {time:['00','33']}
          }
        }
      }
    },
    watch: {
      colorVal () {
        let c = document.querySelector('.ui-range .movetips-color');
        let z = ((this.colorVal-1)/2) * 100 + '%'
        // console.log("change 了",z); //valSpan
         c.style.left = z;
        // this.changeColorTxt()
      },
      weightVal () {
        let c = document.querySelector('.ui-range .movetips-weight');

        let z = ((this.weightVal-1)/2) * 100 + '%'
        // console.log("change 了",z); //valSpan
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
      slots () {
        let hourTimeArr = this.computedArr(0,48);
        let minTimeArr = this.computedArr(0,59);
        return [
          {
            flex: '0 0 10%',
            values: hourTimeArr,
            className: 'slot1',
            textAlign: 'center'
          },{
            divider: true,
            content:'小时',
            className: 'divider-hour'
          }, {
            flex: '0 0 10%',
            values: minTimeArr,
            className: 'solt2',
            textAlign: 'center'
          }, {
            divider: true,
            content: '分钟',
            className: 'divider-min'
          }
        ]
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
      computedArr (min, max) {
        var buffArray = [];
        for(var i= min; buffArray.push(i++) <= max;);
        return buffArray
      },
      showLayer (num) {
        if(num !== 2) {
          this.container = num;
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
      onValuesChange (picker, value) {
        this.reservationVal = picker.getValues();
        console.log('ReservationVal',picker.getValues());
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
          this.sendNotify(...o, ...arr);
        }else {
          this.$store.commit('warnTipShow',true)
          OJS.app.toast("设备只有在待机状态才能预约成功")
          return false
        }
      },
      startDevice () {
        let o = this.getArgument();
        let arr = new Array(11).fill(0);//补充后面11个字节
        if(this._workstatus == 0 && this._errorCode == 0) {
          this.sendNotify(...o, ...arr);
        }else {
          this.$store.commit('warnTipShow',true)
          OJS.app.toast("设备只有在待机状态才能启动成功");
        }
      },
      //获取参数
      getArgument () {
        let obj = {
          color: this.colorVal - 1,
          weight: this.weightVal - 1,
          yhours: this.reservationVal[0],
          yminute: this.reservationVal[1],
          makeTimeHour: this.filterFeatures[this.paramId][this.colorVal].time[0],
          makeTimeMin: this.filterFeatures[this.paramId][this.colorVal].time[1]
        };

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
			}
		},
    mounted () {
      this.colorVal = this._roasted;
      this.weightVal = this._weights;
      //menuList
			this.menuList = menuList[this.$route.params.id];
    }
  }
</script>
