import index from './../index.vue'
import jsxq from './../jsxq.vue'
import content from './../content.vue'

const routes = [
  { path: '/', component: index },
  { path: '/jsxq', component: jsxq },
  { path: '/content/:id' , component: content }
]

export default routes;
