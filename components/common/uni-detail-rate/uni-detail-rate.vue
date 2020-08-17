<template>
	<view >
		<view class="flex justify-between align-center rate-title">
			<text> 用户评论</text>
			<text>
				<text > 查看更多 </text>
				<text class="cuIcon-right"></text>
			</text>	
		</view>
		
		<view v-for="item in detailRate" :key="item.rateId" class="user-info" v-if="detailRate">
			<view class="flex align-center ">
				<image :src="item.user.avatar" class="uImage"></image>
				<text>{{item.user.uname}}</text>
			</view>
			<view  class="item-style">{{item.content}}</view>
			<view  class="item-style">
				<text class="item-text">{{item.created |newTime}}</text>
				<text class="item-text">{{item.style}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {formatDate} from '@/network/utils.js'
	export default{
		props:{
			detailRate:{
				type:Array,
				default(){
					return []
				}
			}
		},
		filters:{
			newTime(value){
				let date=new Date(value*1000)
				return formatDate(date,'yyyy-MM-dd')
			}
		}
	}
</script>

<style scoped>
	.rate-title{
		height:80upx;
		padding:0 20upx;
	}
	.user-info{
		padding:20upx ;
	}
	.uImage{
		width:100upx;
		height:100upx;
		border-radius: 50%;
		margin-right:10upx;
	}
	.item-style{
		margin:20upx 0;
	}
	.item-text{
		margin-right: 20upx;
	}
</style>
