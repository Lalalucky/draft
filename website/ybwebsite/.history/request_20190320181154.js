import axios from 'axios';

//拦截器
axios.interceptors.request.use((config) => {
    // 接口可在这里统一处理
    return config
}, (err) => { 
    //接口报错可在这里统一处理
    return Promise.resolve(err)
    
    }) 

// 拦截器
axios.interceptors.response.use((data) => { 
    //校验数据
    return data
}, (err) => { 
    //处理异常
        if (err.response.status === 504 || err.response.status === 404) {
            console.log('服务器并不存在')
        } else if (err.response.status === 403) {
            console.log('权限不足，请联系管理员')
        } else { 
            console.log('未知错误')
        }
})    