<template>
<view class=" flex align-center justify-around weather "  >
		<view class="weather-item" v-for="(item,index)  in weather" :key="index" @tap="toNewPages(item)">
			<image :src="item.image" class="item-image"></image>
			<view class="text-center">{{item.title}}</view>
		</view>
		
</view>
</template>

<script>
export default{
	props:{
		weather:{
			type:Array,
			default(){
				return []
			}
		}
	},
	methods:{
		toNewPages(item){
			// #ifdef  H5
				window.location.href=item.link
			// #endif
			
			// #ifdef MP-WEIXIN
			uni.navigateTo({
				url:`/pages/webViews/webViews?src=${item.link}`
			})
			// #endif
			// #ifdef APP-PLUS
				plus.runtime.openWeb(item.link)
			// #endif
		}
	}
	
}
</script>

<style scoped>
	.weather{
		border-bottom: 20upx solid #ddd;
		padding-bottom: 20upx;
	}
	.weather-item{
		font-size:20upx;
	}
	.item-image{
		width:140upx;
		height:140upx;
		margin: 20upx 0;
	}
</style>
