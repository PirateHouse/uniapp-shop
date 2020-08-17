<script>
	export default {
		 globalData: {  
		            cartList: [],
					firstAddCart(obj){
						// 现在购物车列表中查找有没有要添加进去的id值
					const oldInfo = this.cartList.find(item =>item.id === obj.id)
					// 如果有这个值，就将值里边的count +1，对象是引用类型，修改一方另外一方也会改变
					if(oldInfo){
						oldInfo.count+=1
						console.log(oldInfo)
						console.log(this.cartList)
					}else{
						this.cartList.push(obj)
					
					}
		},
		  },
		  
		  
		  
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url("@/static/css/main.css");
	@import url("@/static/css/icon.css");
	/*每个页面公共css */
</style>
