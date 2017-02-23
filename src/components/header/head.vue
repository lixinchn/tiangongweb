<template>
  <div class="nav-container">
    <nav>
      <div class="nav-bar">
        <headLogo></headLogo>
        <headNav></headNav>
      </div>
    </nav>
  </div>
</template>

<script type="es6">
  import headLogo from './head_logo'
  import headNav from './head_nav'
  export default {
    name: 'tg-head',
    components: {headLogo, headNav}
  }
</script>