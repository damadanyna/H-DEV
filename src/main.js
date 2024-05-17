import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import store from './store'
import router from './router'
import axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.css'


axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8080' 

// axios.create({
//     baseURL:'http://localhost:8080',
//     timeout:10000,
//     headers:{'Content-Type':'application/json',},
//     proxy:{
//         host:'http://localhost:8080 ',
//         port:8080
//     }
// })

const app = createApp(App)
app.use(store)
app.use(router)
app.config.globalProperties.$http = axios
app.mount('#app')
