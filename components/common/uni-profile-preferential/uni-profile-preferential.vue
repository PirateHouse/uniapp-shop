<template>
	<view class="flex justify-between preferential">
		<view class="my-preferential">
			<view><text class="count">0.00</text><text>元</text></view>
			<view>我的余额</view>
		</view>
		<view class="my-preferential">
			<view><text class="count">0.00</text><text>元</text></view>
			<view>我的优惠</view>
		</view>
		<view class="my-preferential">
			<view><text class="count">0.00</text><text>元</text></view>
			<view>我的积分</view>
		</view>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	.preferential{
		 background: #f8f8f8;
		 font-size: 28upx;
		 text-align: center;
	}
	.my-preferential{
		width: 33%;
		padding: 50upx 0;
		background: #fff;
	}
	.count{
		 color: #ff5f3e;
		  font-size: 40upx;
		  font-weight: bold;
		  line-height: 1.5;
	}
</style>
