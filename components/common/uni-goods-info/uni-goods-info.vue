<template>
	<view class="goods-info">
		<uni-goods-item v-for="(item,index) in goodsInfo" :goods-item="item"  
		:key="index" class="goods-item">
	</uni-goods-item>
	
	</view>
</template>

<script>
	export default {
		props:{
			goodsInfo:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.goods-info{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	padding:0 5upx;
}
.goods-item{
		width:48%;
		position:relative;
		padding-bottom: 80upx;
	}
</style>
