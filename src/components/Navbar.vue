<template>
  <nav id='navbar-component' class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>                        
        </button>
        <slot name='home'></slot>
      </div>
      <div class="collapse navbar-collapse" id="navbar">
        <slot name='menu-items'></slot>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbar {
  margin-bottom: 0;
  background-color: #011213;
  z-index: 9999;
  border: 0;
  font-size: 12px !important;
  line-height: 1.42857143 !important;
  letter-spacing: 4px;
  border-radius: 0;
  font-family: Montserrat, sans-serif;
}
.navbar li a, .navbar .navbar-brand {
  color: #fff !important;
}
.navbar-nav li a:hover, .navbar-nav li.active a {
  background-color: #4e5454 !important;
}
.navbar-default .navbar-toggle {
  border-color: transparent;
  color: #fff !important;
}
</style>


