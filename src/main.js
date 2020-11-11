import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


localStorage.getItem("todos") == null
? 0
: localStorage.setItem(
    "id",
    JSON.parse(localStorage.getItem("todos")).lastIndexOf() +
      JSON.parse(localStorage.getItem("todos")).length
  )