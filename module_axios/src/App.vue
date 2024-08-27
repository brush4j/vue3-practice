<template>
  <div id="app">
    axios 进一步封装(拦截器)
  </div>
</template>

<script>

import { requestMethods } from './api/request.js'

export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods: {
    /* 
      异步请求数据
      注: 使用 async 和 await 请求接口时, 需要用 try {} catch(err) {}  捕获异常
    */
    async getData() {

      let param = { name: 'cy', pass: '123' }
    
      // get 请求
      try{
        let getRes = await requestMethods('/getHomeInfo', 'get', param)
        console.log(getRes)

      } catch(err) {

        // 通过 err.message 获取到错误信息
        console.log(err.message)
      }

      // post 请求
      try{
        let postRes = await requestMethods('/getMoodList', 'post', param)
        console.log(postRes)

      } catch(err) {

        // 通过 err.message 获取到错误信息
        console.log(err.message)
      }
      

    },


    // 非异步请求
    getResult() {

      let param = { name: 'cy', pass: '123' }

      // get 请求
      requestMethods('/getHomeInfo', 'get', param).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err.message)
      })      


      // post 请求
      requestMethods('/getMoodList', 'post', param).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err.message)
      })   

    }

  },
  mounted() {

    // 存入 token
    window.sessionStorage.setItem('AccToken', 'Kf0DxofLeKr52qP79IXSHQ==')
    
    // 调用请求接口方法
    // this.getData()
    // this.getResult()

  }
}
</script>

