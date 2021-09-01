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

hhRequest.request({
  url: '/home/multidata',
  method: 'GET'
})
