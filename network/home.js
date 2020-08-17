import{request } from './request.js'

export    function  getSwiper (){
	return   request({
		url:'/home/multidata'
	})
}

export function getGoodsInfo(config){
	return request({
		  url: '/home/data',
		  data:{
			  type:config.type,
			  page:config.page
		  }
	})
}