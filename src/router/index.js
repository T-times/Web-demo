import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Menu1 from '@/components/Menu1'
import User from '@/components/User'
import Zhuce from '@/components/Zhuce'
import Manage from '@/components/Manage'
import ShowChart from '@/components/ShowChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/content1',
      redirect: '/content1/zhuce',
      name: 'Menu1',
      component: Menu1,
      children:[
      {
        path: 'zhuce',
        name: 'Zhuce',
        component: Zhuce
      }]
    },
    {
      path: '/content',
      redirect: '/content/user',
      name: 'Menu',
      component: Menu,
      children: [
      {
        path: 'user',
        name: 'User',
        component: User
      },
      {
      	path: 'manage',
        name: 'Manage',
        component: Manage
      },{
        path: 'showchart',
        name: 'ShowChart',
        component: ShowChart
      }
      ]
  }
  ]
})
