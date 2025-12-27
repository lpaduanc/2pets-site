import { createApp } from 'vue'
// import { createHead } from '@unhead/vue' // This was failing
import { createHead } from '@unhead/vue/client'
import './styles/main.scss'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(i18n)
app.use(head)
app.mount('#app')
