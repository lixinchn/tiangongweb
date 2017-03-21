<template>
  <div class="main-container back-rl">
    <form class="pure-form pure-form-stacked" v-on:submit.prevent="doRegister" id="register-form">
    <fieldset>
      <h4>{{title}}</h4>
<!--       <label for="username">邮箱</label>
      <input id="username" v-model="user.username" type="text" placeholder=""> -->
      <div>
        <label for="phone">{{phone}}</label>
        <input id="username" name="username" v-model="user.phone" type="text" placeholder="">
        <button v-on:click.prevent="onGetVerificationCode" type="button" v-bind:class="{'code-gray': isGray}" class="pure-button pure-button-primary val-code" style="font-size: 1em;">{{valBtn}}</button>
      </div>

      <div>
        <label for="password">{{password}}</label>
        <input id="password" v-model="user.password" type="password" placeholder="">
      </div>
      <div>
        <label for="passwordConfirm">{{passwordConfirm}}</label>
        <input id="passwordConfirm" v-model="user.passwordConfirm" type="password" 
      placeholder="">
      </div>

      <div>
        <label for="verificationCode">{{authcode}}</label>
        <input id="verificationCode" v-model="user.verificationCode" type="text" placeholder="">
      </div>

      <div>
        <label></label>
        <button type="submit" class="pure-button pure-button-primary" style="font-size: 1.4em">{{title}}</button>
      </div>
      <p v-if="error" class="register-error">{{error}}</p>

      <div class="register-bottom">
          <a class="register-login" href="/login">{{login}}</a>
          <div style="clear: both;"></div>
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
        const parsed = queryString.parse(search)
        return parsed.redirect || '/index'
      },

      onGetVerificationCode() {
        if (this.isGray)
          return

        if (!this.errorCheckBeforeVerificationCode())
          return

        this.isGray = true
        let countdown = 60
        this.changeBtnText(countdown + this.second)

        let intervalId = setInterval(() => {
          --countdown
          let text = countdown + this.second
          if (countdown < 0) {
            text = this.sendAuthCode
            this.isGray = false
            clearInterval(intervalId)
          }
          this.changeBtnText(text)
        }, 1000)

        // 获取验证码
        this.getVerificationCode(this.user.phone)
      },

      errorCheckBeforeVerificationCode() {
        this.error = null
        if (!this.user.phone) {
          this.error = this.errorPhoneEmpty
          return false
        }

        if (this.user.phone.length !== 11) {
          this.error = this.errorPhoneInvalid
          return false
        }
        return true
      },

      getVerificationCode(phone) {
        let formData = new FormData()
        formData.append('phone', this.user.phone)
        this.$http.post(conf.randCode, formData).then(response => {
          console.log(response)
        }, response => {
          console.log(response)
          this.error = this.errorTitle
        })
      },

      changeBtnText(text) {
        this.valBtn = text
      },

      doRegister() {
        if (!this.errorCheckBeforeReg())
          return

        let formData = new FormData()
        formData.append('phone', this.user.phone)
        formData.append('password', this.user.password)
        formData.append('randcode', this.user.verificationCode)
        this.$http.post(conf.register, formData).then(response => {
          let result = response.body
          if (result.code === 1) { // error
            this.error = result.msg
          } else { // success
            let redirect = this.getRedirect(location.search)
            // location.href = redirect
          }
        }, response => {
          console.log(response)
          this.error = this.errorTitle
        })
      },

      errorCheckBeforeReg() {
        this.error = null
        if (!this.user.phone || !this.user.password || !this.user.passwordConfirm ||
            !this.user.phone.trim()) {
          this.error = this.errorTP
          return false
        }

        if (!this.user.verificationCode) {
          this.error = this.errorAuthCode
          return false
        }

        if (this.user.password !== this.user.passwordConfirm) {
          this.error = this.errorSamePassword
          return false
        }

        if (this.user.password.length < 6) {
          this.error = this.errorLength
          return false
        }

        // if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.user.username)) {
        //   this.error = '邮箱不合法'
        //   return false
        // }

        return true
      },
    },
    
    data() {
      return {
        user: {
          phone: null,
          password: null,
          passwordConfirm: null,
          verificationCode: null,
        },
        error: null,
        valBtn: i18n.register.sendAuthCode[i18n.lang],
        isGray: false,

        title: i18n.register.title[i18n.lang],
        phone: i18n.register.phone[i18n.lang],
        password: i18n.register.password[i18n.lang],
        passwordConfirm: i18n.register.passwordConfirm[i18n.lang],
        authcode: i18n.register.authcode[i18n.lang],
        login: i18n.register.login[i18n.lang],
        second: i18n.register.second[i18n.lang],
        sendAuthCode: i18n.register.sendAuthCode[i18n.lang],
        errorPhoneEmpty: i18n.register.errorPhoneEmpty[i18n.lang],
        errorPhoneInvalid: i18n.register.errorPhoneInvalid[i18n.lang],
        errorTitle: i18n.register.errorTitle[i18n.lang],
        errorTP: i18n.register.errorTP[i18n.lang],
        errorAuthCode: i18n.register.errorAuthCode[i18n.lang],
        errorSamePassword: i18n.register.errorSamePassword[i18n.lang],
        errorLength: i18n.register.errorLength[i18n.lang],
      }
    },
  }
</script>
<style>
.back-rl {
  background: url(../assets/img/back_rl.png) no-repeat;
  background-size: cover;
}

#register-form {
  /*margin: 4em;*/
  width: 60%;
  margin: 5em auto;
  box-shadow: 0px 0px 10px -1px  #888888;
  padding: 1em;
  background: #fff;
}

#register-form .code-gray {
  background-color: #C7C7C7 !important;
  border: 2px solid #C7C7C7 !important;
}

#register-form h4 {
  text-align: center;
}

.register-error {
  color: #ff0033;
}

#register-form input {
  width: 62%;
  background: #fff;
  border: 1px solid #c7c7c7;
}

#register-form label {
  width: 14%;
  text-align: left;
  padding-left: 2%;
  min-width: 6em;
}

#register-form button {
  width: 62%;
}

#register-form .val-code {
  width: 20%;
  display: inline-block;
  margin-left: 2%;
  min-width: 6em;

  height: 50px;
  line-height: 48px;
  border: 2px solid #47b475;
  background: #47b475;
  color: #fff;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  border-radius: 0 !important;
}

.register-bottom {
  width: 100%;
}

.register-login {
  padding-left: 2%;
  cursor: pointer;
}

</style>