// service统一出口
import HHRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const hhRequest = new HHRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 拦截器（ 可选类型 ）
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default hhRequest
