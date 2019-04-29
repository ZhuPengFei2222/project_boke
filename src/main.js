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
import VueWechatTitle from 'vue-wechat-title'; 

/*if(navigator.platform.indexOf('Win32')!=-1){ 

    import router from './router/router'

   }
   else{ 


     import router from './router/router'

} */

Vue.use(ElementUI);
Vue.use(Vueaxios,Axios);
Vue.use(VueWechatTitle);
Vue.prototype.$echarts = echarts;


//console.log(store.state.count);

Vue.config.productionTip = false

new Vue({     
  router,
  store,
  computed: {
    c_content(){
      return this.$store.state.count
    }
  },
  render: h => h(app),
}).$mount('#app')
