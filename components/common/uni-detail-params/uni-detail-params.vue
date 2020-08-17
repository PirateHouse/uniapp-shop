<template>
	<view v-if="Object.keys(paramsInfo).length!==0"  class="params-item">
		<view v-for="(table,thead) in paramsInfo.tables" :key="thead">
			<view v-for="(tbody,tr) in table" :key="tr" class="flex justify-between align-center text-center tableItem">
				<text v-for="(item,index) in tbody" :key="index">
					{{item}}
				</text>
			</view>
		
		</view>
		<view v-for="(item,index) in paramsInfo.set" :key="item.key" class="flex align-center  item-set">
			<text class="item-key">{{item.key}}</text>
			<text class="item-value">{{item.value}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			paramsInfo:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	.params-item{
		padding-bottom: 20upx;
		border-bottom: 8upx solid #CCCCCC;
	}
	.tableItem{
		margin:0 50upx;
		padding:0 30upx;
		height:80upx;
		line-height: 80upx;
		border-bottom: 1upx solid #ccc;
	}
	.item-set{
		margin:0 50upx;
		padding:0 30upx;
		height:80upx;
		border-bottom: 1upx solid #ccc;
	}
	.item-key{
		width:200upx;
		margin-right:10upx;
	}

	.item-value{	
		width:70%;
		color:#ff5777;
	}
</style>
