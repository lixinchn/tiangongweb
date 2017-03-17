<template>
  <div class="main-container">
    <section class="page-title page-title-4 image-bg overlay parallax">
      <div class="background-image-holder" v-bind:class="{fadeIn: isFadeIn}" v-bind:style="{background: 'url(' + holderBackgroundUrl + ')', 'background-position': backgroundPosition, transform: 'translate3d(0px,' + holderTranslateY + ',0px)'}">
        <img alt="Background Image" class="background-image" src="../assets/img/aboutus.jpg" v-bind:style="{display: isNone}">
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3 class="uppercase mb0">{{aboutUs}}</h3>
          </div>
          <div class="col-md-6 text-right">
            <ol class="breadcrumb breadcrumb-2">
              <li>
                <a href="#admin">{{admin}}</a>
              </li>
              <li>
                <a href="#members">{{members}}</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-primary">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-md-offset-1 text-right text-left-xs col-sm-5">
            <h1 class="uppercase mb24 bold italic">{{title1}}<br>{{title2}}</h1>
            <h5 class="uppercase italic fade-1-4">{{title3}}<br> {{title4}}</h5>
            <hr class="visible-xs">
          </div>
          <div class="col-md-5 col-sm-7">
            <h5 class="bold">{{title5}}</h5>
            <p>
              {{desc1}}
            </p>
            <p>
              {{desc2}}
            </p>
            <p>
              {{desc3}}
            </p>
            <h5 class="bold">{{title6}}</h5>
            <p>
              {{desc4}}
            </p>
            <p>
              {{desc5}}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section  class="page-title page-title-4 bg-secondary">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3 class="uppercase mb0">{{title7}}</h3>
          </div>
          <div class="col-md-6 text-right">
          </div>
        </div>
      </div>
    </section>
    <section id="admin">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <div class="image-tile outer-title text-center">
              <img alt="Pic" src="../assets/img/chengjianping.jpg">
              <div class="title mb16">
                <h5 class="uppercase mb0">{{member1}}</h5>
                <span>{{mtitle1}}</span>
              </div>
              <p class="mb0">
                {{mdesc1}}
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="image-tile outer-title text-center">
              <img alt="Pic" src="../assets/img/wangxiaochuan.jpg">
              <div class="title mb16">
                <h5 class="uppercase mb0">{{member2}}</h5>
                <span>{{mtitle2}}</span>
              </div>
              <p class="mb0">
                {{mdesc2}}
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="image-tile outer-title text-center">
              <img alt="Pic" src="../assets/img/sunmaosong.jpg">
              <div class="title mb16">
                <h5 class="uppercase mb0">{{member3}}</h5>
                <span>{{mtitle3}}</span>
              </div>
              <p class="mb0">
                {{mdesc3}}
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <div class="image-tile outer-title text-center">
              <img alt="Pic" src="../assets/img/wujianping.jpg">
              <div class="title mb16">
                <h5 class="uppercase mb0">{{member4}}</h5>
                <span>{{mtitle4}}</span>
              </div>
              <p class="mb0">
                {{mdesc4}}
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="image-tile outer-title text-center">
              <img alt="Pic" src="../assets/img/yanghongtao.jpg">
              <div class="title mb16">
                <h5 class="uppercase mb0">{{member5}}</h5>
                <span>{{mtitle5}}</span>
              </div>
              <p class="mb0">
                {{mdesc5}}
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="image-tile outer-title text-center">
              <img alt="Pic" src="../assets/img/team-3.jpg">
              <div class="title mb16">
                <h5 class="uppercase mb0">{{member6}}</h5>
                <span>{{mtitle6}}</span>
              </div>
              <p class="mb0">
                {{mdesc6}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="members">
      <div class="container">
        <div class="row mb64 mb-xs-24">
          <div class="col-md-10 col-md-offset-1 col-sm-12 text-center">
            <h3>{{title8}}</h3>
          </div>
        </div>
        <div class="row row-centered">
          <div class="col-md-4 col-sm-6 text-center col-centered">
            <div class="feature boxed cast-shadow-light">
              <img alt="Pic" class="image-small inline-block mb24" src="../assets/img/avatar1.png">
              <h4>{{member7}}</h4>
              <span>
              <strong>{{mco}}</strong> {{mtitle7}}</span>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 text-center col-centered">
            <div class="feature boxed cast-shadow-light">
              <img alt="Pic" class="image-small inline-block mb24" src="../assets/img/avatar2.png">
              <h4>{{member8}}</h4>
              <span>
              <strong>{{mco8}}</strong> {{mtitle8}}</span>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 text-center col-centered">
            <div class="feature boxed cast-shadow-light">
              <img alt="Pic" class="image-small inline-block mb24" src="../assets/img/avatar3.png">
              <h4>{{member9}}</h4>
              <span>
              <strong>{{mco9}}</strong> {{mtitle9}}</span>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 text-center col-centered">
            <div class="feature boxed cast-shadow-light">
              <img alt="Pic" class="image-small inline-block mb24" src="../assets/img/avatar3.png">
              <h4>{{member10}}</h4>
              <span>
              <strong>{{mco10}}</strong>{{mtitle10}}</span>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 text-center col-centered">
            <div class="feature boxed cast-shadow-light">
              <img alt="Pic" class="image-small inline-block mb24" src="../assets/img/avatar3.png">
              <h4>{{member11}}</h4>
              <span>
              <strong>{{mco11}}</strong> {{mtitle11}}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="es6">
  import {i18n} from '../assets/js/i18n'

  export default {
    mounted() {
      setTimeout(() => {
        this.isFadeIn = true
      }, 200)
      this.backgroundFadeIn()
      this.scrollListener()
    },

    methods: {
      backgroundFadeIn() {
        let holder = this.$el.querySelector('.background-image-holder')
        let holderBackgroundUrl = holder.children[0].src
        this.holderBackgroundUrl = holderBackgroundUrl
        this.isNone = true
      },

      scrollListener() {
        window.onscroll = (e) => {
          this.holderTranslateY = (1200 * (window.pageYOffset / document.body.scrollHeight)) + 'px'
        }
      },
    },

    data() {
      return {
        isFadeIn: false,
        holderBackgroundUrl: '',
        isNone: false,
        backgroundPosition: 'initial !important',
        holderTranslateY: '0px',
        aboutUs: i18n.aboutUs.aboutUs[i18n.lang],
        admin: i18n.aboutUs.admin[i18n.lang],
        members: i18n.aboutUs.members[i18n.lang],
        title1: i18n.aboutUs.title1[i18n.lang],
        title2: i18n.aboutUs.title2[i18n.lang],
        title3: i18n.aboutUs.title3[i18n.lang],
        title4: i18n.aboutUs.title4[i18n.lang],
        title5: i18n.aboutUs.title5[i18n.lang],
        title6: i18n.aboutUs.title6[i18n.lang],
        title7: i18n.aboutUs.title7[i18n.lang],
        title8: i18n.aboutUs.title8[i18n.lang],
        desc1: i18n.aboutUs.desc1[i18n.lang],
        desc2: i18n.aboutUs.desc2[i18n.lang],
        desc3: i18n.aboutUs.desc3[i18n.lang],
        desc4: i18n.aboutUs.desc4[i18n.lang],
        desc5: i18n.aboutUs.desc5[i18n.lang],
        member1: i18n.aboutUs.member1[i18n.lang],
        member2: i18n.aboutUs.member2[i18n.lang],
        member3: i18n.aboutUs.member3[i18n.lang],
        member4: i18n.aboutUs.member4[i18n.lang],
        member5: i18n.aboutUs.member5[i18n.lang],
        member6: i18n.aboutUs.member6[i18n.lang],
        member7: i18n.aboutUs.member7[i18n.lang],
        member8: i18n.aboutUs.member8[i18n.lang],
        member9: i18n.aboutUs.member9[i18n.lang],
        member10: i18n.aboutUs.member10[i18n.lang],
        member11: i18n.aboutUs.member11[i18n.lang],
        mtitle1: i18n.aboutUs.mtitle1[i18n.lang],
        mtitle2: i18n.aboutUs.mtitle2[i18n.lang],
        mtitle3: i18n.aboutUs.mtitle3[i18n.lang],
        mtitle4: i18n.aboutUs.mtitle4[i18n.lang],
        mtitle5: i18n.aboutUs.mtitle5[i18n.lang],
        mtitle6: i18n.aboutUs.mtitle6[i18n.lang],
        mtitle7: i18n.aboutUs.mtitle7[i18n.lang],
        mtitle8: i18n.aboutUs.mtitle8[i18n.lang],
        mtitle9: i18n.aboutUs.mtitle9[i18n.lang],
        mtitle10: i18n.aboutUs.mtitle10[i18n.lang],
        mtitle11: i18n.aboutUs.mtitle11[i18n.lang],
        mdesc1: i18n.aboutUs.mdesc1[i18n.lang],
        mdesc2: i18n.aboutUs.mdesc2[i18n.lang],
        mdesc3: i18n.aboutUs.mdesc3[i18n.lang],
        mdesc4: i18n.aboutUs.mdesc4[i18n.lang],
        mdesc5: i18n.aboutUs.mdesc5[i18n.lang],
        mdesc6: i18n.aboutUs.mdesc6[i18n.lang],
        mco7: i18n.aboutUs.mco7[i18n.lang],
        mco8: i18n.aboutUs.mco8[i18n.lang],
        mco9: i18n.aboutUs.mco9[i18n.lang],
        mco10: i18n.aboutUs.mco10[i18n.lang],
        mco11: i18n.aboutUs.mco11[i18n.lang],
      }
    },
  }
</script>
<style>
</style>