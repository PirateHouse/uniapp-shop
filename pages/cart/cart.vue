<template>
	<view>
		<scroll-view scroll-y="true" style="height:100vh">
		
		<!-- 购物车产品item展示 -->
		
		<uni-cart-item>	</uni-cart-item>
		<uni-cart-bottom ></uni-cart-bottom>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cartList:[]
			}
		},
		onLoad() {
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	
</style>
