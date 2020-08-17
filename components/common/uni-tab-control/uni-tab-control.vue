<template>
	<view class="tab-control">
		<view 	class="tab-item" 
				v-for="(item,index) in tabTitles" 
				:key="index"
				@click="editTabIndex(index)"
				>
				<text :class="index===activeIndex?'active':''">{{item}}</text>
				</view>
		
	</view>
</template>

<script>
	export default{
		props:{
			tabTitles:{
				type:Array,
				default(){
					return []
				}
			},
			activeIndex:{
				type:Number,
				default:0
			}
		},
		methods:{
			editTabIndex(index){
				this.$emit('editTabIndex',index)
			}
		}
	}
</script>

<style scoped>
	.tab-control{
		display: flex;
		height:100upx;
		line-height: 100upx;
		text-align: center;
		
	}
	.tab-item{
		flex:1;
		
	}
	.active{
		padding:10upx;
		border-bottom: 5upx solid #ff5777;
		color:#ff5777;
	}
</style>
