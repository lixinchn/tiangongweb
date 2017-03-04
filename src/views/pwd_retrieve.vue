<template>
  <div class="main-container back-rl">
    <form class="pure-form pure-form-stacked" v-on:submit.prevent="doRetrieve" id="retr-form">
    <fieldset>
      <div class="form-content">
        <h4 class="retr-form-title">忘记密码</h4>

        <div>
          <label for="phone">手机号：</label>
          <div style="clear: both;"></div>
          <input id="phone" v-model="user.phone" type="text" placeholder="">
          <button v-on:click.prevent="onGetVerificationCode" type="submit" v-bind:class="{'code-gray': isGray}" class="pure-button pure-button-primary val-code" style="font-size: 1em;">{{valBtn}}</button>
        </div>

        <div>
          <label for="verificationCode">验证码：</label>
          <div style="clear: both;"></div>
          <input id="verificationCode" v-model="user.verificationCode" type="text" placeholder="">
        </div>

        <div style="clear: both;"></div>
        <p v-if="error" class="retr-error">{{error}}</p>
        <button type="submit" class="pure-button pure-button-primary">找回密码</button>
      </div>
    </fieldset>
  </form>
  </div>
</template>

<script type="es6">
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
            text = '发送验证码'
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
          this.error = '手机号不能为空'
          return false
        }

        if (this.user.phone.length !== 11) {
          this.error = '手机号不正确'
          return false
        }
        return true
      },

      getVerificationCode() {
        // TODO
      },

      changeBtnText(text) {
        this.valBtn = text
      },

      doRetrieve() {
        if (!this.errorCheck())
          return

        this.$http.post('/user/restpwd', this.user).then(response => {
          console.log(response)
        }, response => {
          console.log(response)
        })
      },

      errorCheck() {
        this.error = null
        if (!this.user.phone || !this.user.phone.trim()) {
          this.error = '手机号不能为空'
          return false
        }

        if (!this.user.verificationCode || !this.user.verificationCode.trim()) {
          this.error = '验证码不能为空'
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
        },
        error: null,
        valBtn: '发送验证码',
        isGray: false,
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
  background-color: #C7C7C7;
  border: 2px solid #C7C7C7;
}

#retr-form button {
  font-size: 1.2em;
}

</style>