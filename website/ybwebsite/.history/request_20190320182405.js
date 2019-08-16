import axios from 'axios';

//拦截器
axios.interceptors.request.use((config) => {
    // 接口可在这里统一处理
    return config
}, (err) => { 
    //接口报错可在这里统一处理
    return Promise.resolve(err)
    
    }) 

// 拦截返回数据的状态值，给予提示
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

// 暴露方法
// post方法
export function postRequest(url,params) {
    return axios({
        method: 'post',
        url: '/api/' + url,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) { 
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

// get方法
export function getRequest(url) {
    return axios({
        method: 'get',
        url: '/api/'+url
    })
}

// uploadFile 方法
export function uploadFileRequest(url,params) {
    return axios({
        method: 'post',
        url: '/api/' + url,
        data: params,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

// put 方法
export function putRequest(url,params) {
    return axios({
        method: 'put',
        url: '/api/'+putRequest,
    })
}