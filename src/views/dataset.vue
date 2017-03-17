<template>
  <div class="main-container">
    <section class="image-bg bg-dark parallax overlay pt120 pb120">
      <div class="background-image-holder" v-bind:class="{fadeIn: isFadeIn}" v-bind:style="{background: 'url(' + holderBackgroundUrl + ')', 'background-position': backgroundPosition, transform: 'translate3d(0px,' + holderTranslateY + ',0px)'}">
        <img alt="Background Image" class="background-image" src="../assets/img/shujuji.jpg" v-bind:style="{display: isNone}">
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <h2 class="uppercase mb8">{{title}}</h2>
            <p class="lead mb40">{{desc}}</p>
            <a class="btn btn-lg btn-white mb0" href="#dataset-begin">{{start}}</a>
          </div>
        </div>
      </div>
    </section>

    <section id="dataset">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h4 class="uppercase mb80" id="dataset-begin">{{dataset}}</h4>
            <div class="tabbable">
                <ul class="nav nav-pills nav-stacked col-md-3" id="accordion">
                    <ui-collapsible v-for="panel in datasets" v-bind:title="panel.category">
                        <li v-for="dataset in panel.subs" v-bind:class="dataset.initState"><a v-bind:href="'#' + dataset.name" data-toggle="tab" v-on:click.prevent="menuClicked(dataset, $event)" class="menu-a">{{dataset.name}}</a></li>
                    </ui-collapsible>
                </ul>


                <div class="tab-content col-md-9" v-show="contentShow" id="dataset-content">
                  <div v-html="content"></div>
                  <a v-bind:href="download" v-show="downloadShow">{{download}}</a>
                  <button v-on:click.prevent="onBeforeApply" type="submit" v-show="buttonShow" class="pure-button pure-button-primary dataset-button">{{apply}}</button>
                </div>

                <div class="tab-content col-md-9" v-show="applicationShow">
                   <form class="pure-form pure-form-stacked" v-on:submit.prevent="onApply" id="application-form">
                    <fieldset>
                      <div>
                        <label for="username">{{name}}</label>
                        <input id="username" v-model="user.username" type="text" placeholder="">
                      </div>
                      <div>
                        <label for="email">{{email}}</label>
                        <input id="email" v-model="user.email" type="text" placeholder="">
                      </div>

                      <div>
                        <label for="phone">{{tel}}</label>
                        <input id="phone" v-model="user.phone" type="text" placeholder="">
                      </div>
                      <div>
                        <label for="use">{{purpose}}</label>
                        <input id="use" v-model="user.use" type="text" placeholder="">
                      </div>
                      <div>
                        <label></label>
                        <button type="submit" class="pure-button pure-button-primary" style="font-size: 1.4em">{{submit}}</button>
                      </div>
                      <p v-if="error" class="register-error">{{error}}</p>
                    </fieldset>
                  </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="es6">
  import {UiCollapsible} from 'keen-ui'
  import {conf} from '../assets/js/conf'
  import {i18n} from '../assets/js/i18n'

  export default {
    components: {
      UiCollapsible,
    },

    mounted() {
      setTimeout(() => {
        this.isFadeIn = true
      }, 200)

      this.backgroundFadeIn()
      this.scrollListener()
    },

    created() {
      this.getDataset()
    },

    methods: {
      onBeforeApply() {
        this.getUserInfo()
        this.contentShow = false
        this.applicationShow = true
      },

      getUserInfo() {
        this.$http.get(conf.host + '/user/info').then(response => {
          let result = response.body
          if (result.code) {
            location.href = '/login?redirect=' + location.href
            return
          }

          let userinfo = result.data
          this.fillUserinfo(userinfo)
        }, response => {
          console.log(response)
          // alert('发生错误，请稍后再试')
        })
      },

      fillUserinfo(userinfo) {
        if (!userinfo)
          return

        Object.keys(this.user).forEach(key => {
          if (userinfo[key])
            this.user[key] = userinfo[key]
        })
      },

      onApply() {
        if (!this.onErrorCheck())
          return

        let formData = new FormData()
        formData.append('name', this.user.name)
        formData.append('phone', this.user.phone)
        formData.append('email', this.user.email)
        formData.append('use', this.user.use)
        formData.append('id', this.chosenId)
        this.$http.post(conf.host + '/dataset/apply', formData).then(response => {
          // TODO
          console.log(response)
        }, response => {
          console.log(response)
        })
      },

      onErrorCheck() {
        if (!this.user.name || !this.user.email || !this.user.phone || !this.user.use) {
          this.error = this.errorComplete
          return false
        }
        return true
      },

      backgroundFadeIn() {
        let holder = this.$el.querySelector('.background-image-holder')
        let holderBackgroundUrl = holder.children[0].src
        this.holderBackgroundUrl = holderBackgroundUrl
        this.isNone = true
      },

      scrollListener() {
        window.onscroll = (e) => {
          this.holderTranslateY = (100 * (window.pageYOffset / document.body.scrollHeight)) + 'px'
        }
      },

      menuClicked(dataset, e) {
        // this.hideAllTabPane()
        // this.showTabPane(e.target.href.substr(e.target.href.indexOf('#')))
        this.chooseMenu(e.target)
        this.buttonShow = false
        this.content = dataset.content
        this.download = dataset.download

        // display dataset content
        if (this.content) {
          this.buttonShow = true
          this.contentShow = true
          this.applicationShow = false
          this.chosenId = dataset.id
        }

        // display sample download button
        if (this.download)
          this.downloadShow = true

        e.preventDefault()
      },

      chooseMenu(target) {
        this.removeAllMenuChosenStatus()
        target.parentElement.classList.add('chosen')
      },

      removeAllMenuChosenStatus() {
        let menuAs = document.querySelectorAll('.menu-a')
        menuAs.forEach(menuA => {
          menuA.parentElement.classList.remove('chosen')
        })
      },

      getDataset() {
        this.$http.get(conf.host + '/dataset/page').then(response => {
          let data = response.body.data
          if (!data || !data.list)
            return

          this.datasets = data.list
        }, response => {
          console.log(response)
        })
      },
    },

    data() {
      return {
        isFadeIn: false,
        holderBackgroundUrl: '',
        isNone: false,
        backgroundPosition: 'initial !important',
        holderTranslateY: '0px',
        datasets: [],
        content: '',
        buttonShow: false,
        chosenId: '',
        contentShow: true,
        applicationShow: false,
        user: {
          username: '',
          email: '',
          phone: '',
          use: '',
        },
        error: '',
        downloadShow: false,
        download: '',

        title: i18n.dataset.title[i18n.lang],
        desc: i18n.dataset.desc[i18n.lang],
        start: i18n.dataset.start[i18n.lang],
        dataset: i18n.dataset.dataset[i18n.lang],
        download: i18n.dataset.download[i18n.lang],
        apply: i18n.dataset.apply[i18n.lang],
        name: i18n.dataset.name[i18n.lang],
        email: i18n.dataset.email[i18n.lang],
        tel: i18n.dataset.tel[i18n.lang],
        purpose: i18n.dataset.purpose[i18n.lang],
        submit: i18n.dataset.submit[i18n.lang],
        errorComplete: i18n.dataset.errorComplete[i18n.lang],
      }
    },
  }
