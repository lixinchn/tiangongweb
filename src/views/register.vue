<template>
  <div class="main-container back-rl">
    <form class="pure-form pure-form-stacked" v-on:submit.prevent="doLogin" id="register-form">
    <fieldset>
      <h4>注册</h4>
<!--       <label for="username">邮箱</label>
      <input id="username" v-model="user.username" type="text" placeholder=""> -->
      <div>
        <label for="phone">手机号：</label>
        <input id="phone" v-model="user.phone" type="text" placeholder="">
        <button v-on:click.prevent="onGetVerificationCode" type="submit" v-bind:class="{'code-gray': isGray}" class="pure-button pure-button-primary val-code" style="font-size: 1em;">{{valBtn}}</button>
      </div>
      <div>
        <label for="verificationCode">验证码：</label>
        <input id="verificationCode" v-model="user.verificationCode" type="text" placeholder="">
      </div>

      <div>
        <label for="password">密码：</label>
        <input id="password" v-model="user.password" type="password" placeholder="">
      </div>
      <div>
        <label for="password">密码确认：</label>
        <input id="passwordConfirm" v-model="user.passwordConfirm" type="password" 
      placeholder="">
      </div>
      <div>
        <label></label>
        <button type="submit" class="pure-button pure-button-primary" style="font-size: 1.4em">注册</button>
      </div>
      <p v-if="error" class="register-error">{{error}}</p>
    </fieldset>
  </form>
  </div>
</template>

<script type="es6">
  import {conf} from '../assets/js/conf'
  export default {
    methods: {
      onGetVerificationCode() {
        if (this.isGray)
          return

        if (!this.errorCheckBeforeVerificationCode())
          return

        this.isGray = true
        let countdown = 60
        this.changeBtnText(countdown + '秒后重发')

        let intervalId = setInterval(() => {
          --countdown
          let text = countdown + '秒后重发'
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

      doLogin() {
        if (!this.errorCheckBeforeReg())
          return

        this.$http.post('/user/register', this.user).then(response => {
          console.log(response)
        }, response => {
          console.log(response)
        })
      },

      errorCheckBeforeReg() {
        this.error = null
        if (!this.user.phone || !this.user.password || !this.user.passwordConfirm ||
            !this.user.phone.trim()) {
          this.error = '手机号和密码不能为空'
          return false
        }

        if (!this.user.verificationCode) {
          this.error ='验证码不能为空'
          return false
        }

        if (this.user.password !== this.user.passwordConfirm) {
          this.error = '两次输入的密码必须一致'
          return false
        }

        if (this.user.password.length < 6) {
          this.error = '密码必须大于等于6位'
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
        valBtn: '发送验证码',
        isGray: false,
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
  width: 50%;
  margin: 2em auto;
  box-shadow: 0px 0px 10px -1px  #888888;
  padding: 1em;
  background: #fff;
}

#register-form .code-gray {
  background-color: #C7C7C7;
  border: 2px solid #C7C7C7;
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
}

#register-form button {
  width: 62%;
}

#register-form .val-code {
  width: 20%;
  display: inline-block;
  margin-left: 2%;
}

</style>