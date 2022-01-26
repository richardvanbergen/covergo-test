import { createApp } from 'vue'
import { createPinia } from 'pinia'
// @ts-expect-error missing types
import Notifications from 'notiwind'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Notifications)
app.use(createPinia())
app.use(router)

app.mount('#app')
