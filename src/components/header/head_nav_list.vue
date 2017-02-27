<template>
  <div class="module-group right">
    <div class="module left">
      <ul class="menu">
        <li><a href="index">首页</a></li>
        <li><a href="dataset">数据集</a></li>
        <li><a href="about_us">关于我们</a></li>
        <li><a href="races">测评</a></li>
      </ul>
    </div>

    <div class="module widget-handle language left">
      <ul class="menu">
        <li class="has-dropdown">
          <a href="#">中文</a>
          <ul>
            <li><a href="#">English</a></li>
          </ul>        
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="es6">
  export default {
    name:'head-nav-list',
    data(){
      return {
      }
    }
  }
</script>

<style>
</style>