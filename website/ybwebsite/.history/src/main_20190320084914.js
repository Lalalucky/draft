import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// 初始的css
import './assets/base.css';

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

// 过滤器
import fliter from '@/fliter';
Object.keys(filters).forEach(key => { 
  Vue.filter(key,filters[key])
})

// 图片懒加载
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  // 请求失败时候的占位图
  error: require('./assets/切图/失败.png'),
  // 请求时的等待图
  loading:require('./assets/切图/等待.gif')
})




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
