import { App } from 'vue'
import { formatUtsString } from '@/utils/date-format'

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtsString(value)
    }
  }
}
