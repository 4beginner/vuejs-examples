import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Example01 from '@/components/Example01'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/examples/01',
      name: 'example-01',
      component: Example01
    }
  ]
})
