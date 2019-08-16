import axios from 'axios';

//拦截器
axios.interceptors.request.use((config) => {
    // 接口可在这里统一处理
    return config;
}, (err) => { 
    //接口报错可在这里处理
}) 