<template>
	<view>
	<scroll-view scroll-y="true"  style="height: 100vh;" @scroll="detailScroll" :scroll-top="naviga" class="scrollContent">
		

		<uni-detail-nav :detail-active-index="detailActive" @titleIndex="titleIndex" ></uni-detail-nav>
		
		<!-- 图片 -->
		
		<uni-detail-swiper :swiper-list="detailSwiper" class="detail-swiper"></uni-detail-swiper>
		<!-- 标题价格等信息 -->
		<uni-detail-titles :detail-titles="detailTitles"></uni-detail-titles>
		<!-- detailServices -->
		<uni-detail-services :detail-services="services"></uni-detail-services>
		<!-- 商户信息 -->
		<uni-detail-shopInfo :shop-info="shopInfo"></uni-detail-shopInfo>
		<!-- 产品图片 -->
		<uni-detail-goodsInfo :detail-goods-info="detailInfo" class="goodsInfo" @detailGoods="detailGoods"></uni-detail-goodsInfo>
		<!--  尺码详情-->
		<uni-detail-params :params-info="paramsInfo"  class='detailParams'></uni-detail-params>
		<!-- 用户评论 -->
		<uni-detail-rate :detail-rate="detailRate"  class="detailRate"></uni-detail-rate>
		<!-- 推荐商品数据 -->
		<view class="text-bold detailRecommend">推荐数据</view>
		<uni-goods-info :goods-info="recommend"></uni-goods-info>
	
	</scroll-view>
	<uni-detail-bottom class="detail-bottom" @addCartList="addCartList"></uni-detail-bottom>
	</view>
</template>

<script>
	import {getDetailInfo,TitlesInfo,ShopInfo,DetailParams,getDetailRecommend} from "@/network/detail.js"
	export default {
		data() {
			return {
				iid:null,
				detailActive:0,
				detailSwiper:[],
				detailTitles:{},
				services:[],
				shopInfo:{},
				detailInfo:{},
				paramsInfo:{},
				detailRate:[],
				recommend:[],
				navBarIndex:[0],
				naviga:0,
				navBar:['.detailParams','.detailRate','.detailRecommend'],
				cart:{}
			}
		},
		onLoad(options) {
			this.iid=options.iid
			this._getDetailInfo(options)
			this._getDetailRecommend()
		},
		methods: {
			// 根据id获取商品详情
			_getDetailInfo(iid){
				getDetailInfo(iid).then(res=>{
					// 保存swiper图片
					this.detailSwiper=res.result.itemInfo.topImages
					// 保存商品title价格信息
					this.detailTitles=new TitlesInfo(res.result.itemInfo,res.result.columns)
					// 退货包邮信息
					this.services=res.result.shopInfo.services
					// 商户信息
					this.shopInfo=new ShopInfo(res.result.shopInfo)
					// 商品详情
					this.detailInfo=res.result.detailInfo
					// 尺码详情
					this.paramsInfo=new DetailParams(res.result.itemParams)
					// 用户评价
					this.detailRate=res.result.rate.list
				})
			},
			// 切换title 获取对应的index
			titleIndex(index){
				
				// 点击index 跳转到对应的位置，因为位置存放在navbarIndex很好使用
					this.$nextTick(function(){
						this.naviga=this.navBarIndex[index]
					})
					console.log(index)
					console.log(this.detailActive)
				// this.detailActive=index;
				
			},
			// 获取推荐数据
			_getDetailRecommend(){
				getDetailRecommend().then(res=>{
					this.recommend=res.data.list
					
				})
			},
			// 当图片加载完毕后，获取三个offsetTOP的值,存入一个数组中,存入整数，方便scroll滚动时，计算
			detailGoods(){
						uni.createSelectorQuery().select('.detailParams').boundingClientRect(data=>{
							this.navBarIndex.push(parseInt(data.top))
						}).exec();
						uni.createSelectorQuery().select('.detailRate').boundingClientRect(data=>{
							this.navBarIndex.push(parseInt(data.top))
						}).exec();
						uni.createSelectorQuery().select('.detailRecommend').boundingClientRect(data=>{
							this.navBarIndex.push(parseInt(data.top))
						this.navBarIndex.push(Number.MAX_VALUE)
						}).exec();
				console.log(this.navBarIndex)
			},
			// 监控滚动
			detailScroll(e){
				let newSCroll=e.detail.scrollTop
				for(let n=0; n<this.navBarIndex.length;n++){
					if(newSCroll>=this.navBarIndex[n] &&newSCroll<this.navBarIndex[n+1]){
						if(this.detailActive!==[n]){
							this.detailActive=n
						}
						break;
						}
					}
					
	
			},
			// 加入购物车数据
			addCartList(){
				const obj ={}
				obj.id=this.iid,
				obj.image=this.detailSwiper[0],
				obj.title=this.detailTitles.titles,
				obj.price=this.detailTitles.lowNowPrice
				obj.count=1
				obj.checked=false
			 getApp().globalData.firstAddCart(obj)	
			}
			
	
		}
	}
</script>

<style scoped>
.detail-swiper{
	height:700upx;
	margin-top: 100upx;
}
.detailBackTop{
	position: fixed;
	right:80upx;
	bottom: 200upx;
}
.detail-bottom{
		position: fixed;
		left:0;
		right:0;
		bottom: 0;
		width:100%;
		height:150upx;
		z-index: 9;
		background-color:#fff;
	}
</style>
