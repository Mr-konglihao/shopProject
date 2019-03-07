import Vue from 'vue'
import Router from 'vue-router'
let list=()=>import('@/pages/list')
import login from '@/pages/login'
import detail from '@/pages/detail'
import shopcar from '@/pages/shopcar'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component:list
    },
    {
      path: '/detail',
      component:detail
    },
    {
      path: '/login',
      component:login
    },
    {
      path: '/shopcar',
      component:shopcar
    },
  ]
})
