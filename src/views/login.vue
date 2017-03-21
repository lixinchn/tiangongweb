<template>
  <div class="main-container back-rl">
    <form class="pure-form pure-form-stacked" v-on:submit.prevent="doLogin" id="login-form">
    <fieldset>
      <div class="form-content">
        <h4 class="login-form-title">{{title}}</h4>

        <div>
          <img class="login-user" src="../assets/img/login-user.png">
          <input id="login-phone" v-model="user.phone" type="text" v-bind:placeholder="phone">
        </div>

        <div>
          <img class="login-pwd" src="../assets/img/login-pwd.png">
          <input id="login-password" v-model="user.password" type="password" v-bind:placeholder="password">
        </div>

        <button type="submit" class="pure-button pure-button-primary">{{login}}</button>
        <p v-if="error" class="login-error">{{error}}</p>

        <div class="login-bottom">
          <a class="login-reg" href="/register">{{register}}</a>
          <a class="login-forget-pwd" href="/pwd_retrieve">{{forget}}</a>
          <div style="clear: both;"></div>
        </div>
      </div>
    </fieldset>
  </form>
  </div>
</template>

<script type="es6">
  import {conf} from '../assets/js/conf'
  import queryString from 'query-string'
  import {i18n} from '../assets/js/i18n'

  export default {
    methods: {
      getRedirect(search) {
        return this.redirect || '/index'
      },

      doLogin() {
        if (!this.errorCheck())
          return

        let formData = new FormData()
        formData.append('phone', this.user.phone)
        formData.append('password', this.user.password)
        this.$http.post(conf.login, formData).then(response => {
          let result = response.body
          if (result.code) {
            this.error = result.msg
          } else {
            let redirect = this.getRedirect(location.search)
            location.href = redirect
          }
        }, response => {
          console.log(response)
          this.error = this.errorTitle
        })
      },

      errorCheck() {
        this.error = null
        if (!this.user.phone || !this.user.password ||
            !this.user.phone.trim()) {
          this.error = this.errorTP
          return false
        }

        return true
      },
    },

    created() {
      const parsed = queryString.parse(location.search)
      this.redirect = parsed.redirect
    },

    data() {
      return {
        user: {
          phone: null,
          password: null,
        },
        error: null,
        redirect: '',

        title: i18n.login.title[i18n.lang],
        phone: i18n.login.phone[i18n.lang],
        password: i18n.login.password[i18n.lang],
        login: i18n.login.login[i18n.lang],
        register: i18n.login.register[i18n.lang],
        forget: i18n.login.forget[i18n.lang],
        errorTitle: i18n.login.errorTitle[i18n.lang],
        errorTP: i18n.login.errorTP[i18n.lang],
      }
    },
  }
</script>
<style>
#login-form {
  width: 50%;
  margin: 2em auto;
  background: #fff;
  box-shadow: 0px 0px 10px -1px  #888888;
  padding: 1em;
}

#login-form legend {
  text-align: center;
}

.login-error {
  color: #ff0033;
}

#login-form input {
  width: 80%;
  background: #fff;
  border: 1px solid #c7c7c7;
}

#login-form label {
  width: 14%;
  text-align: left;
  padding-left: 2%;
}

#login-form button {
  width: 80%;
  margin-bottom: 1em;
  font-size: 1em;
}

.login-error {
  width: 80%;
  text-align: left;
  margin: 0 auto;
}

.form-content {
  margin: 0 auto;
  text-align: center;
}

.login-form-title {
  margin: 1em 0;
  font-weight: bold;
}

#login-phone {
  padding-left: 3.3em;
  margin-right: 1.5em;
}

#login-password {
  padding-left: 3.3em;
  margin-right: 1.5em;
}

.login-user {
  position: relative;
  left: 3em;
  width: 1.5em;
}

.login-pwd {
  position: relative;
  left: 3em;
  width: 1.5em;
}

.login-bottom {
  width: 80%;
  margin: 0 auto;
}

.login-reg {
  float: left;
}

.login-forget-pwd {
  float: right;
  color: #292929;
  opacity: 0.5;
}

</style>