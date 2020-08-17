<template>
	<view class="cart-bottom flex justify-between align-center">
		<view class="flex ">
			<uni-cart-checked :is-checked="allCheckedIsShow" @changeChecked="allChangeChecked" ></uni-cart-checked>
			<view>全选</view>
		</view>
		
		<view>合计:{{totalPrice}}</view>
		<view class="toBuy">去结算({{cartIsChecked}})</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				allList:[]
			}
		},
		created() {
			this.allList = getApp().globalData.cartList
		},
		computed:{
			// 查找所有的checked，如果都为true，全选按钮被选中状态
			allCheckedIsShow(){
				// 查找allList中，只要有一个为false，全选按钮就不能被选中，或者购物车为空
				if(this.allList.length===0 || this.allList.find(item => !item.checked)){
					return false
				}
					return true
			},
			// 计算合计
			totalPrice(){
				// 先过滤数组里边有没有checked为true的，有的话，在进行计算，
				let nowPrice=this.allList.filter(item => item.checked===true)
				return nowPrice.reduce((prv,item)=>{
					return prv+item.price*item.count
				},0).toFixed(2)
			},
			// 计算结算个数
			cartIsChecked(){
				let nowPrice=this.allList.filter(item => item.checked===true)
				return nowPrice.length
			}
		},
		methods:{
			allChangeChecked(){
				// 先从列表中查找有没有为false的， 有为false 就全部修改为true
				console.log(this.allList)
				console.log(getApp().globalData.cartList)
			let oldChecked=this.allList.find(item => !item.checked)
			// 如果oldChecked里边有值，就将所有item的checked该为true，否则改为false
			if(oldChecked){
				this.allList.forEach(item=>{
					item.checked=true
				})
			}else{
				this.allList.forEach(item=>{
					item.checked=false
				})
			}
			}
		}
	}
</script>

<style scoped>
	.cart-bottom{
		position:fixed;
		right:0;
		left:0;
		bottom:0;
		height:100upx;
		background-color:#eee;
	}
	.toBuy{
		height:100upx;
		width: 100px;
		line-height: 100upx;
		text-align: center;
		background-color:#ff5777;
		color:#fff;
	}
	
</style>
