<template>
	<view>
		<view class="checked-image" @tap="changeChecked">
			<image src="/static/img/common/checked.png"   class='showImage' v-show="isChecked"></image>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			isChecked:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			changeChecked(){
			this.$emit('changeChecked')	
			}
		}
	}
</script>

<style scoped>
	.checked-image{
		width:40upx;
		height: 40upx;
		border:1upx solid #ccc;
		border-radius: 50%;
		margin:0 20upx;
	}
	.showImage{
		width:100%;
		height:100%;
	}
</style>
