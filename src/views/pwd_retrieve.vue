<template>
  <div class="main-container back-rl">
    <form class="pure-form pure-form-stacked" v-on:submit.prevent="doRetrieve" id="retr-form">
    <fieldset>
      <div class="form-content">
        <h4 class="retr-form-title">{{title}}</h4>

        <div>
          <label for="phone">{{phone}}</label>
          <div style="clear: both;"></div>
          <input id="phone" v-model="user.phone" type="text" placeholder="">
          <button v-on:click.prevent="onGetVerificationCode" type="button" v-bind:class="{'code-gray': isGray}" class="pure-button pure-button-primary val-code" style="font-size: 1em;">{{valBtn}}</button>
          <div style="clear: both;"></div>
        </div>

        <div>
          <label for="password">{{newPwd}}</label>
          <div style="clear: both;"></div>
          <input id="password" v-model="user.password" type="password" placeholder="">
          <div style="clear: both;"></div>
        </div>

        <div>
          <label for="passwordConfirm">{{reNewPwd}}</label>
          <div style="clear: both;"></div>
          <input id="passwordConfirm" v-model="user.passwordConfirm" type="password" placeholder="">
          <div style="clear: both;"></div>
        </div>

        <div>
          <label for="verificationCode">{{authCode}}</label>
          <div style="clear: both;"></div>
          <input id="verificationCode" v-model="user.verificationCode" type="text" placeholder="">
          <div style="clear: both;"></div>
        </div>

        <div style="clear: both;"></div>
        <p v-if="error" class="retr-error">{{error}}</p>
        <button type="submit" class="pure-button pure-button-primary pwd-retr-sub">{{retrievePassword}}</button>
      </div>
    </fieldset>
  </form>
  </div>
</template>

<script type="es6">
  import {conf} from '../assets/js/conf'
  import {i18n} from '../assets/js/i18n'

  export default {
    methods: {
      onGetVerificationCode() {
        if (this.isGray)
          return

        if (!this.errorCheckBeforeVerificationCode())
          return

        this.isGray = true
        let countdown = 60
        this.changeBtnText(countdown + '...')

        let intervalId = setInterval(() => {
          --countdown
          let text = countdown + '...'
          if (countdown < 0) {
            text = this.sendAuthCode
            this.isGray = false
            clearInterval(intervalId)
          }
          this.changeBtnText(text)
        }, 1000)

        // 获取验证码
        this.getVerificationCode()
      },

      errorCheckBeforeVerificationCode() {
        this.error = null
        if (!this.user.phone) {
          this.error = this.errorEP
          return false
        }

        if (this.user.phone.length !== 11) {
          this.error = this.errorERP
          return false
        }
        return true
      },

      getVerificationCode() {
        let formData = new FormData()
        formData.append('phone', this.user.phone)
        this.$http.post(conf.host + '/user/randcode', formData).then(response => {
          console.log(response)
        }, response => {
          console.log(response)
          this.error = this.errorTitle
        })
      },

      changeBtnText(text) {
        this.valBtn = text
      },

      doRetrieve() {
        if (!this.errorCheck())
          return

        let formData = new FormData()
        formData.append('phone', this.user.phone)
        formData.append('password', this.user.password)
        formData.append('randcode', this.user.verificationCode)
        this.$http.post('/user/restpwd', formData).then(response => {
          let result = response.body
          if (result.code) {
            this.error = result.msg
            return
          }

          alert(this.succTitle)
          location.href = '/login'
        }, response => {
          this.error = this.errorTitle
        })
      },

      errorCheck() {
        this.error = null
        if (!this.user.phone || !this.user.phone.trim()) {
          this.error = this.errorEP
          return false
        }

        if (!this.user.verificationCode || !this.user.verificationCode.trim()) {
          this.error = this.errorEA
          return false
        }

        if (!this.user.password || !this.user.password.trim()) {
          this.error = this.errorEPWD
          return false
        }

        if (this.user.password !== this.user.passwordConfirm) {
          this.error = this.errorREPWD
          return false
        }

        if (this.user.password.length < 6) {
          this.error = this.errorLength
          return false
        }

        return true
      },
    },

    data() {
      return {
        user: {
          phone: null,
          verificationCode: null,
          password: '',
          passwordConfirm: '',
        },
        error: null,
        valBtn: i18n.pwdRetrieve.sendAuthCode[i18n.lang],
        isGray: false,

        title: i18n.pwdRetrieve.title[i18n.lang],
        phone: i18n.pwdRetrieve.phone[i18n.lang],
        newPwd: i18n.pwdRetrieve.newPwd[i18n.lang],
        reNewPwd: i18n.pwdRetrieve.reNewPwd[i18n.lang],
        authCode: i18n.pwdRetrieve.authCode[i18n.lang],
        retrievePassword: i18n.pwdRetrieve.retrievePassword[i18n.lang],
        sendAuthCode: i18n.pwdRetrieve.sendAuthCode[i18n.lang],
        errorEP: i18n.pwdRetrieve.errorEP[i18n.lang],
        errorERP: i18n.pwdRetrieve.errorERP[i18n.lang],
        errorTitle: i18n.pwdRetrieve.errorTitle[i18n.lang],
        succTitle: i18n.pwdRetrieve.succTitle[i18n.lang],
        errorEA: i18n.pwdRetrieve.errorEA[i18n.lang],
        errorREPWD: i18n.pwdRetrieve.errorREPWD[i18n.lang],
        errorEPWD: i18n.pwdRetrieve.errorEPWD[i18n.lang],
        errorLength: i18n.pwdRetrieve.errorLength[i18n.lang],
      }
    },
  }
</script>
<style>
.retr-form-title {
  margin: 0;
  font-weight: bold;
}

#retr-form {
  width: 50%;
  margin: 2em auto;
  box-shadow: 0px 0px 10px -1px  #888888;
  padding: 3em;
  background: #fff;
  min-height: 35em;
}

#retr-form label {
  float: left;
  margin-bottom: 1em;
}

#retr-form input {
  width: 75%;
  background: #fff;
  border: 1px solid #c7c7c7;
  float: left;
}

#retr-form .val-code {
  width: 20%;
  display: inline-block;
  margin-left: 2%;
  float: right;
}

.retr-error {
  text-align: left;
  margin: 0 auto;
  color: red;
}

#retr-form .code-gray {
  background-color: #C7C7C7 !important;
  border: 2px solid #C7C7C7 !important;
}

#retr-form button {
  font-size: 1.2em;
}

#retr-form .val-code {
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

.pwd-retr-sub {
  width: 75% !important;
  float: left !important;
  margin-top: 2em !important;
}

</style>