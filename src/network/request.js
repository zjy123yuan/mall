import axios from "axios";

  export function request(config){  
    const instance = axios.create({
          // baseURL:'http://123.207.32.32:8000',
          baseURL:'http://152.136.185.210:7878/api/hy66',
          timeout:50000,
    })
    //请求拦截
    instance.interceptors.request.use( config =>{
      return config
    },err=>{
      console.log(err)
    })
    // 响应拦截
    instance.interceptors.response.use( result =>{
      //必须返回出去，不然config信息会被拦截在这里
  
      return result.data
    },err=>{
      console.log(err)
    })

    //发送真正的网络请求
    //axios返回的就是一个promis对象
    return instance(config)
}


