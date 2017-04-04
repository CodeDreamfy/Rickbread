<template>
  <div class="intro">
		<div class="block-common">
			<div class="block-common-title">设备状态</div>
			<div class="block-common-content">
				<div class="block-row">
					<div class="online-status"><i class="iconfont icon-standBy"></i>在线</div>
					<div class="standBy-status"><i class="icon iconfont icon-cornBread-click"></i>待机</div>
				</div>
				<div class="block-row">
					<div class="online-status"><i class="iconfont icon-standBy"></i>无菜单</div>
					<div class="standBy-status"><i class="icon iconfont icon-cornBread-click"></i>01：50</div>
				</div>
			</div>
		</div>
		<div class="block-common">
			<div class="block-common-title">设备告警</div>
			<div class="block-common-content">
				<div class="block-row">
					<div class="online-status"><i class="iconfont icon-standBy"></i>完成</div>
					<div class="standBy-status"><i class="icon iconfont icon-cornBread-click"></i>正常</div>
				</div>
			</div>
		</div>
		<div class="block-common">
			<div class="block-common-title">设备操作</div>
			<div class="block-common-content">
				<div class="block-row-center">
					<div class="start-wrap">
						<a href="javascript:;" class="start-btn">aa</a>
						<p>启动</p>
					</div>
					<div class="pause-wrap">
						<a href="javascript:;" class="pause-btn">bb</a>
						<p>暂停</p>
					</div>
				</div>
			</div>
		</div>
    <navigation></navigation>
  </div>
</template>

<script>
	import navigation from '@/components/navg'
	export default {
		data () {
			return {
				msg: 'hehe'
			}
		},
		components: {
			navigation
		}
	}
</script>