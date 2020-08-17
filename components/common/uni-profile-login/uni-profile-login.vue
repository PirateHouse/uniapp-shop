<template>
	<view class="flex justify-between align-center profile-title">
		<view class="icon-box">
			<image src="/static/img/common/contact.png" class=" people-icon" ></image>
			<view class="profile-text">
				<text>登录/注册</text>
				<view class="cuIcon-mobile">暂无绑定手机号</view>
			</view>
		</view>
		
		<view class='cuIcon-right profile-right'></view>
	</view>
</template>

<script>
</script>

<style scoped>
	.profile-title{
		height:200upx;
		background-color:#FF5777;
	}
	.icon-box{
		padding-left:50upx;
		display: flex;
	}
	.people-icon{
		 width:80upx;
		 height:80upx;
		 padding:20upx;
		 background-color: #fff;
		 border-radius: 50%;
	}
	
	.profile-text{
		color: #FFFFFF;
		font-size:30upx;
		margin-left:20upx;
	}
	.profile-right{
		padding-right: 50upx;
		color:#FFFFFF;
		font-size:60upx;
	}
</style>
