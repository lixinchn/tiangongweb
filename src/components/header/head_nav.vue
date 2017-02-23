<template>
  <div>
    <headNavDropdown></headNavDropdown>
    <headNavList></headNavList>
  </div>
</template>

<script type="es6">
  import headNavDropdown from './head_nav_dropdown'
  import headNavList from './head_nav_list'
  export default {
    name:'head-nav',
    components: {headNavDropdown, headNavList},
    data(){
      return {
      }
    }
  }
</script>

<style>
</style>