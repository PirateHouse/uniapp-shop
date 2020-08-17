<template>
	<view class="content">
		<scroll-view scroll-y="true" :scroll-top="scrollTop" @scroll="homeScroll"  @scrolltolower="loadMore" style="height:100vh;" ref="homeScrollControl">
			<view>
				<!-- tab-control -->
				<uni-tab-control 	:tab-titles="tabTitles" 
									:active-index="activeIndex"
									@editTabIndex="editTabIndex"
									v-if="isShowTab"
									class="tab-control1"></uni-tab-control>
				<!-- 轮播图 -->
				<uni-home-swiper :swiper-list="swiperList"></uni-home-swiper>
				<!-- 图标 -->
				<uni-home-weather :weather="homeWeather"></uni-home-weather>
				<!-- 图片 -->
				<uni-recommend></uni-recommend>
				<!-- tab-control -->
				<uni-tab-control 	:tab-titles="tabTitles" 
									:active-index="activeIndex"
									@editTabIndex="editTabIndex"
									class="tabControl2"
									v-if="!isShowTab"
									></uni-tab-control>
				 <!-- 商品信息显示-->
				 <uni-goods-info :goods-info="goods[goodsType].list"></uni-goods-info>
				
			</view>
			
		</scroll-view>
			<uni-back-top class="home-back-top" v-if="isShowBackTop" @toHomeTop="toHomeTop"></uni-back-top>			
	</view>
</template>

<script>
	import {getSwiper,getGoodsInfo } from "@/network/home.js"
	export default {
		data() {
			return {
				title: 'Hello',
				swiperList:[],
				tabTitles:['流行','新款','精选'],
				activeIndex:0,
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]}
				},
				goodsType:"pop",
				homeWeather:[],
				tabOffsetTop:0,
				isShowBackTop:false,
				nowScrollTop:0,
				scrollTop:0,
				
			}
		},
		onLoad() {
			this.getSwiperList()
			// 页面加载时先获取所有商品信息
			this._getGoodsInfo("pop")
			this._getGoodsInfo('new')
			this._getGoodsInfo("sell")
		},
		mounted() {
			uni.createSelectorQuery().select('.tabControl2').boundingClientRect(data=>{
							this.tabOffsetTop=data.top
							
						}).exec();
		},
		computed:{
			isShowTab(){
				return this.nowScrollTop>this.tabOffsetTop
			}
		},
		methods: {
			// 发起网络请求获取轮播数据
			 getSwiperList(){
				 getSwiper().then(res=>{
					this.swiperList=res.data.banner.list
					this.homeWeather=res.data.recommend.list
					}) 
				
			},
			// 当点击tab-control时 将index的值赋值给activeIndex在重新传给子组件，动态绑定class
			// 子组件无法修改props的变量
			editTabIndex(index){
				this.activeIndex=index
				// 当点击tab-control时，把加载时获取的信息显示出来
				switch(index){
					case 0: 
					this.goodsType='pop'
					break;
					case 1:
					this.goodsType='new'
					break;
					case 2:
					this.goodsType="sell"
					break;
				}
			},
			// 当页面一加载时，获取pop的数据
			_getGoodsInfo(goodsType){
				// 从goods中获取当前页码数 因为是从0开始，所以先加1
				let pages=this.goods[goodsType].page+=1
				// 拼接到一个对象中，获取数据时使用
				let goodsData={
					type:goodsType,
					page:pages
				}
				// 发起网络请求,提示加载中
			getGoodsInfo(goodsData).then(res=>{
				// 将获取的信息存放在对应的goodsType中的list，方便区分
				this.goods[goodsType].list.push(...res.data.list)
				// 将对应的goodsyType中的page等于pages 方便下次使用
				this.goods[goodsType].page=pages
			})
				
			},
			// 监控滚到页面底部，加载新的数据
			loadMore(e){
				this._getGoodsInfo(this.goodsType)
			},
			// 监控页面滚动
		homeScroll(e){
			this.nowScrollTop=e.detail.scrollTop
			// this.isShowTab =  this.nowScrollTop >= this.tabOffsetTop
			this.isShowBackTop= this.nowScrollTop>2000
		},
		toHomeTop(){
			 this.scrollTop = this.nowScrollTop
			            this.$nextTick(function() {
			                this.scrollTop = 0
			            });
			  
		}
		
	},
	}
</script>

<style scoped>
	.tab-control1{
		position: fixed;
		top:0;
		left:0;
		right: 0;
		z-index: 9;
		background-color: #FFFFFF;
	}
	.home-back-top{
		position: fixed;
		bottom: 180upx;
		right:80upx;
		z-index: 2;
	}
</style>
