<template>
	<view class="flex">
		<scroll-view scroll-y="true" class="left-scroll">
			<uni-category-left-list 
			:left-list="categoryleft"
			 :left-index="categoryLeftIndex"
			 @changeLeftIndex="changeLeftIndex"></uni-category-left-list>
		</scroll-view>
		<scroll-view scroll-y="true"  class="right-scroll">
			<uni-category-right-list :right-list="categoryRight"></uni-category-right-list>
		</scroll-view>
		
	</view>
</template>

<script>
	import {getLeftInfo,getRightInfo} from '@/network/category.js'
	export default {
		data() {
			return {
				categoryleft:[],
				categoryLeftIndex:0,
				categoryRight:[]
			}
		},
		onLoad() {
			this._getLeftInfo()
			
		},
		methods: {
			_getLeftInfo(){
				getLeftInfo().then(res=>{
				this.categoryleft=res.data.category.list
				this.getCategoryRight(this.categoryLeftIndex)
				})
			},
			changeLeftIndex(index){
				this.categoryLeftIndex=index
				this.getCategoryRight(this.categoryLeftIndex)
			},
			// 获取右边的数据列表
			getCategoryRight(index){
				let config={maitkey:this.categoryleft[index].maitKey}
				getRightInfo(config).then(res=>{
					this.categoryRight=res.data.list
				})
			}
		}
	}
</script>

<style scoped>
	.left-scroll{
		height:100vh;
		width:200upx;
		background-color: #f6f6f6;
	}
	.right-scroll{
		height:100vh;
		width: 70%;
	}
</style>
