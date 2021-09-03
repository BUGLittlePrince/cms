import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import hhRequest from './service'
import { globalRegister } from './global'

const app = createApp(App)

// registerApp(app)
app.use(globalRegister)
app.use(router)
app.use(store)

app.mount('#app')

interface DataType {
  data: any
  returnCode: string
  success: boolean
}
hhRequest
  .get<DataType>({
    url: '/home/multidata',
    isShowLoading: false
  })
  .then((res) => {
    console.log(res.data)
  })
