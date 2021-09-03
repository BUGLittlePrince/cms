import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HHRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface HHRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HHRequestInterceptors<T>
  isShowLoading?: boolean
}
