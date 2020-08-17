<template>
	<view>
		<view v-for="(item,index) in leftList" :key="index"
		 class="left-title "
		 :class="index===leftIndex?'active':''"
		@tap="changeLeftIndex(index)">
			{{item.title}}
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			leftList:{
				type:Array,
				default(){
					return []
				}
			},
			leftIndex:{
				type:Number,
				default:0
			}
		},
		methods:{
			changeLeftIndex(index){
				this.$emit('changeLeftIndex',index)
			}
		}
	}
</script>

<style scoped>
	.left-title{
		height:100upx;
		line-height: 100upx;
		text-align: center;
	}
	.active{
		background-color: #FFFFFF;
		border-left:1upx solid #ff5777;
	}
</style>
