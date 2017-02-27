<template>
  <div class="main-container">
    <form class="pure-form pure-form-stacked" v-on:submit.prevent="doLogin" id="register-form">
    <fieldset>
      <legend>注册</legend>
      <label for="username">邮箱</label>
      <input id="username" v-model="user.username" type="text" placeholder="">
      <label for="password">密码</label>
      <input id="password" v-model="user.password" type="password" placeholder="">
      <label for="password">密码确认</label>
      <input id="passwordConfirm" v-model="user.passwordConfirm" type="password" placeholder="">
      <button type="submit" class="pure-button pure-button-primary">注册</button>
      <p v-if="error" class="register-error">{{error}}</p>
    </fieldset>
  </form>
  </div>
</template>

<script type="es6">
  export default {
    methods: {
      doLogin() {
        this.errorCheck()

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
          return
        }

        if (this.user.password !== this.user.passwordConfirm) {
          this.error = '两次输入的密码必须一致'
          return
        }

        if (this.user.password.length < 6) {
          this.error = '密码必须大于等于6位'
          return
        }

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.user.username)) {
          this.error = '邮箱不合法'
          return
        }
      },
    },
    
    data() {
      return {
        user: {
          username: null,
          password: null,
          passwordConfirm: null,
        },
        error: null,
      }
    },
  }
</script>
<style>
#register-form {
  margin: 5em;
}

#register-form legend {
  text-align: center;
}

.register-error {
  color: #ff0033;
}

</style>