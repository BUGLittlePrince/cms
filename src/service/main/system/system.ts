import hhRequest from '@/service'
import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return hhRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
