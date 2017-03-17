<template>
  <div class="module-group right">
    <div class="module left">
      <ul class="menu">
        <li><a href="index">{{index}}</a></li>
        <li><a href="dataset">{{dataset}}</a></li>
        <li><a href="about_us">{{aboutUs}}</a></li>
        <li><a href="races">{{race}}</a></li>
        <li v-show="loginShow"><a v-bind:href="loginHref">{{loginText}}</a></li>
      </ul>
    </div>

    <div class="module widget-handle language left">
      <ul class="menu lang-menu">
        <li class="has-dropdown" v-on:click="toggleDropdown">
          <a href="#">{{zh}}</a>
          <ul v-bind:style="{visibility: visibility, display: display}">
            <li><a href="#">{{en}}</a></li>
          </ul>        
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="es6">
  import {conf} from '../../assets/js/conf'
  import {i18n} from '../../assets/js/i18n'

  export default {
    name: 'head-nav-list',
    data() {
      return {
        visibility: 'initial',
        display: 'none',
        loginHref: '',
        loginText: '',
        loginShow: false,

        index: i18n.head.index[i18n.lang],
        dataset: i18n.head.dataset[i18n.lang],
        aboutUs: i18n.head.aboutUs[i18n.lang],
        race: i18n.head.race[i18n.lang],
        login: i18n.head.login[i18n.lang],
        zh: i18n.head.zh[i18n.lang],
        en: i18n.head.en[i18n.lang],
      }
    },

    created() {
      this.$http.get(conf.host + '/user/info').then(response => {
        let result = response.body
        this.loginShow = true
        if (result.code) {
          console.log(this.login)
          this.loginHref = 'login'
          this.loginText = this.login
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