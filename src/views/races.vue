<template>
  <div class="main-container">
    <section class="page-title page-title-3 image-bg overlay parallax">
      <div class="background-image-holder" v-bind:class="{fadeIn: isFadeIn}" v-bind:style="{background: 'url(' + holderBackgroundUrl + ')', 'background-position': backgroundPosition, transform: 'translate3d(0px,' + holderTranslateY + ',0px)'}">
        <img alt="Background Image" class="background-image" src="../assets/img/ceping.jpg" v-bind:style="{display: isNone}">
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <h3 class="uppercase mb0">天工数据测评</h3>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <h4 class="uppercase mb16">Lorem Ipsum</h4>
            <p class="lead mb64">
              Mauris eu tortor at justo vehicula fermentum. Nulla lobortis diam sit amet sem rhoncus venenatis.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <div class="pricing-table pt-2 text-center">
              <h5 class="uppercase">翻译大赛</h5>
              <span class="price">$30,000</span>
              <a class="btn btn-filled btn-lg" href="#">Get Started</a>
              <ul>
                <li><b>发布时间:</b>2016/05/01</li>
                <li><b>最好成绩</b>:97.34%</li>
                <li>
                  <strong>最好成绩更新日</strong>:2016/05/26
                </li>
                <li>
                  <strong>参赛人数</strong>:5132
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="pricing-table pt-2 text-center">
              <h5 class="uppercase">其他比赛</h5>
              <span class="price">$30,000</span>
              <a class="btn btn-filled btn-lg" href="#">Get Started</a>
              <ul>
                <li><b>发布时间</b> 2016/05/01
                </li>
                <li>
                  <strong>最好成绩</strong>:97.34%
                </li>
                <li><strong>最好成绩更新日</strong>:2016/05/26</li>
                <li><strong>参赛人数</strong>:5132</li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="pricing-table pt-2 text-center">
              <h5 class="uppercase">网页排序</h5>
              <span class="price">$30,000</span>
              <a class="btn btn-filled btn-lg" href="#">Get Started</a>
              <ul>
                <li><b>发布时间</b> 2016/05/01
                </li>
                <li>
                  <strong>最好成绩</strong>:97.34%
                </li>
                <li><strong>最好成绩更新日</strong>:2016/05/26</li>
                <li><strong>参赛人数</strong>:5132</li>
              </ul>
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