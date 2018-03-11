<template>
  <div id="app">
    <main-page/>
  </div>
</template>

<script>
import MainPage from './components/MainPage';

export default {
  name: 'App',
  components: {
    'main-page': MainPage,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
