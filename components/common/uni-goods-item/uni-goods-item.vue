<template>
	<view  @tap="toDetailPage(goodsItem.iid)">
		<image :src="isGoodsImage" mode="widthFix" class="item-image"> </image>
			<view class="item-info">
				<view class="item-tilte">{{goodsItem.title}}</view>
				<text style="color:#ff5777" >{{goodsItem.price | newPrice}}</text>
				<text class="item-cfav">{{goodsItem.cfav}}</text>
			</view>
	</view>
</template>

<script>
	export default {
		props:{
			goodsItem:{
				type:Object,
				default(){
					return{}
				}
				
			}
			
		},
		computed:{
			isGoodsImage(){
				return this.goodsItem.img ||this.goodsItem.image||this.goodsItem.show.img
				
			}
		},
		data() {
			return {
			message:0
			};
		},
		filters:{
			newPrice(value){
				return "￥"+value
		}
	},
	methods:{
		toDetailPage(id){
			uni.navigateTo({
				url:"/pages/detail/detail?iid="+id
			})
		}
	}
	}
</script>

<style scoped>
	
	
	 .item-image{
		width:100%;
		border-radius: 8upx;
		margin:20upx 0;	
	}
 	.item-tilte{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
		margin-bottom: 3px;
	  
	}
	.item-info{
		position: absolute;
				left:0;
				right: 0;
				bottom: 10upx;
				font-size:24upx;
				text-align: center;
		
		
	} 
	.item-cfav{
		margin-left: 10upx;
		padding-left:40upx;
		background:url(../../../static/img/common/favor.png) no-repeat;
		background-size: contain;
	}
	
	
</style>
