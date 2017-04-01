<template>
  <div class="intro">
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