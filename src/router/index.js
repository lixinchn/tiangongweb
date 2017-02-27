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
    path:'*',redirect:'/index'
  }]
})


export default route;