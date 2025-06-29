import { createApp } from 'vue'
import VercelAnalytics from './plugins/vercel-analytics';
import './styles/main.css'
import App from './App.vue'

const app = createApp(App)

app.use(VercelAnalytics)  // <-- registra el plugin aquí

app.mount('#app')