</script>
<style>
.ui-collapsible__header-content {
  color: #47b475 !important;
  font-size: 1.5em;
  font-weight: bold;
}

.ui-collapsible__header {
  background-color: #fff !important;
}

.ui-collapsible__header[aria-expanded='true'] {
  background-color: #eee !important;
}

.ui-collapsible__header:hover {
  background-color: #eee !important;
}

.ui-collapsible a {
  font-size: 1em;
}
.tab-pane {
  display: none;
}
.active {
  display: block;
}

.chosen {
  background-color: #47b475;
}

.chosen a {
  color: #fff !important;
}

.menu-a {
  display: block;
  width: 100%;
  height: 3em;
  line-height: 3em;
}

.ui-collapsible__body li {
  border-radius: 3px;
  padding-left: 1em;
}

.ui-collapsible__body li.chosen {
  background-color: #47b475 !important;
}

.ui-collapsible__body li:hover {
  background-color: #eee;
}

.dataset-button:hover {
  opacity: 0.7;
}

.dataset-button:active {
  opacity: 1;
}

.dataset-button {
  width: 20% !important;
  max-width: 60em;
  margin: 2em auto;
  display: block;
  font-size: 1.5em !important;
}

#application-form {
  margin: 1em auto;
  text-align: center;
}


#application-form input {
  width: 62%;
  background: #fff;
  border: 1px solid #c7c7c7;
}

#application-form label {
  width: 14%;
  text-align: left;
  padding-left: 2%;
  min-width: 6em;
}

#application-form button {
  width: 62%;
}

#dataset-content {
  padding-left: 2em;
}

</style>