import "@/assets/references/index.scss";
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
// import ClickOutside from "@/directives/ClickOutsideDirective"
  
const app = createApp(App)

app.use(router)

// app.directive('click-outside', ClickOutside);
app.mount('#app')