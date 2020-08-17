const baseUrl=""


export   function   request(config){
	return  new Promise((resolve,reject)=>{
		return uni.request({
			url:baseUrl+config.url,
			data:config.data ||{},
			method:config.method||'GET',
			success:(res)=>{
				resolve(res.data)
			},
			fail:reject
		})
	})
}