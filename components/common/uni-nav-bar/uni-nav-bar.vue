<template>
	<view class=" flex  justify-between align-center  text-center nav-bar" >
			<view class="left">	
				<slot name="left"></slot>
			</view>		
		<view class="center" >
			<slot name="center"></slot>
		</view>
		<view class="right" >
			<slot name="right"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.nav-bar{
		position: fixed;
		top:0;
		left:0;
		right:0;
		z-index: 9;
		background-color: #fff;
		
	}
.left,.right,.center{
	height:100upx;
	line-height: 100upx;
}
.left,.right{
	width:120upx;
}
.center{
	flex:1;
	
	
}
</style>
