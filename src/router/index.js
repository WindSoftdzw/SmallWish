import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import Wish from '@/components/Wish'
import Donation from '@/components/Donation'
import CatWish from '@/components/CatWish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      neme: 'Hello',
      component: Hello
    },
    {
      path: '/wish',
      name: 'Wish',
      component: Wish
    },
    {
      path: '/donation',
      name: 'Donation',
      component: Donation
    },
    {
      path: '/catWish',
      name: 'CatWish',
      component: CatWish
    }
  ]
})
