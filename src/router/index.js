import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const route = new VueRouter({
    mode:'history',
    routes:[{
    path:'/index',component:require('../views/index')
  },{
    path:'/dataset',component:require('../views/dataset')
  },{
    path:'/about_us',component:require('../views/about_us')
  },{
    path:'/races', component:require('../views/races')
  },{
    path:'/login', component:require('../views/login')
  },{
    path:'/register', component:require('../views/register')
  },{
    path: '/pwd_retrieve', component:require('../views/pwd_retrieve')
  },{
    path: '/user_info', component:require('../views/user_info')
  },{
    path:'*',redirect:'/index'
  }]
})


export default route;