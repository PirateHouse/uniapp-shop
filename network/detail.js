import {request } from './request.js'
export function getDetailInfo(config){
	return request({
		url:'/detail',
		data:{
			iid:config.iid
		}
	})
}

export function getDetailRecommend(){
	return request({
		url:'/recommend'
	})
}

export class TitlesInfo{
	constructor(itemInfo,columns) {
	    this.titles=itemInfo.title
		this.oldPrice=itemInfo.oldPrice
		this.lowNowPrice=itemInfo.lowNowPrice
		this.discountDesc=itemInfo.discountDesc
		this.columns=columns
	}
}

export class ShopInfo{
	constructor(shopInfo){
		this.name=shopInfo.name
		this.score=shopInfo.score
		this.cGoods=shopInfo.cGoods
		this.cSells=shopInfo.cSells
		this.shopLogo=shopInfo.shopLogo
	}
}

export class DetailParams{
	constructor(itemParams) {
	    this.set=itemParams.info.set
		this.tables=itemParams.rule.tables
	}
}

