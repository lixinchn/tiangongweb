<template>
  <div class="main-container">
    <div class="news_content">
      <div class="news_content_back">
        <a href="/news_list">
          <span>&lt;</span>
          最新资讯
        </a>
        <hr>
      </div>

      <div class="news_content_content">
        <h1>{{title}}</h1>
        <div class="news_content_at">
          <p class="news_content_author">作者：{{author}}</p>
          <p class="news_content_time">发布时间：{{time}}</p>
          <div style="clear: both;"></div>
        </div>
        <div v-html="content" class="news_content_raw">
        </div>
      </div>
  </div>
</template>

<script type="es6">
  import queryString from 'query-string'
  import {conf} from '../assets/js/conf'
  import {transferDate} from '../assets/js/util'

  export default {
    methods: {
      getNewsIdFromUrl(search) {
        const parsed = queryString.parse(search)
        return parsed.id
      },

      getNews() {
        let newsId = this.getNewsIdFromUrl(location.search)
        if (!newsId)
          return

        this.$http.get(conf.host + '/news/item?id=' + newsId).then(response => {
          let news = response.body
          if (news.data) {
            this.title = news.data.title
            this.author = news.data.author || '无'
            this.time = transferDate(news.data.publish)
            this.content = news.data.content
          }
        }, response => {
          console.log(response)
        })
      },
    },

    created() {
      this.getNews()
    },

    data() {
      return {
        title: '',
        author: '',
        time: '',
        content: '',
      }
    },
  }
</script>
<style>
.news_content {
  width: 80%;
  text-align: center;
  margin: 0 auto;
}

.news_content_back {
  margin: 1em 0;
}

.news_content_back a {
  color: #000;
  opacity: 0.5;
  float: left;
  font-size: 0.9em;
  margin-bottom: 0.6em;
}

.news_content_at {
  width: 40%;
  margin: 0 auto;
}

.news_content_author, .news_content_time {
  font-size: 0.9em;
}

.news_content_author {
  float: left;
}

.news_content_time {
  float: right;
}

.news_content_raw {
  text-align: left;
}
</style>