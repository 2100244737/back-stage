import axios from 'axios'
import { Message } from 'element-ui'
const fetch = axios.create({
  baseURL: process.env.BASE_URL
})
// 响应拦截
fetch.interceptors.response.use(function (response) {
  // 全局的错误处理
  if (response.data.code !== 200) {
    Message.error(response.data.msg)
  }
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export default {
  install (Vue) {
    Vue.prototype.$axios = fetch
  }
}
