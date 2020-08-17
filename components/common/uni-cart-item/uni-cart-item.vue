<template>
	<view>
	<view class="flex justify-between align-center cart-item" v-for="(cartGoodsItem,index) in cartInfo" :key="index">
		<uni-cart-checked :is-checked="cartGoodsItem.checked" @changeChecked="changeWeixin(cartGoodsItem)"></uni-cart-checked>
		<view>
			<image :src="cartGoodsItem.image" class="cart-image"></image>
		</view>
		<view>
			<view class="item-title">{{cartGoodsItem.title}}</view>
			<view class="flex justify-between item-count">
				<text >{{cartGoodsItem.price}}</text>
				<text>×{{cartGoodsItem.count}}</text>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
			cartInfo:[]
			}
		},
		created(){
			this.cartInfo=getApp().globalData.cartList
		},
		methods:{
			// 点击每个item的checked,修改checked的值
			changeWeixin(cartGoodsItem){
			
				cartGoodsItem.checked=!cartGoodsItem.checked
				// console.log(cartGoodsItem)
				// console.log(this.cartInfo)
				// console.log(getApp().globalData.cartList)
				
			}
		}
		
	}
</script>

<style scoped>
	.cart-item{
		margin-top:20upx;
		border-bottom: 1upx solid #eee;
	}
	.cart-image{
		width: 180upx;
		height:240upx;
		border-radius: 10upx;
	}
	.item-title{
		height:200upx;
		padding:20upx;
		font-size:20upx;
	}
	.item-count{
		padding:20upx;
		font-size:20upx;
	}
</style>
