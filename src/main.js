import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import './assets/main.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons'

const app = createApp(App)

app.use(router)

app.mount('#app')

// za trazilicu
/* app.use("/script", express.static('@/services/script.js')); */

/* Vue.loadScript("https://jsonplaceholder.typicode.com/users") */