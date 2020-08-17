<template>
	<view >
		<image src="/static/img/common/top.png" class="back-top uni-link" @tap="toHomeTop"></image>
	</view>
</template>

<script>
	export default{
		methods:{
			toHomeTop(){
				this.$emit('toHomeTop')
			}
		}
	}
</script>

<style scoped type>
	.back-top{
		width:100upx;
		height:100upx;
		 
	}

</style>
