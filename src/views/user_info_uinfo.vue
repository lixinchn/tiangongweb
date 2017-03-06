<template>
  <div class="uinfo">
    <div v-for="item in this.uinfo" class="uinfo-item">
      <p>{{item.p}}</p>
      <p>{{item.content}}</p>
      <button :disabled="item.disabled" class="pure-button" v-bind:class="item.isModify ? item.classSave : item.classModify" v-on:click="onButtonClicked(item)">{{item.button}}</button>
      <hr style="clear: both;">
    </div>
  </div>
</template>

<script type="es6">
  export default {
    name: 'uinfo',
    methods: {
      onButtonClicked(item) {
        item.isModify = !item.isModify
        item.button = item.isModify ? this.buttonTextSave : this.buttonTextModify
        // TODO: save info to server
      }
    },

    created() {
      // TODO: get info from server
      this.uinfo.forEach(item => {
        item.button = '修改'
        item.classModify = 'uinfo-modify'
        item.classSave = 'uinfo-save'
      })
    },

    data() {
      return {
        buttonTextModify: '修改',
        buttonTextSave: '保存',

        uinfo: [
         {'p': '手机', 'key': 'phone', 'content': '', 'button': '', 'classModify': '', 'classSave': '', 'isModify': false, 'disabled': true},
         {'p': '邮箱：', 'key': 'email', 'content': '', 'button': '', 'classModify': '', 'classSave': '', 'isModify': false},
        ],
      }
    },
  }
</script>
<style>
.uinfo {
  float: left;
  width: 50%;
  padding-left: 4em;
  padding-top: 1em;
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


</style>