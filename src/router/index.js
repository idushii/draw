import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav'
import Paper from '@/components/Paper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Paper',
      component: Paper
    }
  ]
})
