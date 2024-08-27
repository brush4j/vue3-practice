
import {createApp} from 'vue'
import App from './App.vue'

import VueAxios from "vue-axios";
import axios from "axios";
import qs from 'qs'

// 创建应用
const app = createApp(App)

app.use(VueAxios,axios)
app.use(qs)

// 挂载应用
app.mount('#app')
