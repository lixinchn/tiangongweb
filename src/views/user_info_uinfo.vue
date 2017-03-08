<template>
  <div class="uinfo">
    <div v-for="item in this.uinfo" class="uinfo-item">
      <p style="width: 5em; margin: 1.2em 0 0 0;">{{item.p}}</p>
      <input :disabled="item.contentDisabled" class="uinfo-input" type="text" style="margin: 0.6em 0; background-color: #fff; min-width: 15em; width: 70%;" v-bind:class="item.isModify ? item.inputClassSave : item.inputClassModify" v-model="item.content">
      <button :disabled="item.disabled" class="pure-button" style="margin: 1.2em 0 0 0;" v-bind:class="item.isModify ? item.classSave : item.classModify" v-on:click="onButtonClicked(item)">{{item.button}}</button>
      <hr style="clear: both;"></hr>
    </div>
  </div>
</template>

<script type="es6">
  import {conf} from '../assets/js/conf'

  export default {
    name: 'uinfo',
    methods: {
      onButtonClicked(item) {
        if (item.isModify)
          this.saveInfoToserver(item)
        item.isModify = !item.isModify
        item.contentDisabled = !item.contentDisabled
        item.button = item.isModify ? this.buttonTextSave : this.buttonTextModify
      },

      fillUserinfo(userinfo) {
        if (!userinfo)
          return

        this.uinfo.forEach(item => {
          if (userinfo[item.key]) {
            item.content = userinfo[item.key]
          }
        })
      },

      saveInfoToserver(item) {
        if (!item.content.trim())
          return
        
        let formData = new FormData()
        /*
        this.uinfo.forEach(item => {
          formData.append(item.key, item.content.trim())
        })
        */
        formData.append(item.key, item.content.trim())

        this.$http.post(conf.host + '/user/edit', formData).then(response => {
          let result = response.body
          if (result.code) {
            alert(result.msg)
            return
          }
        }, response => {
          console.log(response)
          alert('发生错误，请稍后再试')
        })
      },
    },

    created() {
      this.$http.get(conf.host + '/user/info').then(response => {
        let result = response.body
        if (result.code) {
          location.href = '/login'
          return
        }

        let userinfo = result.data
        this.fillUserinfo(userinfo)
      }, response => {
        console.log(response)
        alert('发生错误，请稍后再试')
      })

      this.uinfo.forEach(item => {
        item.button = '修改'
        item.classModify = 'uinfo-modify'
        item.classSave = 'uinfo-save'
        item.contentDisabled = true
        item.inputClassModify = 'uinfo-i-modify'
        item.inputClassSave = 'uinfo-i-save'
      })
    },

    data() {
      return {
        buttonTextModify: '修改',
        buttonTextSave: '保存',

        uinfo: [
         {'p': '手机：', 'key': 'phone', 'content': '', 'button': '', 'classModify': '', 'classSave': '', 'isModify': false, 'disabled': true},
         {'p': '邮箱：', 'key': 'email', 'content': '', 'button': '', 'classModify': '', 'classSave': '', 'isModify': false},
         {'p': '名字：', 'key': 'username', 'content': '', 'button': '', 'classModify': '', 'classSave': '', 'isModify': false},
         {'p': '地址：', 'key': 'addr', 'content': '', 'button': '', 'classModify': '', 'classSave': '', 'isModify': false},
         {'p': '所在机构：', 'key': 'company', 'content': '', 'button': '', 'classModify': '', 'classSave': '', 'isModify': false},
         {'p': '研究兴趣：', 'key': 'interest', 'content': '', 'button': '', 'classModify': '', 'classSave': '', 'isModify': false},
        ],
      }
    },
  }
</script>
<style>
.uinfo {
  float: left;
  width: 70%;
  padding-left: 4em;
  padding-top: 1em;
}

.uinfo-input {
  
}

.uinfo-item {
}

.uinfo-item p, .uinfo-item button {
  float: left;
  margin: 1em 0;
}

.uinfo-item button {
  float: right;
  margin: 1em 0;
}

.uinfo-item p {
  padding: 0.4em 0;
}

.uinfo-item hr {
  margin: 0;
}

.uinfo-item button {
  border: none;
  font-size: 1em;
  padding: 0.4em 2em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}

.uinfo-item button.uinfo-save {
  background-color: #47b475;
  color: white;
}

.uinfo-item button.uinfo-modify {
  color: #47b475;
  background-color: #fff;
}

.uinfo-item button:disabled {
  color: #000;
  opacity: 0.2;
}

.uinfo-i-modify {
  border: 0;
}

.uinfo-i-save {
  border: 1px solid #ccc !important;
}

</style>