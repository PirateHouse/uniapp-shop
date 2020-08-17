<template>
	<view>
		<web-view :src="webSrc"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			webSrc:''	
			}
		},
		// 当页面加载时，接受传递的参数，并复制给webSrc渲染
		onLoad(e) {
			this.webSrc=e.src
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
