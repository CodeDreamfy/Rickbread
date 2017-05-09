<template>
  <div class="intro-page">
    <div class="block-common">
			<div class="block-common-title">设备状态</div>
			<div class="block-common-content">
				<div class="block-row">
					<div :class="this.$store.state.network ? 'off online-status' : 'online-status' "><i class="icon iconfont icon-wifi"></i>{{this.$store.state.netWork ? '在线' : '离线'}}</div>
					<div class="standBy-status"><i :class="'icon'+' iconfont '+workState.class"></i>{{workState.name}}</div>
				</div>
				<div class="block-row">
					<div class="online-status"><i :class="'icon'+' iconfont '+menuState.class"></i>{{menuState.name}}</div>
					<div class="standBy-status"><i class="icon iconfont icon-countdown"></i>01：50</div>
				</div>
			</div>
		</div>
		<div class="block-common">
			<div class="block-common-title">设备告警</div>
			<div class="block-common-content">
				<div class="block-row">
					<div class="online-status"><i class="icon iconfont icon-carryout"></i>完成</div>
					<div class="standBy-status"><i class="icon iconfont icon-device-normal"></i>正常</div>
				</div>
			</div>
		</div>
		<div class="block-common">
			<div class="block-common-title">设备操作</div>
			<div class="block-common-content">
				<div class="block-row-center">
					<div class="device-wrap">
						<a href="javascript:;" class="start-btn" @touchstart="startUp">
							<i class="iconfont icon-start device-btn"></i>
						</a>
						<p>启动</p>
					</div>
					<div class="device-wrap">
						<a href="javascript:;" class="pause-btn">
							<i class="iconfont icon-timeout device-btn"></i>
						</a>
						<p>暂停</p>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
  export default {
		data () {
			return {
			}
		},
		methods: {
			startUp () {
				if(this.warningState){
					this.$store.commit('warnTipShow', true)
				}
			}
		},
		computed: {
			warningState () {
				return this.$store.state.warningState.state;
			},
			workState () {
				let workstatus = [
					{name: '待机', class: 'icon-standby'},
					{name: '完成', class: 'icon-carryout'},
					{name: '搅拌1', class: 'icon-stir'},
					{name: '醒面1', class: 'icon-wekeUp'},
					{name: '醒面2', class: 'icon-wekeUp'},
					{name: '搅拌3', class: 'icon-stir'},
					{name: '醒面3', class: 'icon-wekeUp'},
					{name: '搅拌4', class: 'icon-stir'},
					{name: '发酵1', class: 'icon-ferment'},
					{name: '发酵2', class: 'icon-ferment'},
					{name: '烘烤', class: 'icon-bake'},
					{name: '保温', class: 'icon-standBy'},
					{name: '预约中', class: 'icon-reservation'},
					{name: '烘烤+搅拌', class: 'icon-standBy'},
					{name: '搅拌+醒面', class: 'icon-standBy'},
					{name: '发酵3', class: 'icon-ferment'}
				]
				var i = this.$store.state.workstatus ? this.$store.state.workstatus : 0;
				// this.$store.dispatch('changeStore',{})
				// console.log(this.$store.state.indexModule.menuState);
				return workstatus[i]
			},
			menuState () {
				let menutatus = [
					{name: '云菜谱', class: 'icon-standby'},
					{name: '欧式面包', class: 'icon-european'},
					{name: '法式面包', class: 'icon-french'},
					{name: '和风面包', class: 'icon-windBread'},
					{name: '有机杂粮/全麦面包', class: 'icon-wekeUp'},
					{name: '无筋面包', class: 'icon-noGlutenBread'},
					{name: '快速面包', class: 'icon-fast'},
					{name: '西式蛋糕(蛋糕)', class: 'icon-westernCake'},
					{name: '米饭面包', class: 'icon-ricebread'},
					{name: '玉米面包', class: 'icon-cornBread'},
					{name: '紫米面包', class: 'icon-purpleRiceBread'},
					{name: '玄米面包', class: 'icon-mysteriousRiceBread'},
					{name: '八宝米粥', class: 'icon-babaoRice'},
					{name: '年糕/糯米团', class: 'icon-rickcake'},
					{name: 'iMix', class: 'icon-IMIX'},
					{name: '生面团', class: 'icon-dough'},
					{name: '自定义和面', class: 'icon-customAndFace'},
					{name: '米酒/低温发酵', class: 'icon-lowRiceWine'},
					{name: '葡萄酒', class: 'icon-standby'}, //暂无
					{name: '酸奶', class: 'icon-yogurt'},
					{name: '花式果酱(果酱)', class: 'icon-fancyjam'},
					{name: '自动翻炒(翻炒)', class: 'icon-stirFlick'},
					{name: '发酵.烘烤', class: 'icon-bakeStir'},
					{name: '烘烤/炖/煮', class: 'icon-barbecue'},
					{name: '自定义', class: 'icon-customAndFace'},
					{name: '欧式甜点', class: 'icon-european-dessert'},
					{name: '解冻', class: 'icon-thaw'},
					{name: '无糖面包', class: 'icon-ferment'}, //暂无
					{name: '发酵', class: 'icon-ferment'},
					{name: '肉松', class: 'icon-flossing'},
					{name: '白面馒头', class: 'icon-ferment'}, //暂无
					{name: '玉米面包', class: 'icon-ferment'}, //暂无
					{name: '麦香馒头', class: 'icon-ferment'}, //暂无
					{name: '杂粮馒头', class: 'icon-ferment'}, //暂无
					{name: '甜味馒头', class: 'icon-ferment'}, //暂无
					{name: '煲仔饭', class: 'icon-ferment'}, //暂无
					{name: '和面', class: 'icon-andface'}
				]
				var i = this.$store.state.indexModule.menuState ? this.$store.state.indexModule.menuState : 1;
				return menutatus[i]
			}
		}
	}
</script>