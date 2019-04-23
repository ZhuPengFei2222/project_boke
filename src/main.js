import Vue from 'vue'
import ElementUI from 'element-ui'
import app from './app.vue'
import Axios from 'axios'
import Vueaxios from 'vue-axios'
import router from './router/router'
import store from './vuex/vuex'
import './assets/css/style.css'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'

Vue.use(ElementUI);
Vue.use(Vueaxios,Axios);
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

new Vue({     
  router,
  store,
  render: h => h(app),
}).$mount('#app')
