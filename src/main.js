import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import "@/assets/scss/style.scss"
// import axios from 'axios'


// const store = createStore({
    
//     state() {
//         return {
            
//         }
//     },
//     mutations: {
       
//     },  
//     getters(){

//     },
//     data(){
//         return{
//             suggestedProducts: "",
//         }
//     },
//     created() {
//         axios
//           .get('https://fakestoreapi.com/products?limit=10')
//           .then(response => (
//             this.suggestedProducts = response.data
//           ));
//       }
// })


const app = createApp(App)
app.use(router)
app.mount('#app')
// app.use(store)