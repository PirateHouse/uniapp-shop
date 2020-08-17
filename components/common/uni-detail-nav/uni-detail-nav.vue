<template>
	<uni-nav-bar>
		
		<view slot="center">
			<text v-for="(item,index) in navBar" 
			:key="index" 
			class="title-item"
			:class="index===detailActiveIndex?'active':''"
			@tap="changeIndex(index)">{{item}}</text>
		</view>
	</uni-nav-bar>
</template>

<script>
	export default{
		props:{
			detailActiveIndex:{
				type:Number,
				default:0
			}
		},
		data(){
			return{
				navBar:['商品',"参数", "评价","推荐"]
			}
		},
		methods:{
			changeIndex(index){
				this.$emit('titleIndex',index)
			}
			
		}
	}
</script>

<style scoped>
	
	.title-item{
		display: inline-block;
		width:25%;
	}
	.active{
		color:#ff5777;
	}
</style>
