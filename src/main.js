import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import "@/assets/scss/style.scss"


const store = createStore({
    state() {
        return {
            
        }
    },
    mutations: {
       
    }
})


const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(store)