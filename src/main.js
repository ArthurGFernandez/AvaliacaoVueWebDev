import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importe o Vue Router aqui

createApp(App).use(router).mount('#app');

/*
import './assets/main.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
*/