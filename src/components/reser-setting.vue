<template>
  <div class="reser-setting">
    <transition name="fade">
      <div class="mask-layer-wrapper reser-layer" v-show="container != 0"  @touchend.self="hideLayer($event)">
        <div class="setting-container-layer" v-show="container == 1">
          <div class="setting-layer-titile">预约设置</div>
          <div class="setting-layer-container">
            <!--<time-pick></time-pick>-->
            <mt-picker class="mtpicker-custom" :slots="slots" @change="onValuesChange" :itemHeight="68"></mt-picker>
            <div class="ui-btn primary"><a href="javascript:;" class="btn">启动</a></div>
          </div>
        </div>
        <div class="setting-container-layer" v-show="container == 2">
          <div class="setting-layer-titile">配方设置</div>
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
          <p class="time-txt">{{_workTime[2] | timeFilter}}<i>:</i>{{ _workTime[3] | timeFilter }}</p>
          <p class="type-txt">{{colorText + '色'}} {{weightText}}</p>
        </div>
      </div>
    </div>
    <div class="reser-block">
      <div class="setting-color setting-com">
        <span class="valtxt">浅</span>
        <div class="slidebar-wrap ui-range">
          <input type="range" class="" min='1' step="1" v-model="colorVal" max='3'>
          <span class="movetips movetips-color">{{colorText}}</span>
        </div>
        <span class="valtxt">深</span>
      </div>
      <div class="setting-weight setting-com">
        <span class="valtxt">500</span>
        <div class="slidebar-wrap ui-range">
          <input type="range" class="" min="1" step="1" max='3' v-model="weightVal">
          <span class="movetips movetips-weight">{{weightText}}</span>
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
				menuList: {}
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
        _weights: (state,getters)=>getters.weights
			}),
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
        this.container = num;
      },
      hideLayer ($) {
        var elem =  $.target.className;
        if(elem.indexOf('reser-layer')){
          this.container = 0;
        }
      },
      onValuesChange (picker, value) {
        console.log(value);
        this.reservationVal = value
      },
      reservation () {
        //预约
        if(this._workstatus == 13) {
          OJS.app.toast("设备正在预约中")
          return false
        }
        if(this._workstatus == 0 ) {
          let c = '0x' + this.$route.params.id,
          color = '0x' + this.colorVal -1,
          weight = '0x' + this.weightVal -1,
          yhours = '0x' + this.reservationVal[0],
          yminute = '0x' + this.reservationVal[1];
          this.sendNotify(0x02,0x00,c,color,weight,0x0,0x0,yhours,yminute);
        }else {
          OJS.app.toast("设备只有在待机状态才能预约成功");
        }
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
			this.menuList = menuList[this.$route.params.id];
    }
  }
</script>
