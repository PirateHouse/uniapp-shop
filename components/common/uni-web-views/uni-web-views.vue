<template>
	<view>
		<web-view :src="webSrc"></web-view>
	</view>
</template>

<script>
	export default{
		props::{
			webSrc:{
				type:String,
				default:''
			}
		}
	}
</script>

<style scoped>
</style>
