import store from '@/store'
import axios from 'axios'
import { Toast } from 'vant'

// 创建axios实例 将来对创建出来的实例，进行自定义配置
// 好处：不会污染原始的 axios 实例
const instance = axios.create({
  baseURL: 'http://smart-shop.itheima.net/index.php?s=/api',
  timeout: 5000,
  headers: { 'platform  ': 'H5' }
})
// 自定义配置 - 请求/响应 拦截器
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 对响应数据做点什么
  // 增加loading效果 禁止背景点击 （防止用户多次点击）
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    loadingType: 'spinner', // 配置loading图标
    duration: 0 // 不会自动消失
  })
  // 只要有token，就在请求时携带，便于请求需要授权的接口
  const token = store.getters.token
  if (token) {
    config.headers['Access-Token'] = token
    // config.headers.platform = 'H5'
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。

  const res = response.data
  if (res.status !== 200) {
    // 给错误提示，Toast 默认是单例模式， 后面的Toast调用了，会将前一个Toast 效果覆盖
    // 同时只能存在一个Toast
    Toast(res.message)
    return Promise.reject(res.message)
  } else {
    // 关闭Toast
    Toast.clear()
  }
  return res
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 导出配置好的配置
export default instance
