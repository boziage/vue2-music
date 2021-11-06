import boRequest from '../index'

import type { IAccount, ILoginResult } from './types'
import type { IDataType } from '../request/types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/' //用法：role/:id/menu
}

export function accountLoginRequest(account: IAccount) {
  return boRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function loginUserInfoRequestById(id: number) {
  return boRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function userMenusRequestById(id: number) {
  return boRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
