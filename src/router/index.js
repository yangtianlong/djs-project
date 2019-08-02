import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import Home from '@/page/Home'

Vue.use(Router)

export default new Router({
  routes: [
    //首页
    {
      path: '/',
      name: '',
      component: layout,
      redirect:'/home',
      children: [{
        path: "/home",
        component: Home
      }]
    }
  ]
})
