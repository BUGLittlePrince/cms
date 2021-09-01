import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HHRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface HHRequestConfig extends AxiosRequestConfig {
  interceptors?: HHRequestInterceptors
}
