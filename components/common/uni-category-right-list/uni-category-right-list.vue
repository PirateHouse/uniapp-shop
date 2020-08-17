<template>
	<view>
		<view class="flex justify-around align-center flex-wrap text-center">
			<view v-for="(item,index) in rightList" :key="index" 
			class="category-control" @tap="toGoodsPage(item)">
				<image :src="item.image"  class="categoryImage"></image>
				<view>{{item.title}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			rightList:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			toGoodsPage(item){
				uni.navigateTo({
					url:'/pages/webViews/webViews?src='+item.link
				})
			}
		}
	}
</script>

<style scoped>
	.category-control{
		width:30%;
		height:180upx;
		margin-top: 20upx;
	}
	.categoryImage{
		width:120upx;
		height:120upx;
	}
</style>
