<template>
<div id='home-page-parent'>
  <div v-if='isLoggedIn' id='home-page' data-spy='scroll' data-target='.navbar' data-offset='60'>
    <navbar>
      <a slot='home' class='navbar-brand' href='#home-page'>HOME</a>
      <ul slot='menu-items' class='nav navbar-nav navbar-right'>
        <li><a href='#about'>ABOUT</a></li>
        <li><a href='#values'>VALUES</a></li>
        <li><a href='#services'>SERVICES</a></li>
        <li><a href='#' v-if='isLoggedIn' @click='logout'>LOGOUT</a></li>
      </ul>
    </navbar>

    <header-section/>

    <!-- Container (About Section) -->
    <about/>

    <!-- Container (Values Section) -->
    <values/>

    <!-- Container (Services Section) -->
    <services/>

    <footer-section/>
  </div>
  <unauthorized-page v-else/>
</div>
</template>

<script>
import FooterSection from './FooterSection';
import Navbar from './Navbar';
import UnauthorizedPage from './UnauthorizedPage';
import About from './About';
import Values from './Values';
import Services from './Services';
import HeaderSection from './HeaderSection';

export default {
  name: 'HomePage',
  components: {
    'footer-section': FooterSection,
    'navbar': Navbar,
    'unauthorized-page': UnauthorizedPage,
    'about': About,
    'values': Values,
    'services': Services,
    'header-section': HeaderSection,
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout() {
     this.$store.dispatch('logout').then(() => {
        if(!this.$store.getters.isLoggedIn) {
          this.$router.push('/');
        }
      });
    }
  },
}
</script>

<style scoped>
#home-page {
  font: 400 15px Lato, sans-serif;
  line-height: 1.8;
  color: #818181;
} 
</style>


