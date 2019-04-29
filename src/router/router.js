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
  { path: '/', component: index, meta:{title:'主页'}},
  { path: '/jsxq', component: jsxq, meta:{title:'记录心情'} },
  { path: '/xqsb', component: xqsb, meta:{title:'心情随笔'} },
  { path: '/gyw', component: gyw, meta:{title:'关于我'} },
  { path: '/grgd', component: grgd, meta:{title:'个人归档'} },
  { path: '/echart',component : echart, meta:{title:'table与echart'}},
  { path: '/content/:id', component: content }
]


const router = new VueRouter({
  mode:'history',
  routes : routers // (缩写) 相当于 routes: routes
})



export default router;
