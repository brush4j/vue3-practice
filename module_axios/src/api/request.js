import requestApi from './axios'


// 封装请求接口
export const requestMethods = (url, type, data) => {
  return requestApi({
    url: url,
    method: type,
    data: data
  })
}
