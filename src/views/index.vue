<template>
  <div class="main-container">
    <section class="image-edge">
      <div class="col-md-6 col-sm-4 p0">
        <img alt="Screenshot" class="mb-xs-24 pull-right" src="../assets/img/3_animated_icons.gif">
      </div>
      <div class="container">
          <div class="col-md-5 col-md-offset-1 col-sm-7 col-sm-offset-1 right">
            <h3 class="mb-xs-16">{{title}}</h3>
            <h6 class="uppercase mb16">{{desc}}</h6>
            <div class="widget">
              <div class="news-title">
                <img src="../assets/img/news_icon.png" class="news_icon">
                <p>{{newsTitle}}</p>
                <a href="/news_list" style="float: right;">{{more}}</a>
                <div style="clear:both;"></div>
              </div>
              <hr>
              <ul class="link-list recent-posts">
                <li v-for="item in news">
                  <a v-bind:href="'/news_content?id=' + item.id" style="cursor: pointer">{{item.title}}</a>
                  <span class="date">
                    <span class="number">{{item.date}}</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </section>

    <section class="image-bg overlay parallax">
      <div class="background-image-holder" v-bind:class="{fadeIn: isFadeIn}" v-bind:style="{background: 'url(' + holderBackgroundUrl + ')', 'background-position': backgroundPosition, transform: 'translate3d(0px,' + holderTranslateY + ',0px)'}">
        <img alt="Background" class="background-image" src="../assets/img/nav_idx.jpg" v-bind:style="{display: isNone}">
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <h2 class="mb16"> </h2>
            <p class="lead mb64"> </p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="feature feature-1 boxed">
              <a href="dataset">
                <div class="text-center">
                  <i class="icon ti ti-bar-chart"></i>
                  <h3 class="uppercase">{{dataset}}</h3>
                </div>
              </a>
              <p> </p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="feature feature-1 boxed">
              <a href="races">
                <div class="text-center">
                  <i class="ti-infinite icon"></i>
                  <h3 class="uppercase">{{race}}</h3>
                </div>
              </a>
              <p> </p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="feature feature-1 boxed">
              <a href="about_us">
                <div class="text-center">
                  <i class="ti-heart icon"></i>
                  <h3 class="uppercase">{{aboutUs}}</h3>
                </div>
              </a>
              <p> </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h1 class="text-center">{{research}}</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <h2 class="number">2008</h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>
          </div>
          <div class="col-sm-4">
            <h2 class="number">150+</h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>
          </div>
          <div class="col-sm-4">
            <h2>Millions</h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="es6">
  import {transferDate} from '../assets/js/util'
  import {conf} from '../assets/js/conf'
  import {i18n} from '../assets/js/i18n'

  export default {
    data() {
      return {
        msg: 'test',
        isFadeIn: false,
        holderBackgroundUrl: '',
        isNone: false,
        backgroundPosition: 'initial !important',
        holderTranslateY: '0px',
        news: [],

        title: i18n.index.title[i18n.lang],
        desc: i18n.index.desc[i18n.lang],
        newsTitle: i18n.index.newsTitle[i18n.lang],
        more: i18n.index.more[i18n.lang],
        dataset: i18n.index.dataset[i18n.lang],
        race: i18n.index.race[i18n.lang],
        aboutUs: i18n.index.aboutUs[i18n.lang],
        research: i18n.index.research[i18n.lang],
      }
    },

    mounted() {
      this.fetchAndRenderNews()
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
          this.holderTranslateY = (600 * (window.pageYOffset / document.body.scrollHeight)) + 'px'
        }
      },

      fetchAndRenderNews() {
        let url = conf.latestNews + `?lang=${i18n.lang}`
        this.$http.get(url).then(response => {
          let news = response.body
          news.forEach((item, index, news) => {
            news[index] = Object.assign({
              'date': transferDate(item.time)
            }, item)
          })
          this.news = news.slice(0, 3)
        }, response => {
          console.log(response)
        })
      },
    }
    
  }
</script>
<style>
.news_title {
  display: table-cell;
}

.news-title img {
  height: 1.8em;
  float: left;
  margin-right: 0.7em;
  margin-bottom: 0.5em;
}

.news-title p {
  font-size: 1.6em;
  font-weight: 400;
  float: left;
  margin: 0;
}

</style>