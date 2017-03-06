<template>
  <div class="main-container back-rl">
    <form class="pure-form pure-form-stacked" v-on:submit.prevent="doLogin" id="login-form">
    <fieldset>
      <div class="form-content">
        <h4 class="login-form-title">登录</h4>

        <div>
          <img class="login-user" src="../assets/img/login-user.png">
          <input id="login-phone" v-model="user.phone" type="text" placeholder="手机号">
        </div>

        <div>
          <img class="login-pwd" src="../assets/img/login-pwd.png">
          <input id="login-password" v-model="user.password" type="password" placeholder="密码">
        </div>

        <button type="submit" class="pure-button pure-button-primary">登录</button>
        <p v-if="error" class="login-error">{{error}}</p>

        <div class="login-bottom">
          <a class="login-reg" href="/register">新用户注册</a>
          <a class="login-forget-pwd" href="/pwd_retrieve">忘记密码</a>
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

  export default {
    methods: {
      getRedirect(search) {
        const parsed = queryString.parse(search)
        return parsed.redirect || '/index'
      },

      doLogin() {
        if (!this.errorCheck())
          return

        let formData = new FormData()
        formData.append('phone', this.user.phone)
        formData.append('password', this.user.password)
        this.$http.post(conf.host + '/user/login', formData).then(response => {
          let result = response.body
          if (result.code) {
            this.error = result.msg
          } else {
            let redirect = this.getRedirect(location.search)
            location.href = redirect
          }
        }, response => {
          console.log(response)
          this.error = '发生错误，请稍后再试'
        })
      },

      errorCheck() {
        this.error = null
        if (!this.user.phone || !this.user.password ||
            !this.user.phone.trim()) {
          this.error = '手机号和密码不能为空'
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
        },
        error: null,
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