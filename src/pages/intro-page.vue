<template>
  <div class="intro-page">
    <div class="block-common">
			<div class="block-common-title">设备状态</div>
			<div class="block-common-content">
				<div class="block-row">
					<div :class="this.$store.state.network ? 'online-status' : 'off online-status' "><i class="icon iconfont icon-wifi"></i>{{this.$store.state.netWork ? '在线' : '离线'}}</div>
					<div class="standBy-status"><i class="icon iconfont icon-cornBread-click"></i>待机</div>
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
				workState: [
					'待机','完成','搅拌1',
					'醒面1','搅拌2','醒面2',
					'搅拌3','醒面3','搅拌4',
					'发酵1','发酵2','烘烤',
					'保温','预约中','烘烤+搅拌',
					'搅拌+醒面','发酵3'
					]
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
			}
		}
	}
</script>