<template>
  <div class="menu-wrap">
    <div class="menu-tab">
      <a href="javascript:;" :class="{active: active == 1}" @touchstart="switchTab(1)" >面包</a>
      <a href="javascript:;" :class="{active: active == 2}" @touchstart="switchTab(2)" >米包</a>
      <a href="javascript:;" :class="{active: active == 3}" @touchstart="switchTab(3)" >其他美食</a>
      <a href="javascript:;" :class="{active: active == 4}" @touchstart="switchTab(4)" >常用功能</a>
    </div>
    <div class="menu-tab-content"  @touchend="toStep($event)">
      <transition name="menu-tab-fade">
        <div class="menu-tab-item" v-show="active == 1">
          <a href="javascript:;" data-type=1><i class="iconfont icon-european"></i>欧式/柔软</a>
          <a href="javascript:;" data-type=5><i class="iconfont icon-noGlutenBread"></i>无筋面包</a>
          <a href="javascript:;" data-type=2><i class="iconfont icon-french"></i>法式面包</a>
          <a href="javascript:;" data-type=3><i class="iconfont icon-windBread"></i>和风/英式面包</a>
          <a href="javascript:;" data-type=4><i class="iconfont icon-organicGrainsBread"></i>有机杂粮</a>
          <a href="javascript:;" data-type=6><i class="iconfont icon-fast"></i>快速面包</a>
        </div>
      </transition>
      <transition name="menu-tab-fade">
        <div class="menu-tab-item" v-show="active == 2">
          <a href="javascript:;" data-type=8><i class="iconfont icon-ricebread"></i>米饭面包</a>
          <a href="javascript:;" data-type=10><i class="iconfont icon-purpleRiceBread"></i>紫米面包</a>
          <a href="javascript:;" data-type=9><i class="iconfont icon-cornBread"></i>玉米面包</a>
          <a href="javascript:;" data-type=11><i class="iconfont icon-mysteriousRiceBread"></i>玄米面包</a>
        </div>
      </transition>
      <transition name="menu-tab-fade">
        <div class="menu-tab-item" v-show="active == 3">
          <a href="javascript:;" data-type=7><i class="iconfont icon-westernCake"></i>西式蛋糕</a>
          <a href="javascript:;"><i class="iconfont icon-european-dessert
"></i>欧式甜点</a>
          <a href="javascript:;" data-type=29><i class="iconfont icon-flossing"></i>肉松</a>
          <a href="javascript:;" data-type=12><i class="iconfont icon-babaoRice"></i>八宝米粥</a>
          <a href="javascript:;" data-type=20><i class="iconfont icon-fancyjam"></i>花式果酱</a>
          <a href="javascript:;" data-type=15><i class="iconfont icon-rickcake"></i>年糕/糯米团</a>
          <a href="javascript:;" data-type=16><i class="iconfont icon-yogurt"></i>酸奶</a>
          <a href="javascript:;" data-type=17><i class="iconfont icon-lowRiceWine"></i>低温发酵/米酒</a>
        </div>
      </transition>
      <transition name="menu-tab-fade">
        <div class="menu-tab-item" v-show="active == 4">
          <a href="javascript:;" data-type=24><i class="iconfont icon-selfProgramming"></i>自编程</a>
          <a href="javascript:;" data-type=14><i class="iconfont icon-IMIX"></i>Imix</a>
          <a href="javascript:;" data-type=36><i class="iconfont icon-andface"></i>和面</a>
          <a href="javascript:;" data-type=15><i class="iconfont icon-dough"></i>生面团</a>
          <a href="javascript:;" data-type=16><i class="iconfont icon-customAndFace"></i>自定义和面</a>
          <a href="javascript:;" data-type=28><i class="iconfont icon-ferment"></i>发酵</a>
          <a href="javascript:;" data-type=26><i class="iconfont icon-thaw"></i>解冻</a>
          <a href="javascript:;" data-type=21><i class="iconfont icon-stirFlick"></i>翻炒</a>
          <a href="javascript:;" data-type=23><i class="iconfont icon-barbecue"></i>烧烤/炖/煮</a>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        active: 1
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
				_isPause: (state,getters)=>getters.isPause
			})
    },
    methods: {
      switchTab (arg) {
        this.active = arg;
      },
      intoSetting (e) {
        console.log(e.target)
      },
      toSetting (index) {
        // console.log(index)
      },
      toStep ($event) {
        let $elem = $event.target;
        if($elem.tagName == 'I'){
          $elem = $elem.parentElement;
        }
        // console.log(this._workstatus)
        let menuIndex = $elem.getAttribute('data-type');
        if(this._workstatus == 0 || this._menuState == menuIndex || this._workstatus == 13) {
          this.addClass($event)
          console.log(this._workstatus)
					if(menuIndex == 24){
						this.$router.push({name: 'diyCode'})
					}else {
          	this.$router.push({name: 'setting', params: {id: menuIndex}})
					}
        }else {
					
          if(OJS.device.onlineStatus == 1) {
            OJS.app.toast("设备正在进行工作，只能查看当前选中的")
          }else {
            OJS.app.toast("设备不在线")
          }
        }
      },
      addClass ($event) {
        let $elem;
        $('.menu-tab-item > a').map((i,e)=>{
          let sClass = $(e).find('i').attr('class').split(' ');
          if(sClass[1].indexOf('-click') !== -1){
            sClass[1] = sClass[1].slice(0,-6);
          }
          $(e).find('i').get(0).className = 'iconfont '+ sClass[1];
          $(e).animate({'background':'#fff'}, 200, 'ease-out')
        })
        //判断如果是待机状态下就不用添加class
        if(this._workstatus == 0){
          return false
        }
        if(arguments.length == 0) {
          $elem = $('.menu-tab-item > a[data-type="'+ this._menuState +'"]');
        }else {
          $elem = $event.target;
          if($elem.tagName == 'I'){
            $elem = $elem.parentElement;
          }
        }
        // console.log($($elem))
        let $class = $($elem).find('i');
        let arrClassName = $class.attr('class');
        // console.log($elem,$class,arrClassName)
        arrClassName = arrClassName.split(' ');
        if(arrClassName[1].indexOf('-click') !== -1){
          $class.removeClass(arrClassName[1])
        }
        $class.addClass(arrClassName[1]+'-click');
        $($elem).animate({'background':'#ddd'}, 200, 'ease-in');
      }
    },
    mounted () {
      this.addClass()
    }
  }
</script>
