import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DEFAULT_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

// utc转化时间
export function formatUtsString(
  utcString: string,
  format: string = DEFAULT_TIME_FORMAT
) {
  return dayjs.utc(utcString).format(format)
}

// 时间戳转化时间
export function formatTimestamp(
  timestamp: number,
  format: string = DEFAULT_TIME_FORMAT
) {
  return dayjs(timestamp).format(format)
}
