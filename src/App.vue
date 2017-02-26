<template>
  <div id="app">
    <tgHead></tgHead>
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <tgFoot></tgFoot>
  </div>
</template>

<script type="es6">
  import tgHead from './components/header/head'
  import tgFoot from './components/footer/foot'
  export default {
    name: 'app',
    components: {
      tgHead,
      tgFoot,
    }
  }
</script>

<style></style>
