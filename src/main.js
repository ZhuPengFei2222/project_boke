import Vue from 'vue'
import vuex from 'vuex'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import app from './app.vue'
import Axios from 'axios'
import Vueaxios from 'vue-axios'
import routers from './router/router'
import './assets/css/style.css'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI);
Vue.use(Vueaxios,Axios);
Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  mode:'history',
  routes : routers // (缩写) 相当于 routes: routes
})

new Vue({    
  render: h => h(app),
  router
}).$mount('#app')
