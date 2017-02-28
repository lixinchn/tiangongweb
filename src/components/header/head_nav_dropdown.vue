<template>
  <div class="module widget-handle mobile-toggle right visible-sm visible-xs" v-on:click="toggleMenu">
    <i class="ti-menu"></i>
  </div>
</template>

<script type="es6">
  export default {
    name: 'head-nav-dropdown',
    data() {
      return {
        unfold: false,
        maxHeight: 'none',
      }
    },

    methods: {
      toggleMenu() {
        let $navBar = document.querySelector('.nav-bar')
        if ($navBar) {
          let tempHeight = $navBar.style.maxHeight
          $navBar.style.maxHeight = this.maxHeight
          this.maxHeight = tempHeight
        }
      }
    },
  }
</script>

<style>
</style>
