<template>
	<view>
		<view v-for="item in profileBottom" :key="item.title" class="bottom-info">
			<image :src="item.img" mode="" class="bottom-image"></image>
			<text>{{item.title}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				profileBottom:[
					{img:'/static/img/profile/profile-bottom1.png',
					title:'我的消息'},
					{img:'/static/img/profile/profile-bottom2.png',
					title:'积分商城'},
					{img:'/static/img/profile/profile-bottom3.png',
					title:'会员卡'},
					{img:'/static/img/profile/profile-bottom4.png',
					title:'我的购物车'},
					{img:'/static/img/profile/profile-bottom5.png',
					title:'下载App'}
				]
			}
		}
	}
</script>

<style>
	.bottom-info{
		height:80upx;
		line-height: 80upx;
		padding:0 20upx;
	}
	.bottom-image{
		margin-top: 10upx;
		width: 40upx;
		height: 40upx;
		margin-right: 20upx;
	}
</style>
