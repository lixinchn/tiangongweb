<template>
  <div class="main-container">
    <section class="page-title page-title-4 image-bg overlay parallax">
      <div class="background-image-holder" v-bind:class="{fadeIn: isFadeIn}" v-bind:style="{background: 'url(' + holderBackgroundUrl + ')', 'background-position': backgroundPosition, transform: 'translate3d(0px,' + holderTranslateY + ',0px)'}">
        <img alt="Background Image" class="background-image" src="../assets/img/aboutus.jpg" v-bind:style="{display: isNone}">
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3 class="uppercase mb0">关于我们</h3>
          </div>
          <div class="col-md-6 text-right">
            <ol class="breadcrumb breadcrumb-2">
              <li>
                <a href="#admin">管理委员会</a>
              </li>
              <li>
                <a href="#members">机构成员</a>
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
            <h1 class="uppercase mb24 bold italic">天工智能<br>计算研究院</h1>
            <h5 class="uppercase italic fade-1-4">打造最权威的中文信息处理<br> 数据集提供和评测平台</h5>
            <hr class="visible-xs">
          </div>
          <div class="col-md-5 col-sm-7">
            <h5 class="bold">成立背景及研究领域</h5>
            <p>
              清华大学（计算机系）-北京搜狗科技发展有限公司搜索技术联合实验室于2007年3月16日正式成立，合作方（共同甲方）为北京搜狐互联网信息服务有限公司（以下简称“搜狐公司”）、北京搜狗科技发展有限公司（以下简称“搜狗公司”）。2010年双方续签第二期机构合作协议。2013年5月由搜狗公司与我校续签第三期机构，并变更机构名称为清华大学（计算机系）-北京搜狗科技发展有限公司搜索技术联合实验室。目前，双方已经完成了三期合作，9年中，双方本着“发挥优势、携手合作、共同发展”的精神，取得了高水平的的研究成果，为企业发展做出了贡献，提升了双方在国际、国内在学术界和产业界的影响力。
            </p>
            <p>
              基于9年的合作基础，双方拟以5年3000万续签清华大学（计算机系）-北京搜狗科技发展有限公司搜索技术联合实验室第四期合作协议，申请机构名称为：清华大学天工智能计算研究院（以下简称研究院）。机构名称中的“天工”二字源于一部我国古代综合性的科学技术著作，被外国学者称为“中国17世纪的工艺百科全书”的《天工开物》；另一方面，研究院主要从事人工智能领域的科学技术研究，寓意智能技术巧夺天工。
            </p>
            <p>
              在原有合作基础上，双方将进一步加强合作，研究领域将进一步扩大到人工智能及智能信息处理相关领域；将进一步扩大合作范围，包括学科建设、人才培养等。研究院将充分利用清华大学人工智能及智能信息处理领域的技术特点和研发力量，结合搜狗公司的产品经验、市场优势和数据资源，集聚双方在研究和产业方面的优势，研发基于自主知识产权的具有国际引领水平的智能产品与技术，在机器翻译、智能问答、健康管理、大数据挖掘等智能技术的核心领域做出前瞻性的贡献。研究院的目标是让搜索更加智能化，同时以搜索技术带动人工智能的发展。
            </p>
            <h5 class="bold">主要研究内容</h5>
            <p>
              未来五年内，研究院将主要围绕人工智能和搜索引擎等相关技术开展高水平研究工作，既要面向国际前沿产生高水平的学术论文，又要在企业中得到具体应用，以网络信息智能服务为主的相关产品和服务核心竞争力，实现依靠科技创造未来的战略。
            </p>
            <p>
              具体研究内容根据企业需求和国际上相关技术的发展动向，由双方协商，研究院管委会批准确定，主要研究内容包括异质交互环境下的用户行为模型和点击模型，查询意图理解和表示，搜索用户画像及个性化推荐方法，搜索用户满意度评价方法等。
            </p>
          </div>
        </div>
      </div>
    </section>

    <section  class="page-title page-title-4 bg-secondary">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3 class="uppercase mb0">管理委员会成员</h3>
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
                <h5 class="uppercase mb0">程建平 主任</h5>
                <span>清华大学 常务副校长</span>
              </div>
              <p class="mb0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="image-tile outer-title text-center">
              <img alt="Pic" src="../assets/img/wangxiaochuan.jpg">
              <div class="title mb16">
                <h5 class="uppercase mb0">王小川 副主任</h5>
                <span>搜狗公司 总裁</span>
              </div>
              <p class="mb0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="image-tile outer-title text-center">
              <img alt="Pic" src="../assets/img/sunmaosong.jpg">
              <div class="title mb16">
                <h5 class="uppercase mb0">孙茂松 副主任</h5>
                <span>清华大学计算机系 教授/系党委书记</span>
              </div>
              <p class="mb0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <div class="image-tile outer-title text-center">
              <img alt="Pic" src="../assets/img/wujianping.jpg">
              <div class="title mb16">
                <h5 class="uppercase mb0">吴建平 委员</h5>
                <span>清华大学计算机系 院士/系主任</span>
              </div>
              <p class="mb0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="image-tile outer-title text-center">
              <img alt="Pic" src="../assets/img/yanghongtao.jpg">
              <div class="title mb16">
                <h5 class="uppercase mb0">杨洪涛 委员</h5>
                <span>搜狗公司 副总裁</span>
              </div>
              <p class="mb0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="image-tile outer-title text-center">
              <img alt="Pic" src="../assets/img/team-3.jpg">
              <div class="title mb16">
                <h5 class="uppercase mb0">周毅 委员</h5>
                <span>搜狗公司 财务总监</span>
              </div>
              <p class="mb0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
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
            <h3>机构成员</h3>
          </div>
        </div>
        <div class="row row-centered">
          <div class="col-md-4 col-sm-6 text-center col-centered">
            <div class="feature boxed cast-shadow-light">
              <img alt="Pic" class="image-small inline-block mb24" src="../assets/img/avatar1.png">
              <h4>联合院长 吴建平</h4>
              <span>
              <strong>清华大学计算机系</strong> 院士/系主任</span>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 text-center col-centered">
            <div class="feature boxed cast-shadow-light">
              <img alt="Pic" class="image-small inline-block mb24" src="../assets/img/avatar2.png">
              <h4>联合院长 王小川</h4>
              <span>
              <strong>搜狗公司</strong> 总裁</span>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 text-center col-centered">
            <div class="feature boxed cast-shadow-light">
              <img alt="Pic" class="image-small inline-block mb24" src="../assets/img/avatar3.png">
              <h4>常务副院长 马少平</h4>
              <span>
              <strong>清华大学计算机系</strong> 教授</span>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 text-center col-centered">
            <div class="feature boxed cast-shadow-light">
              <img alt="Pic" class="image-small inline-block mb24" src="../assets/img/avatar3.png">
              <h4>副院长 茹立云</h4>
              <span>
              <strong>搜狗公司</strong>副总裁</span>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 text-center col-centered">
            <div class="feature boxed cast-shadow-light">
              <img alt="Pic" class="image-small inline-block mb24" src="../assets/img/avatar3.png">
              <h4>办公室主任 刘奕群</h4>
              <span>
              <strong>清华大学计算机系</strong> 副教授</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="es6">
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
      }
    },
  }
</script>
<style>
</style>