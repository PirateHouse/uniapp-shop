<template>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular class="swiper-item" >
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<view  @tap="navigatorOther(item)">
					<image :src="item.image || item" mode="widthFix" ></image> 
				</view>
			</swiper-item>
		</swiper>
</template>

<script>
	
	export default {
		props:{
			swiperList:{
				type:Array,
				default:[],
				
			}
		},
		data() {
			return {
	
			};
		},
		methods:{
			navigatorOther(item){
				// #ifdef  H5
					window.location.href=item.link
				// #endif
				
				// #ifdef MP-WEIXIN
				uni.navigateTo({
					url:`/pages/webViews/webViews?src=${item.link}`
				})
				// #endif
			},
			
			
		}
		
	}
</script>

<style scoped>
	.swiper-item{
		/* #ifdef MP-WEIXIN */
		height:800upx;
		/* #endif */
	}
</style>

