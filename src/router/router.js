import index from './../index.vue'
import jsxq from './../jsxq.vue'
import content from './../content.vue'
import xqsb from './../xqsb.vue'
import gyw from './../gyw.vue'

const routes = [
  { path: '/', component: index },
  { path: '/jsxq', component: jsxq },
  { path: '/xqsb', component: xqsb },
  { path: '/gyw', component: gyw },
  { path: '/content/:id' , component: content }
]

export default routes;
