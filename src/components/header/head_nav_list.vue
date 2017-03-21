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
          <!-- <ul v-bind:style="{visibility: visibility, display: display}"> -->
          <a href="#" v-bind:style="{display: zhDisplay}">{{zh}}</a>
          <a href="#" v-bind:style="{display: enDisplay}">{{en}}</a>
          <!-- </ul>         -->
          <ul v-bind:style="{display: endDisplay}">
            <li><a href="#" v-on:click.prevent="toggleLang('en')">{{en}}</a></li>
          </ul>
          <ul v-bind:style="{display: zhdDisplay}">
            <li><a href="#" v-on:click.prevent="toggleLang('zh')">{{zh}}</a></li>
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
        // visibility: 'initial',
        zhDisplay: i18n.lang === 'zh' ? 'block' : 'none',
        enDisplay: i18n.lang === 'en' ? 'block' : 'none',
        endDisplay: i18n.lang === 'zh' ? 'block' : 'none',
        zhdDisplay: i18n.lang === 'en' ? 'block' : 'none',
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
      this.$http.get(conf.userInfo).then(response => {
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
        if (i18n.lang === 'zh')
          this.endDisplay = this.endDisplay === 'none' ? 'block' : 'none';
        else
          this.zhdDisplay = this.zhdDisplay === 'none' ? 'block' : 'none';
      },

      toggleLang(lang) {
        if (lang === 'en')
          i18n.setEn()
        else if (lang === 'zh')
          i18n.setZh()

        location.reload()
      },
    },
  }
</script>

<style>
/*.has-dropdown ul a {
  color: #fff !important;
}*/
</style>