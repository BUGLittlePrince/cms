import hhRequest from '../index'
import { IAccount, IDataType, ILoginResult } from './type'

// 接口
enum loginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法: /users/1
  UserMenus = '/role/' //用法: /role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return hhRequest.post<IDataType<ILoginResult>>({
    url: loginApi.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return hhRequest.get<IDataType>({
    url: loginApi.LoginUserInfo + id,
    isShowLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return hhRequest.get<IDataType>({
    url: loginApi.UserMenus + id + '/menu',
    isShowLoading: false
  })
}
