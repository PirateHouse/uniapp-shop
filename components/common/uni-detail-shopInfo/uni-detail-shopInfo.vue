<template>
	<view v-if="Object.keys(shopInfo).length!==0" style="border-bottom: 8upx solid #CCCCCC;">
		<view class="flex align-center shop-info">
			<image :src="shopInfo.shopLogo" mode="" class="shop-logo"></image>
			<text>{{shopInfo.name}}</text>
		</view>
		<view class="flex align-center justify-around text-center">
			<view >
				<view >{{shopInfo.cSells | newSells}}</view>
				<text>总销量</text>
			</view>
			<view >
				<view >{{shopInfo.cGoods}}</view>
				<text>全部宝贝</text>
			</view>
			<view >
					<view v-for="(item,index) in shopInfo.score" :key="index" class="flex justify-between text-center score">
						<text>{{item.name}}</text>
						<text class="score-item" :class="{'acitve':item.isBetter}">{{item.score}}</text>
						<text class="score-isBetter" :class="{'acitve-isBetter':item.isBetter}">{{item.isBetter?'高':'低'}}</text>
					</view>
			</view>
		</view>
		<view class="flex justify-center align-center jindian">
			<text class="jindian-text">近店逛逛</text>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			shopInfo:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		filters:{
			newSells(value){
				return value>10000?(value/10000).toFixed(1)+'万':value
			}
		}
	}
</script>

<style scoped>
	.shop-info{
		padding:20upx ;
	}
	.shop-logo{
		width:100upx;
		height:100upx;
	}
	.score{
		height:40upx;
		line-height: 40upx;
		margin:6upx 0;
	}
	
	.score .acitve{
		color:#f13e3a;
	}
	.score-item{
		color:#5ea732;
	}
	.score .acitve-isBetter{
		color:#fff;
		background-color: #f13e3a;;
	}
	.score-isBetter{
		padding: 4upx;
		color:#fff;
		background-color:#5ea732;
	}
	.jindian{
		height:80upx;
		
	}
	.jindian-text{
		padding:20upx 30upx;
		border-radius: 8upx;
		background-color:#eee;
	}
</style>
