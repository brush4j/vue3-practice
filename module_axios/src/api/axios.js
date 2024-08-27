// 二次封装 axios  (拦截器)

import axios from "axios";

// 借助 qs 将对象转为 formData 格式
import qs from 'qs'

// baseURL 不可写错
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})



service.interceptors.request.use((config) => {
  /* 发送请求时, 需要做的事 */

  // 设置请求头信息, 例如 token
  config.headers['authorization'] = window.sessionStorage.getItem('A ccToken')


  // 当请求类型为 get 时, 则将 参数拼接
  if(config.method === 'get') {
    config.params = config.data
  }


  // 当请求类型为 post 时, 按后端需要, 转成需要的类型 (这里转为 formData 格式)
  if(config.method === 'post') {

    // 参数类型为 formData 格式时, 设置 Content-Type 为 application/x-www-form-urlencoded
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.data = qs.stringify(config.data)
  }


  return config;
}, 
(error) => {

  return Promise.reject(error);
})



service.interceptors.response.use((response) => {
  // 接口响应时需要做的事

  let res = response.data
  if(res.code !== 200) {
    alert('请求出错!')

    return Promise.reject(new Error('后台返回的msg提示' || 'Error'))
  } else {
    return Promise.resolve(res)
  }

},
(error) => {

  alert('网络错误!')
  return Promise.reject(error)
})



export default service

