<template>
  <div id='unauthorized-page' class='jumbotron text-center'>
    <h1>Unauthorized</h1>
    <h2>
      <router-link to='/' v-if='!isLoggedIn'>
        <button class='btn btn-primary'>Login</button>
      </router-link>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'UnauthorizedPage',
};
</script>

<style scoped>
.jumbotron {
  background-color: #1a2935;
  color: #fff;
  padding: 100px 25px;
  font-family: Montserrat, sans-serif;
}
</style>


