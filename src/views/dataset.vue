<template>
  <div class="main-container">
    <section class="image-bg bg-dark parallax overlay pt120 pb120">
      <div class="background-image-holder" v-bind:class="{fadeIn: isFadeIn}" v-bind:style="{background: 'url(' + holderBackgroundUrl + ')', 'background-position': backgroundPosition, transform: 'translate3d(0px,' + holderTranslateY + ',0px)'}">
        <img alt="Background Image" class="background-image" src="../assets/img/shujuji.jpg" v-bind:style="{display: isNone}">
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <h2 class="uppercase mb8">搜狗天工智能研究院数据集</h2>
            <p class="lead mb40">我们为学术应用提供免费的大数据及分布式计算平台</p>
            <a class="btn btn-lg btn-white mb0" href="#dataset-begin">Get Started</a>
          </div>
        </div>
      </div>
    </section>

    <section id="dataset">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h4 class="uppercase mb80" id="dataset-begin">天工智能数据研究院数据集</h4>
            <div class="tabbable">
                <ul class="nav nav-pills nav-stacked col-md-3" id="accordion">
            <!--         <ui-collapsible title="数据集介绍">
                      <li><a href="#intro" data-toggle="tab" v-on:click="menuClicked" class="menu-a" id="default-menu">详细介绍</a></li>
                    </ui-collapsible> -->
                    <ui-collapsible v-for="panel in datasets" v-bind:title="panel.category">
                        <li v-for="dataset in panel.subs" v-bind:class="dataset.initState"><a v-bind:href="'#' + dataset.name" data-toggle="tab" v-on:click.prevent="menuClicked(dataset, $event)" class="menu-a">{{dataset.name}}</a></li>
                    </ui-collapsible>
                </ul>


                <div class="tab-content col-md-9">
                  <div v-html="content"></div>
                  <button v-on:click.prevent="onApply" type="submit" v-show="buttonShow" class="pure-button pure-button-primary dataset-button">申请</button>
                </div>

                <!-- <ul class="tab-content col-md-9">
                  <div>
                    <div class="tab-pane active" id="intro">
                      <h3> 简介 </h3>
                      <p>
                        Ut sagittis consectetur tortor imperdiet mattis. Aenean faucibus massa vitae consectetur hendrerit. Sed facilisis justo id sem ullamcorper ultricies. Aliquam erat volutpat. Ut blandit purus erat, vitae vestibulum odio pharetra vitae. Morbi consectetur eleifend diam vel tristique. Duis non nisi quam. Aliquam commodo nunc ex, ut sollicitudin nisi luctus at. Nulla id magna maximus, rutrum orci eu, iaculis leo.
                      </p>
                    </div>
                  </div>
                  <div v-for="panel in context.panel">
                      <div v-for="dataset in panel.dataset" v-bind:id="dataset.tabid" class="tab-pane">
                        <h3>{{dataset.tabTitle}}</h3>
                        <hr>
                        <h3>大小</h3>
                        <p>{{dataset.size}}</p>
                        <hr>
                        <h3>数据样例</h3>
                        {{dataset.example}}
                        <hr>
                        <h3>对比搜狗实验室数据</h3>
                        <p>{{dataset.comparision_status}}</p>
                        <hr>
                        <h3>对比数据集情况</h3>
                        <p>{{dataset.comparision}}</p>
                        <hr>
                        <h3>成果列表</h3>
                        <ol class="big-numbered-list">
                          <li v-for="archievement in dataset.archievement">
                            <h4><a v-bind:href="archievement.link">{{archievement.title}}</a></h4>
                            <p>{{ref}}</p>
                          </li>
                        </ol>
                        <hr>
                        <h3>数据许可协议</h3>
                        {{dataset.term}}
                        <hr>
                        <h3>数据下载</h3>
                        {{dataset.downloads}}
                        <hr>

                        <p>{{dataset.description}}</p>
                      </div>
                    </div>
                </ul> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="es6">
  import { UiCollapsible } from 'keen-ui'
  import {conf} from '../assets/js/conf'

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
      onApply() {
        this.$http.get(conf.host + '/dataset/apply?dataname=' + this.chosenName + '&obtain=2').then(response => {
          console.log(response)
        }, response => {
          console.log(response)
        })
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
        if (this.content) {
          this.buttonShow = true
          this.chosenName = dataset.name
        }
        e.preventDefault()
      },

      // hideAllTabPane() {
      //   let tabPanes = document.querySelectorAll('.tab-pane')
      //   tabPanes.forEach((tabPane => {
      //     tabPane.style.display = 'none'
      //   }))
      // },

      // showTabPane(paneId) {
      //   let tabPane = document.querySelector(paneId)
      //   tabPane.style.display = 'block'
      // },

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
          this.datasets = response.body.data.list
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
        chosenName: '',

        // context: {
        //   "panel": [{
        //     "id": 1,
        //     "panelTitle": "网页语料",
        //     "dataset": [{
        //       "tabid": "a",
        //       "title": "SogouT",
        //       "tabTitle": "SogouT(网页库)",
        //       "size": "10亿 网页",
        //       "example": "<code data-gist-id='108a0e2d074d6a65672d62160997b9f2'></code>",
        //       "comparision_status": "更新数据，数量从1.5亿网页增加至10亿网页",
        //       "comparision": "TREC使用Clueweb12数据集，有7.3亿英文网页；中文领域没有其他亿级网页库。",
        //       "archievements": [{
        //         "title": "Data Cleansing for Web Information Retrieval using Query Independent Features.",
        //         "link": "https://www.sogou.com/labs/paper/Data_Cleansing_for_Web_Information_Retrieval_using_Query_Independent_Features.pdf",
        //         "ref": "Yiqun Liu, Min Zhang, Rongwei Cen, Liyun Ru, Shaoping Ma. Journal of the American Society for Information Science and Technology. DOI: 10.1002/asi.20633."
        //       }, {
        //         "title": "R-SpamRank: A Spam Detection Algorithm Based on Link Analysis",
        //         "link": "https://www.sogou.com/labs/paper/R-SpamRank_A_Spam_Detection_Algorithm_Based_on_Link_Analysis.pdf",
        //         "ref": "Chenmin Liang, Liyun Ru, Xiaoyan Zhu, to be appeared at the Journal of Computational Information Systems."
        //       }, {
        //         "title": "Incorporating Web Browsing Information into Anch or Texts for Web Search",
        //         "link": "http://www.springerlink.com/index/VJR47N0752RU3776.pdf",
        //         "ref": "Bo Zhou, Yiqun Liu, Min Zhang, Yijiang Jin, Shaoping Ma. Information Retrieval Volume 14, Issue 3: 290-314, 2011."
        //       }],
        //       "term": "下载前请仔细阅读<a href='https://www.sogou.com/labs/dl/license.html'>SogouLab 数据使用许可证</a>，请在使用了本语料库的论文、技术报告等研究成果中添加如下参考文献引用：Yiqun Liu, Fei Chen, Weize Kong, Huijia Yu, Min Zhang, Shaoping Ma, Liyun Ru. Identifying Web Spam with the Wisdom of the Crowds. ACM Transaction on the Web. Volume 6, Issue 1, Article No. 2, 30 pages. March 2012.  Please read the <a href='https://www.sogou.com/labs/dl/license_en.html'> License for Use of Sogou Lab Data </a> carefully before downloading.",
        //       "downloads": "<ul><li>迷你版(样例数据, 61KB)：<a href='http://download.labs.sogou.com/dl/sogoulabdown/SogouT/SogouT.mini.tar.gz'>tar.gz格式</a>，<a href='http://download.labs.sogou.com/dl/sogoulabdown/SogouT/SogouT.mini.zip'>zip格式</a></li><li>完整版(1TB)：(<a href='https://www.sogou.com/labs/dl/contact.html'>硬盘拷贝</a>)</li><li>历史版本(130GB)：V2.0(<a href='https://www.sogou.com/labs/dl/contact.html'>硬盘拷贝</a>)</li></ul>",
        //       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sagittis lacus a feugiat. Aliquam bibendum dolor sed orci pellentesque vestibulum. Etiam ex magna, porta eget dictum ut, euismod a diam."
        //     }, {
        //       "tabid": "b",
        //       "title": "页面权威度",
        //       "tabTitle": "页面权威度",
        //       "size": "10亿页面(对应SogouT页面）",
        //       "example": "[url, pagerank]",
        //       "comparision_status": "新数据",
        //       "comparision": "",
        //       "date": 7.30,
        //       "admin": "刘玉岗",
        //       "description": "iQuisque eget porttitor massa. Duis tempor interdum vestibulum. In id nibh eget velit auctor vehicula. Curabitur sollicitudin sagittis arcu nec facilisis."
        //     }, {
        //       "tabid": "c",
        //       "title": "SogouCV",
        //       "tabTitle": "SogouCA（新闻网页库",
        //       "size": "500万 网页",
        //       "example": "<code data-gist-id='e313dfdc10a1f8b885ebcc72d2d5613c'></code>",
        //       "comparision_status": "更新数据，数据量从100万网页增加至500万",
        //       "comparision": "路透社发布过200多万的新闻网页，以英文为主。",
        //       "date": 7.15,
        //       "archievements": [{
        //         "title": "Automatic Online News Issue Construction in Web Environment",
        //         "link": "https://www.sogou.com/labs/paper/Automatic_Online_News_Issue_Construction_in_Web_Environment.pdf",
        //         "ref": "Canhui Wang, Min Zhang, Shaoping ma, Liyun Ru, the 17th International World Wide Web Conference (WWW08), Beijing, April, 2008."
        //       }],
        //       "term": "下载前请仔细阅读<a href='https://www.sogou.com/labs/dl/license.html'>SogouLab 数据使用许可证</a>， Please read the <a href='https://www.sogou.com/labs/dl/license_en.html'> License for Use of Sogou Lab Data </a> carefully before downloading.",
        //       "downloads": "<ul><li>类别标记说明(URL到类别的映射关系，3KB)：<a href='http://download.labs.sogou.com/dl/sogoulabdown/categories_2012.txt'>txt格式</a></li> <li>迷你版(样例数据, 101KB)：<a href='http://download.labs.sogou.com/dl/sogoulabdown/SogouCA/news_tensite_xml.smarty.tar.gz'>tar.gz格式</a>，<a href='http://download.labs.sogou.com/dl/sogoulabdown/SogouCA/news_tensite_xml.smarty.zip'>zip格式</a> </li> <li>完整版(711MB)：<a href='http://www.sogou.com/labs/dl/ftp.jsp?dir=/Data/SogouCA/news_tensite_xml.full.tar.gz'>tar.gz格式</a>，<a href='http://www.sogou.com/labs/dl/ftp.jsp?dir=/Data/SogouCA/news_tensite_xml.full.zip'>zip格式</a></li> <li> 历史版本：2008版：<ul> <li>完整版(同时提供<a href='https://www.sogou.com/labs/dl/contact.html'>硬盘拷贝</a> ,1.02GB)：<a href='http://www.sogou.com/labs/dl/ftp.jsp?dir=/Data/SogouCA/SogouCA.tar.gz' >tar.gz格式</a> </li><li> 迷你版(样例数据, 3KB)：<a href='http://download.labs.sogou.com/dl/sogoulabdown/SogouCA/SogouCA.mini.tar.gz'>tar.gz格式</a></li><li> 精简版(一个月数据, 437MB)：<a href='http://www.sogou.com/labs/dl/ftp.jsp?dir=/Data/SogouCA/SogouCA.reduced.tar.gz'>tar.gz格式</a></li><li> 类别标记说明(URL到类别的映射关系，4KB)：<a href='http://download.labs.sogou.com/dl/sogoulabdown/categories.txt'>txt格式</a></li></ul></ul>",
        //       "admin": "孙健",
        //       "description": "iNam tincidunt sed lacus ornare commodo. Maecenas lobortis odio non leo faucibus efficitur. Nam orci eros, accumsan et nibh ut, posuere congue lorem. "
        //     }, {
        //       "tabid": "d",
        //       "title": "相关性标注",
        //       "tabTitle": "相关性标注",
        //       "size": "约5万条数据",
        //       "example": "[query, URL, score]",
        //       "comparision_status": "新数据",
        //       "comparision": "",
        //       "date": 7.10,
        //       "admin": "姚婷",
        //       "description": "Sed sed erat id elit laoreet pellentesque lacinia a urna. Mauris sed fermentum massa, et lacinia nulla. Etiam sed imperdiet nisl. Fusce viverra tristique m"
        //     }]
        //   }, {
        //     "id": 2,
        //     "panelTitle": "图片语料",
        //     "dataset": [{
        //       "tabid": "e",
        //       "title": "文字识别",
        //       "tabTitle": "文字识别（真实场景印刷体文字识别）",
        //       "example": "<ol><li>atalist: image filename，text filename</li><li>图像、文本文件包 例如，图像文件2016022901_10038.bin.png，对应的文字行内容为2016022901_10038.gt.txt</li><ol>",
        //       "comparision_status": "新数据",
        //       "comparision": "ICDAR会议有场景文字识别竞赛，面向英语，数据量少，约1000张",
        //       "time": 7.15,
        //       "size": "50万张图片",
        //       "admin": "马龙",
        //       "description": " Nam odio nisi, consequat a nisl eu, lobortis interdum ante. Praesent vitae ex nec turpis eleifend aliquam."
        //     }, {
        //       "tabid": "f",
        //       "title": "场景文字位置检测",
        //       "tabTitle": "场景文字位置检测",
        //       "size": "1万张图片",
        //       "example": "<ol><li> datalist: image filename，xml filename <li> <li> 图像、xml文件包 例如， 图像名为textl20160525_03010.jpg内有两行文字，第一行文字范围为左上点（541，21）至右下点（657，37），第二行文字范围为（211，49）至（294，73）；坐标顺序列数在前，行数在后； 对应的xml文件内容 :   <code data-gist-id='d85835af0859860d70fc4b55d0dd2c0d'></code> </li> </ol>",
        //       "comparision_status": "新数据",
        //       "comparision": "ICDAR会议有场景文字检测竞赛数据集，面向英语，数据集约1000张；中文场景文字识别，中科院自动化所中文场景文字的数据集约500张",
        //       "date": 7.1,
        //       "admin": "马龙",
        //       "description": "Ut faucibus, est sed vestibulum ultricies, lorem risus interdum nisl, sed euismod nulla magna nec augue. In scelerisque magna consequat lobortis pulvinar."
        //     }, {
        //       "tabid": "g",
        //       "title": "服饰位置检测和分类",
        //       "tabTitle": "服饰位置检测和分类",
        //       "size": "2万张图片",
        //       "example": "<ol><li>datalist: image filename，xml filename</li><li> 图像、xml文件包 例如， 图像名为12_0001941.jpg的文件有两个服饰，第一件是coat,区域范围点（122，121）至（282，312）点内，第二件是trousers,区域范围点（128，314）至（277，429）内；坐标顺序列数在前，行数在后；<code data-gist-id='1e722cdff00c91a3a2e75985d5fc780c'></code> </li> </ol>",
        //       "comparision_status": "新数据",
        //       "comparision": "中山大学 cloth parsing，约两千张图像",
        //       "date": 7.1,
        //       "admin": "马龙",
        //       "description": "Sed vulputate orci tristique dapibus vestibulum. Nunc porttitor felis at nunc cursus sagittis. Vestibulum a mattis risus. Aliquam quis varius risus. "
        //     }, {
        //       "tabid": "h",
        //       "title": "图片搜索点击日志",
        //       "tabTitle": "图片搜索点击日志（pc）(公开数据部分)",
        //       "size": "1亿条记录",
        //       "example": "Session id，query，doc_id，session time, order，click time，click label(0/1), pic url, page url]",
        //       "comparision_status": "新数据",
        //       "comparision": "无",
        //       "date": 7.15,
        //       "admin": "周泽南",
        //       "description": " Pellentesque venenatis ex ut ante faucibus porttitor. Quisque vitae nibh consequat, condimentum lacus vitae, maximus nulla. Donec vel dolor ut ipsum luctus imperdiet nec vitae nisi. Proin porttitor auctor risus non elementum."
        //     }]
        //   }, {
        //     "id": 3,
        //     "panelTitle": "用户行为语料",
        //     "dataset": [{
        //       "tabid": "i",
        //       "title": "图片搜索日志",
        //       "tabTitle": "图片搜索点击日志（pc）(公开数据部分)",
        //       "size": "1亿条记录",
        //       "example": "Session id，query，doc_id，session time, order，click time，click label(0/1), pic url, page url]",
        //       "comparision_status": "新数据",
        //       "comparision": "",
        //       "date": 7.15,
        //       "admin": "周泽南",
        //       "description": ". Donec rutrum tempor dolor, sed volutpat metus semper molestie. Curabitur convallis euismod posuere."
        //     }, {
        //       "tabid": "j",
        //       "title": "搜索点击日志",
        //       "tabTitle": "搜索点击日志（pc & wap）",
        //       "size": "无线1亿条记录，pc 1亿条记录",
        //       "example": "Userid，sessionid， query hash，[showurl id，title hash, order，clicktime，label]",
        //       "comparision_status": "更新数据，增加了titile，label字段",
        //       "comparision": "Yandex在WSCD2014公布的用户搜索日志，包含1.7亿条记录，3500千万session。",
        //       "date": 7.30,
        //       "admin": "张帅",
        //       "description": "Vestibulum facilisis aliquet ex,vitae feugiat nunc.Aenean eu tristique mi.Donec tristique ante eget purus hendrerit,eget pulvinar tellus congue."
        //     }]
        //   }, {
        //     "id": 4,
        //     "panelTitle": "垂直语料",
        //     "dataset": [{
        //       "tabid": "k",
        //       "title": "问问问答库",
        //       "tabTitle": "问问问答库",
        //       "size": "500万页面",
        //       "example": "<code data-gist-id='3d55675510d06a8b5c7a0a694b484906'></code>",
        //       "comparision_status": "新数据",
        //       "comparision": "",
        //       "date": 7.20,
        //       "admin": "郭博",
        //       "description": "Aliquam odio lacus, auctor eget tellus at, accumsan ullamcorper justo."
        //     }, {
        //       "tabid": "l",
        //       "title": "语音助手对话",
        //       "tabTitle": "语音助手对话",
        //       "size": "1万问答对",
        //       "example": "[question,answer]",
        //       "comparision_status": "新数据",
        //       "comparision": "",
        //       "date": 7.10,
        //       "admin": "龚雨成",
        //       "description": "Aliquam fermentum tristique suscipit. Nunc dapibus, diam at rutrum facilisis, ante diam posuere nulla, in euismod purus erat sed dolor."
        //     }]
        //   }, {
        //     "id": 5,
        //     "panelTitle": "自然语言处理研究语料",
        //     "dataset": [{
        //       "tabid": "m",
        //       "title": "知识图谱三元组",
        //       "tabTitle": "知识图谱三元组",
        //       "size": "约100万 实体,1000万关系",
        //       "example": "[entity1,entity2,relation]",
        //       "comparision_status": "新数据",
        //       "comparision": "Freebase 提供19亿triples下载，将于16年9月关闭服务，改由google提供API服务，不可下载数据。中文没有公开知识图谱数据。",
        //       "date": 7.15,
        //       "admin": "龚雨成",
        //       "description": " Morbi aliquam id nunc eu rhoncus. In faucibus, erat sed bibendum gravida, urna ante semper arcu, vel laoreet ante enim at tortor"
        //     }, {
        //       "tabid": "n",
        //       "title": "词向量",
        //       "tabTitle": "词向量",
        //       "size": "约100万词的词向量",
        //       "example": "[word, embedding]　",
        //       "comparision_status": "新数据",
        //       "comparision": "Google发布了开源项目word2vec用于计算词向量",
        //       "date": 7.20,
        //       "admin": "邢宁",
        //       "description": " Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras rhoncus ligula vel ipsum aliquet convallis. "
        //     }, {
        //       "tabid": "w",
        //       "title": " 同义词",
        //       "tabTitle": "同义词",
        //       "size": "10万同义词对",
        //       "example": "[word，synonym，level]",
        //       "comparision_status": "新数据",
        //       "comparision": "",
        //       "date": 7.10,
        //       "admin": "陈炜鹏",
        //       "description": "Cras vel posuere ante. Nulla cursus ut arcu efficitur aliquet. Vestibulum et enim sed mi vestibulum malesuada. "
        //     }]
        //   }]
        // }
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
</style>