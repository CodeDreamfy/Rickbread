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
					<div class="online-status"><i class="icon iconfont icon-nomenu"></i>无菜单</div>
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
				// var i = this.$store.state.sensorStatus.WorkStatus ? this.$store.state.sensorStatus.WorkStatus : 0;
				return workstatus[0]
			},
			
		}
	}
</script>