import Vue from 'vue'
import Router from 'vue-router'
// import Hello from 'components/Hello'
import Trimps from '@/Trimps'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:      '/',
      // name:      'Hello',
      // component: Hello,
      name:      'Trimps',
      component: Trimps,
    },
  ],
})
