import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import store from './store'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'


createApp(App)
.use(store)
.use(router)
.mount('#app')
