import axios from 'axios'
import { BASE_URL, TIME_OUT } from './config'

import localCache from '@/utils/cache'

import { Loading } from 'element-ui'

const DEAFULT_LOADING = true

export default function boRequest(config) {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT
  })
  let showLoading = config.showLoading ? config.showLoading : DEAFULT_LOADING

  let loading

  const interceptors = config.interceptors

  if (interceptors) {
    instance.interceptors.request.use(
      interceptors.requestInterceptor,
      interceptors.requestInterceptorCatch
    )
    instance.interceptors.response.use(
      interceptors.responseInterceptor,
      interceptors.responseInterceptorCatch
    )
  }
  //请求拦截和响应拦截
  instance.interceptors.request.use(
    (config) => {
      // 携带token的拦截
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      // 添加loading
      if (showLoading) {
        loading = Loading.service({
          lock: true,
          text: '正在请求数据....',
          background: 'rgba(0, 0, 0, 0.5)'
        })
      }
      return config
    },
    (err) => {
      return err
    }
  )
  instance.interceptors.response.use(
    (res) => {
      // 将loading移除
      loading.close()
      const data = res.data
      return data
    },
    (err) => {
      // console.log('所有的实例都有的拦截器: 响应失败拦截')

      // 将loading移除
      loading.close()

      // 例子: 判断不同的HttpErrorCode显示不同的错误信息
      return err
    }
  )
  //axios.create的返回值是一个promise对象！
  return instance(config)
}
