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
    path:'/ringtone',component:require('../views/ringtone')
  },{
    path:'/singer',component:require('../views/singer')
  },{
    path:'*',redirect:'/index'
  }]
})


export default route;