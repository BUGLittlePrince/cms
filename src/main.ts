import { createApp } from 'vue'
import { globalRegister } from './global'
import { setupStore } from '@/store/index'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)

// registerApp(app)
app.use(globalRegister)
app.use(store)
// 防止浏览器刷新以后，vuex中缓存的数据清空
setupStore()

// path => user
app.use(router)

app.mount('#app')
