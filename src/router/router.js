import Vue from 'vue'
import VueRouter from 'vue-router'

import index from './../page/index.vue'
import jsxq from './../page/jsxq.vue'
import xqsb from './../page/xqsb.vue'
import gyw from './../page/gyw.vue'
import grgd from './../page/grgd.vue'
import echart from './../page/echart.vue'
import content from './../page/content.vue'



Vue.use(VueRouter);

const routers = [
  { path: '/', component: index},
  { path: '/jsxq', component: jsxq },
  { path: '/xqsb', component: xqsb },
  { path: '/gyw', component: gyw },
  { path: '/grgd', component: grgd },
  { path: '/echart',component : echart},
  { path: '/content/:id', component: content }
]


const router = new VueRouter({
  mode:'history',
  routes : routers // (缩写) 相当于 routes: routes
})



export default router;
