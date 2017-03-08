<template>
  <div class="main-container">
    <div class="user-info">
      <h3>个人信息查看</h3>
      <div class="uinfo-content">
        <ul class="uinfo-list">
          <li v-for="item in this.list" v-bind:class="{chosen: item.chosen}" v-on:click="onListClick">
            <a v-bind:href="item.href">{{item.content}}</a>
          </li>
        </ul>
        <uinfo v-bind:style="{display: [widgetShow.uinfo ? 'block' : 'none']}"></uinfo>
        <uapplication v-bind:style="{display: [widgetShow.uapplication ? 'block' : 'none']}"></uapplication>
      <div style="clear: both;"></div>
    </div>
  </div>
</template>

<script type="es6">
  import uinfo from './user_info_uinfo'
  import uapplication from './user_info_uapplication'
  export default {
    components: {uinfo, uapplication},
    methods: {
      highlightList(href) {
        let hashIndex = href.indexOf('#')
        if (hashIndex === -1)
          return // default

        let hash = href.substr(hashIndex)
        this.list.forEach(item => {
          item.chosen = false
          if (item.href === hash)
            item.chosen = true
        })

        this.changeWidget(hash)
      },

      changeWidget(hash) {
        Object.keys(this.widgetShow).forEach(key => {
          this.widgetShow[key] = false
          if (hash.indexOf(key) >= 0)
            this.widgetShow[key] = true
        })
      },

      onListClick(e) {
        this.highlightList(e.target.href)
      },
    },

    mounted() {
      this.highlightList(location.href)
    },

    data() {
      return {
        widgetShow: {
          'uinfo': true,
          'uapplication': false,
        },

        list: [
          {'content': '个人信息', 'chosen': true, 'href': '#uinfo'},
          {'content': '我的申请', 'chosen': false, 'href': '#uapplication'},
        ],
      }
    },
  }
</script>
<style>
.user-info {
  margin: 5%;
  min-height: 20em;
}

.user-info h3 {
  font-weight: 400;
}

.uinfo-list {
  float: left;
  width: 20%;
  font-size: 1em;
}

.uinfo-list li {
  padding-left: 1em;
  line-height: 3em;
  font-weight: 400;
  margin-bottom: 1em;
  max-width: 12em;
}

.uinfo-list li.chosen {
  background: #47b475;
  color: #fff;
}

.uinfo-list li a {
  width: 100%;
  display: block;
}

.uinfo-content {
  margin-top: 3em;
}

</style>