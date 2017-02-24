<template>
  <div id="app">
    <tgHead></tgHead>
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script type="es6">
  import tgHead from './components/header/head'
  export default {
    name: 'app',
    components: {
      tgHead
    }
  }
</script>

<style></style>
