<template>
	<view v-if="Object.keys(detailTitles).length!==0">
		<view class="titles">{{detailTitles.titles}}</view>
		<view class="price">
			<text class="n-price">{{detailTitles.lowNowPrice | newPrices }}</text>
			<text class="o-price">{{detailTitles.oldPrice}}</text>
			<text class="discount" v-if="detailTitles.discountDesc ">
			{{detailTitles.discountDesc}}</text>
		</view>
		<view class="flex justify-between  columns" >
			<text v-for="item in detailTitles.columns" :key="item">{{item}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			detailTitles:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		filters:{
			newPrices(value){
				return "￥"+value
				console.log(value)
			}
		}
	}
</script>

<style scoped>
	.titles{
		padding:10upx;
		font-size:30upx;
		
	}
	.price{
		height:100upx;
		line-height: 100upx;
	}
	.n-price{
		color:#ff5777;
		font-size:50upx;
		margin-right:10upx;
	}
	.o-price{
		text-decoration: line-through;
		margin-right:10upx;
	}
	.discount{
		background-color:#ff5777;
		padding:10upx 20upx;
		color:#fff;
		border-radius: 16upx;
	}
	.columns{
		border-bottom: 1upx solid #ccc;
		padding-bottom: 20upx;
	}
	
</style>
