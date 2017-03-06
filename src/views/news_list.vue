<template>
  <div class="main-container">
    <section class="image-edge">
      <div class="col-md-6 col-sm-4 p0">
        <img alt="Screenshot" class="mb-xs-24 pull-right" src="../assets/img/3_animated_icons.gif">
      </div>
      <div class="container">
          <div class="col-md-5 col-md-offset-1 col-sm-7 col-sm-offset-1 right">
            <div class="widget">
              <div class="news-title">
                <img src="../assets/img/news_icon.png" class="news_icon">
                <p>最新资讯</p>
                <div style="clear:both;"></div>
              </div>
              <hr>

              <paginate name="news" :list="news" :per="10" class="paginate-list">
                <li v-for="item in paginated('news')" class="news-list-li">
                  <a class="news-list-a" v-bind:href="item.url" style="cursor: pointer">{{item.title}}</a>
                  <span class="date news-list-right">
                    <span class="number">{{item.date}}</span>
                  </span>
                </li>
              </paginate>
              <paginate-links for="news" :limit="2" :show-step-links="true" class="news-list-links">
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
        news: [],
        paginate: ['news'],
      }
    },

    created() {
      this.getNews()
    },

    methods: {
      getNews() {
        this.$http.get(conf.host + '/news/latest').then(response => {
          let news = response.body
          news.forEach((item, index, news) => {
            news[index] = Object.assign({
              'date': transferDate(item.time)
            }, item)
          })
          this.news = news

          // TODO
          // for (let i = 0; i < 50; ++i) {
          //   news.forEach(item => {
          //     this.news.push(item)
          //   })
          // }
        }, response => {
          console.log(response)
        })
      }
    }
    
  }
</script>
<style>
.news-list-right {
  float: right;
}

.news-list-a {
  color: #8b8b8b;
}

.news-list-li {
  margin: 0.4em 0;
}

.news-list-links {
  text-align: center;
  user-select: none;
}

.news-list-links li {
  /*float: left;*/
  display: inline-block;
 
  margin: 0 0.2em;
  cursor: pointer;
}

.news-list-links li a {
  width: 2em;
  height: 2em;
  display: block;
}

.news-list-links li.active {
  background: #47b475;
}

.news-list-links li.active a {
  color: #fff;
}
</style>