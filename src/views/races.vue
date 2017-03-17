<template>
  <div class="main-container">
    <section class="page-title page-title-3 image-bg overlay parallax">
      <div class="background-image-holder" v-bind:class="{fadeIn: isFadeIn}" v-bind:style="{background: 'url(' + holderBackgroundUrl + ')', 'background-position': backgroundPosition, transform: 'translate3d(0px,' + holderTranslateY + ',0px)'}">
        <img alt="Background Image" class="background-image" src="../assets/img/ceping.jpg" v-bind:style="{display: isNone}">
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <h3 class="uppercase mb0">{{title}}</h3>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <h4 class="uppercase mb16">{{desc1}}</h4>
            <p class="lead mb64">
              {{desc2}}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <div class="pricing-table pt-2 text-center">
              <h5 class="uppercase">{{race1}}</h5>
              <span class="price">$30,000</span>
              <a class="btn btn-filled btn-lg" href="#">{{rbegin}}</a>
              <ul>
                <li><b>{{rtime}}:</b>2016/05/01</li>
                <li><b>{{rscore}}</b>:97.34%</li>
                <li>
                  <strong>{{rscoretime}}</strong>:2016/05/26
                </li>
                <li>
                  <strong>{{rmembers}}</strong>:5132
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="pricing-table pt-2 text-center">
              <h5 class="uppercase">{{race2}}</h5>
              <span class="price">$30,000</span>
              <a class="btn btn-filled btn-lg" href="#">{{rbegin}}</a>
              <ul>
                <li><b>{{rtime}}</b> 2016/05/01
                </li>
                <li>
                  <strong>{{rscore}}</strong>:97.34%
                </li>
                <li><strong>{{rscoretime}}</strong>:2016/05/26</li>
                <li><strong>{{rmembers}}</strong>:5132</li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="pricing-table pt-2 text-center">
              <h5 class="uppercase">{{race3}}</h5>
              <span class="price">$30,000</span>
              <a class="btn btn-filled btn-lg" href="#">{{rbegin}}</a>
              <ul>
                <li><b>{{rtime}}</b> 2016/05/01
                </li>
                <li>
                  <strong>{{rscore}}</strong>:97.34%
                </li>
                <li><strong>{{rscoretime}}</strong>:2016/05/26</li>
                <li><strong>{{rmembers}}</strong>:5132</li>
              </ul>
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
          this.holderTranslateY = (100 * (window.pageYOffset / document.body.scrollHeight)) + 'px'
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
        title: i18n.races.title[i18n.lang],
        desc1: i18n.races.desc1[i18n.lang],
        desc2: i18n.races.desc2[i18n.lang],
        race1: i18n.races.race1[i18n.lang],
        race2: i18n.races.race2[i18n.lang],
        race3: i18n.races.race3[i18n.lang],
        rbegin: i18n.races.rbegin[i18n.lang],
        rtime: i18n.races.rtime[i18n.lang],
        rscore: i18n.races.rscore[i18n.lang],
        rscoretime: i18n.races.rscoretime[i18n.lang],
        rmembers: i18n.races.rmembers[i18n.lang],
      }
    },
  }
</script>
<style>
.pricing-table:hover {
    background-color: #47b475;
    color: #fff;
}
.pricing-table:hover a {
    border: 2px solid #fff;
}
a.btn:hover {
    background-color: #fff;
    color: #000 !important;
}

@media screen and (max-width: 1300px) {
  .price {
    font-size: 4em !important;
    display: block !important;
  }
}
</style>