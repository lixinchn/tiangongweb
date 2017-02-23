// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import './assets/css/style.css'
import './assets/css/font-awesome.min.css'
import './assets/css/themify-icons.css'
import './assets/css/flexslider.css'
import './assets/css/bootstrap.css'
// import './assets/css/lightbox.min.css'
// import './assets/css/ytplayer.css'
// import 'vue-strap'
import './assets/css/theme.css'
import './assets/css/custom.css'



Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
