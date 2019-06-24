// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'// 引入初始化样式
import '@/views/globalStyle/init.scss' // 引入自己的样式
import $axios from './utils/index'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use($axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
