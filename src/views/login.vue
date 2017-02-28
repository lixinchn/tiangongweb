<template>
  <div class="main-container">
    <form class="pure-form pure-form-stacked" v-on:submit.prevent="doLogin" id="login-form">
    <fieldset>
      <legend>登录</legend>
      <label for="username">邮箱</label>
      <input id="username" v-model="user.username" type="text" placeholder="">
      <label for="password">密码</label>
      <input id="password" v-model="user.password" type="password" placeholder="">
      <button type="submit" class="pure-button pure-button-primary">登录</button>
      <p v-if="error" class="login-error">{{error}}</p>
    </fieldset>
  </form>
  </div>
</template>

<script type="es6">
  export default {
    methods: {
      doLogin() {
        if (!this.errorCheck())
          return

        this.$http.post('/user/login', this.user).then(response => {
          console.log(response)
        }, response => {
          console.log(response)
        })
      },

      errorCheck() {
        this.error = null
        if (!this.user.username || !this.user.password ||
            !this.user.username.trim()) {
          this.error = '用户名和密码不能为空'
          return false
        }

        return true
      },
    },

    data() {
      return {
        user: {
          username: null,
          password: null,
        },
        error: null,
      }
    },
  }
</script>
<style>
#login-form {
  margin: 5em 8em;
}

#login-form legend {
  text-align: center;
}

.login-error {
  color: #ff0033;
}

</style>