import{ request} from './request.js'

export function getLeftInfo(){
	return request({
		url: '/category'
	})
}

export function getRightInfo(config){
	return request({
		url:'/subcategory',
		data:{
			maitKey:config.maitkey
		}
	})
}