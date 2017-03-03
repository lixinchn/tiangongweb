<template>
  <div class="main-container">
    <form class="pure-form pure-form-stacked" v-on:submit.prevent="doLogin" id="register-form">
    <fieldset>
      <h3>注册</h3>
<!--       <label for="username">邮箱</label>
      <input id="username" v-model="user.username" type="text" placeholder=""> -->
      <div>
        <label for="username">手机号：</label>
        <input id="username" v-model="user.username" type="text" placeholder="">
        <button v-on:click.prevent="getCode" type="submit" v-bind:class="{'code-gray': isGray}" class="pure-button pure-button-primary val-code">{{valBtn}}</button>
      </div>
      <div>
        <label for="username">验证码：</label>
        <input id="username" v-model="user.username" type="text" placeholder="">
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
        <button type="submit" class="pure-button pure-button-primary">注册</button>
      </div>
      <p v-if="error" class="register-error">{{error}}</p>
    </fieldset>
  </form>
  </div>
</template>

<script type="es6">
  export default {
    methods: {
      getCode() {
        if (this.isGray)
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
      },

      changeBtnText(text) {
        this.valBtn = text
      },

      doLogin() {
        if (!this.errorCheck())
          return

        this.$http.post('/user/register', this.user).then(response => {
          console.log(response)
        }, response => {
          console.log(response)
        })
      },

      errorCheck() {
        this.error = null
        if (!this.user.username || !this.user.password || !this.user.passwordConfirm ||
            !this.user.username.trim()) {
          this.error = '用户名和密码不能为空'
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

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.user.username)) {
          this.error = '邮箱不合法'
          return false
        }

        return true
      },
    },
    
    data() {
      return {
        user: {
          phone: null,
          password: null,
          passwordConfirm: null,
        },
        error: null,
        valBtn: '发送验证码',
        isGray: false,
      }
    },
  }
</script>
<style>
#register-form {
  /*margin: 4em;*/
  width: 50%;
  margin: 2em auto;
  box-shadow: 0px 0px 10px -1px  #888888;
  padding: 1em;
}

#register-form .code-gray {
  background-color: #C7C7C7;
  border: 2px solid #C7C7C7;
}

#register-form h3 {
  text-align: center;
}

.register-error {
  color: #ff0033;
}

#register-form input {
  width: 60%;
}

#register-form label {
  width: 15%;
  text-align: left;
  padding-left: 2em;
}

#register-form button {
  width: 60%;
}

#register-form .val-code {
  width: 22%;
  display: inline-block;
}

</style>