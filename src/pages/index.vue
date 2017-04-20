<template>
  <div class="intro">
		234
		<introPage v-show="this.$store.state.introState == 1"></introPage>
		<menuPage v-show="this.$store.state.introState == 2"></menuPage>
    <navigation></navigation>
  </div>
</template>

<script>
	import navigation from '@/components/navg'
	import introPage from '@/pages/intro-page'
	import menuPage from '@/pages/menu-page'
	export default {
		data () {
			return {
				status: 1
			}
		},
		components: {
			introPage,
			menuPage,
			navigation
		}
	}
</script>