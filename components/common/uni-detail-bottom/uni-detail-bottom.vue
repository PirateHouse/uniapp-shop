<template>
	<view class=" flex justify-around align-center text-center">
		<view class="bottom-flex">
			<image src="/static/img/detail/service.png" class="bottom-icon"></image>
			<view>客服</view>
		</view>
		<view class="bottom-flex">
			<image src="/static/img/detail/shop.png" class="bottom-icon"></image>
			<view>店铺</view>
		</view>
		<view class="bottom-flex">
			<image src="/static/img/detail/collect.png" class="bottom-icon"></image>
			<view>收藏</view>
		</view>
		<view class="bottom-flex addCart" @tap="toCart">
			<view >加入购物车</view>
		</view>
		<view class="bottom-flex bottom-buy">
			<view>购买</view>
		</view>
	</view>
</template>

<script>
	export default{
		
		methods:{
			toCart(){
				uni.showToast({
						title:"已加入购物车"
				})
				this.$emit('addCartList')
			}
		}
	}
</script>

<style scoped>
	
	.bottom-flex{
		flex: 1;
	}
	.bottom-icon{
		width:60upx;
		height:60upx;
	}
	.addCart{
		height:150upx;
		line-height: 150upx;
		background-color:#ffe817;
		color:#333;
	}
	.bottom-buy{
		height:150upx;
		line-height: 150upx;
		background-color:#FF5777;
		color:#fff;
	}
</style>
