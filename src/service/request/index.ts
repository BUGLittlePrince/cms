import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HHRequestInterceptors, HHRequestConfig } from './type'
import { ElLoading, ILoadingInstance } from 'element-plus/lib/components'

const DEAFAULT_LOADING = true

class HHRequest {
  instance: AxiosInstance
  interceptors?: HHRequestInterceptors
  isShowLoading: boolean
  loading?: ILoadingInstance

  constructor(config: HHRequestConfig) {
    // 1.创建axios实例
    this.instance = axios.create(config)

    // 2.保存基本信息
    this.interceptors = config.interceptors
    this.isShowLoading = config.isShowLoading ?? DEAFAULT_LOADING

    // 3.使用拦截器
    // 从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例的拦截器，请求成功拦截')
        if (this.isShowLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '数据正在加载',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      (err) => {
        console.log('所有实例的拦截器，请求失败拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例的拦截器，响应成功拦截')
        this.loading?.close()
        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败，错误信息')
        } else {
          return data
        }
      },
      (err) => {
        this.loading?.close()
        if (err.response.status === 404) {
          console.log('404错误~')
        }
        return err
      }
    )
  }

  request<T>(config: HHRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 2.判断是否需要显示loading
      if (config.isShowLoading === false) {
        this.isShowLoading = config.isShowLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          console.log(res)

          // 2.将showLoading设置为true，这样就不会影响下一次请求
          this.isShowLoading = DEAFAULT_LOADING

          // 3.将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          // 将showLoading设置为true，这样就不会影响下一次请求
          this.isShowLoading = DEAFAULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: HHRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: HHRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: HHRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: HHRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default HHRequest
