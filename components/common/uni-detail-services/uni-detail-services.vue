<template>
	<view class="flex justify-around service">
		<view v-for="item in detailServices" :key="item.name" v-if="item.icon">
			<image :src="item.icon" mode="" class="service-image"></image>
			<text>{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			detailServices:{
				type:Array,
				default(){
					return[]
				}
			}
		}
	}
</script>

<style scoped>
	.service{
		padding:20upx 0;
		border-bottom: 5upx solid #ccc;
	}
	.service-image{
		width:20upx;
		height:20upx;
	}
</style>
