<template>
  <footer class="footer-1 bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <a href="about_us">
            <h4 class="title">{{title}}</h4>
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="widget">
            <h5>{{relatedLinks}}</h5>
            <hr>
            <ul class="link-list recent-posts">
              <li>
                <a href="#">{{qinghua}}</a>
              </li>
              <li>
                <a href="#">{{sogou}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="widget">
            <h5>{{relatedLicense}}</h5>
            <hr>
            <ul class="link-list">
              <li>
                <a href="#">{{dataLicense}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="widget">
            <h5>{{contact}}</h5>
            <hr>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <span class="sub">© Copyright 2015 - Sogou Corp.</span>
        </div>
        <div class="col-sm-6 text-right">
          <ul class="list-inline social-list">
            <li>
              <a href="#">
              <i class="ti-twitter-alt"></i>
              </a>
            </li>
            <li>
              <a href="#">
              <i class="ti-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
              <i class="ti-dribbble"></i>
              </a>
            </li>
            <li>
              <a href="#">
              <i class="ti-vimeo-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <a class="btn btn-sm fade-half back-to-top inner-link" href="#top">Top</a>
  </footer>
</template>

<script type="es6">
  import {i18n} from '../../assets/js/i18n'

  export default {
    name: 'tg-head',

    data() {
      return {
        title: i18n.foot.title[i18n.lang],
        relatedLinks: i18n.foot.relatedLinks[i18n.lang],
        qinghua: i18n.foot.qinghua[i18n.lang],
        sogou: i18n.foot.sogou[i18n.lang],
        relatedLicense: i18n.foot.relatedLicense[i18n.lang],
        dataLicense: i18n.foot.dataLicense[i18n.lang],
        contact: i18n.foot.contact[i18n.lang],  
      }
    },
  }
</script>



