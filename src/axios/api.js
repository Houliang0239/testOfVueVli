import axios from 'axios'

axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded'; //这行啥意思QAQ

//请求拦截器
axios.interceptors.request.use(function (config) {
  return config;
},function(error){
    return Promise.reject(error);
})

//响应拦截器
axios.interceptors.response.use(function (response){
    return response;
},function (error){
    return Promise.reject(error);
})

//封装axios的post请求
export function  fetch(url,params){
    return new Promise((resolve,reject)=>{
        axios.post(url,params)
        .then((response) =>{
            resolve(response);
        }).catch((error)=>{
            reject(error);
        })
    })
}

//把方法暴露出去

export default{
    mockData(url){
        return fetch(url);
    }
}