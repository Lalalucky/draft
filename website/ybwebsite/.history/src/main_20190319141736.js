import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

//初始的css
import './assets/base.css';

//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

//过滤器
import fliter from '@/fliter';
Object.keys(filter).forEach(key => { 
  Vue.filter(key,filters[key])
})



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
