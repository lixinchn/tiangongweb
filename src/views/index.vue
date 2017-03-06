<template>
  <div class="main-container">
    <section class="image-edge">
      <div class="col-md-6 col-sm-4 p0">
        <img alt="Screenshot" class="mb-xs-24 pull-right" src="../assets/img/3_animated_icons.gif">
      </div>
      <div class="container">
          <div class="col-md-5 col-md-offset-1 col-sm-7 col-sm-offset-1 right">
            <h3 class="mb-xs-16">清华大学天工智能计算研究院</h3>
            <h6 class="uppercase mb16">由清华大学和搜狗公司联合建立，其也是首个校企合作的中国人工智能领域研究院。研究院将致力于人工智能领域的前沿技术研究，向世界人工智能顶级水平迈进。</h6>
            <div class="widget">
              <div class="news-title">
                <img src="../assets/img/news_icon.png" class="news_icon">
                <p>最新资讯</p>
                <a href="/news_list" style="float: right;">查看更多</a>
                <div style="clear:both;"></div>
              </div>
              <hr>
              <ul class="link-list recent-posts">
                <li v-for="item in news">
                  <a v-bind:href="item.url" style="cursor: pointer">{{item.title}}</a>
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
                  <h3 class="uppercase">数据集</h3>
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
                  <h3 class="uppercase">比赛</h3>
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
                  <h3 class="uppercase">关于我们</h3>
                </div>
              </a>
              <p> </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h1 class="text-center">研究成果</h1>
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
        this.$http.get(conf.host + '/news/latest').then(response => {
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