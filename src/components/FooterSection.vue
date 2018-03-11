<template>
  <footer id='footer-section' class='container-fluid bg-footer text-center footer-section'>
    <p>Find the source code in <a href='https://github.com/rajmishra757/vue-demo-app' target='blank'>www.github.com</a>.</p> 
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
};
</script>


<style scoped>
.footer-section {
  padding-top: 30px;
  padding-bottom: 30px;
}
.bg-footer { 
  background-color: #131819; /* Black Gray */
  color: #fff;
}
#footer-section p {
  font-size: 16px;
}
</style>

