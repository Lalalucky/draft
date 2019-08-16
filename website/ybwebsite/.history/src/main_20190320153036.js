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
Vue.use(ElementUI)

// 过滤器
import fliters from '@/fliter';
Object.keys(filters).forEach(key => { 
  Vue.filter(key,filters[key])
})

// 图片懒加载
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  // 请求失败时候的占位图
  error: require('./assets/images/失败.png'),
  // 请求时的等待图
  loading:require('./assets/images/等待.gif')
})

//引入animate.css自带动画
import './assets/animate/animate.css';

//预设路由
router.beforeEach((to, from, next) => { 
  window.scroll(0, 0);
  var getData = getLocalStorage("auth_key", 1000 * 60 * 60 * 24 * 7);
  if (to.meta.login) { 
    if (getData != -1) {
      next();
    } else { 
      next({
        path: '/',
        query: {redirct: to.fullPath}
      })
    }
  }
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
