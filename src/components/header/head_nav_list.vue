<template>
  <div class="module-group right">
    <div class="module left">
      <ul class="menu">
        <li><a href="index">首页</a></li>
        <li><a href="dataset">数据集</a></li>
        <li><a href="about_us">关于我们</a></li>
        <li><a href="races">测评</a></li>
        <li v-show="loginShow"><a v-bind:href="loginHref">{{loginText}}</a></li>
      </ul>
    </div>

    <div class="module widget-handle language left">
      <ul class="menu lang-menu">
        <li class="has-dropdown" v-on:click="toggleDropdown">
          <a href="#">中文</a>
          <ul v-bind:style="{visibility: visibility, display: display}">
            <li><a href="#">English</a></li>
          </ul>        
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="es6">
  import {conf} from '../../assets/js/conf'

  export default {
    name: 'head-nav-list',
    data() {
      return {
        visibility: 'initial',
        display: 'none',
        loginHref: '',
        loginText: '',
        loginShow: false,
      }
    },

    created() {
      this.$http.get(conf.host + '/user/info').then(response => {
        let result = response.body
        this.loginShow = true
        if (result.code) {
          this.loginHref = 'login'
          this.loginText = '登录'
          return
        }

        let userinfo = result.data
        this.loginHref = 'user_info'
        this.loginText = userinfo.phone
      }, response => {
        console.log(response)
      })
    },

    methods: {
      toggleDropdown() {
        if (this.visibility == 'initial') {
          this.visibility = 'visible'
          this.display = 'block'
        } else {
          this.visibility = 'initial'
          this.display = 'none'
        }
      }
    }
  }
</script>

<style>
</style>