<template>
	<view v-if="Object.keys(detailGoodsInfo).length!==0" class="goods-info">
		<view class="goods-title">
			{{detailGoodsInfo.desc}}
		</view>
		<view class="goods-title ">{{detailGoodsInfo.detailImage[0].key}}</view>
		<image v-for="(item,index) in detailGoodsInfo.detailImage[0].list":src="item":key="index" mode="widthFix" @load="detailGooodsImage" class="good-image"></image>
	</view>
</template>

<script>
	export default{
		props:{
			detailGoodsInfo:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		data(){
			return {
				activeIndex:0
			}
		},
		methods:{
			detailGooodsImage(){
			if(++this.activeIndex===this.detailGoodsInfo.detailImage[0].list.length){
				this.$emit('detailGoods')
			}
				
				
			}
		}
	}
</script>

<style scoped>
	.goods-info{
		margin-top: 20upx ;
	}
	.goods-title{
		padding:10upx;
		font-size:30upx;
	}
	.good-image{
		width:100%;
		height:100%;
	}
</style>
