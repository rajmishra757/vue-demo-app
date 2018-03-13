<template>
  <div id='values' class='container-fluid bg-grey'>
    <div class='row'>
      <div class='col-sm-4'>
        <span class='glyphicon glyphicon-globe logo slideanim'></span>
      </div>
      <div class='col-sm-8'>
        <h2>Our Values</h2><br>
        <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br>
        <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Values',
};
</script>

<style scoped>
h2 {
  font-size: 24px;
  text-transform: uppercase;
  color: #303030;
  font-weight: 600;
  margin-bottom: 30px;
}
h4 {
  font-size: 19px;
  line-height: 1.375em;
  color: #303030;
  font-weight: 400;
  margin-bottom: 30px;
}
.container-fluid {
  padding: 60px 50px;
}
.bg-grey {
  background-color: #f6f6f6;
}
.logo {
  color: #0b4d82;
  font-size: 200px;
}
@media screen and (max-width: 768px) {
  .col-sm-4 {
    text-align: center;
    margin: 25px 0;
  }
}
@media screen and (max-width: 480px) {
  .logo {
    font-size: 150px;
  }
}
</style>


