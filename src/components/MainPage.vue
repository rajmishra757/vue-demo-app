<template>
  <div>
    <div id='main-page' class='container-fluid'>
      <spinner v-if='$store.getters.pending'/>
      <div class='row content' v-if='!$store.getters.pending'>
          <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12
            bg-left text-center main-page-section'>
              <img src='../assets/vue.jpg'
                class='img-responsive img-circle'
                alt='Logo' width='350' height='350'/>
              <h3>A demo application using Vue.js</h3>
          </div>
          <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12
            bg-right text-center main-page-section'>
            <div class='form-container'>
              <h2>Login</h2>
              <alert :alertStyleClass='alertStyleClass' v-if='$store.getters.isLoginFailed'>
                Invalid credentials
              </alert>
              <form class='form-horizontal' @submit.prevent='login({ username, password })'>
                <div class='form-group'>
                  <label class='control-label col-sm-2' for='username'>Username:</label>
                  <div class='col-sm-10'>
                    <input type='text' v-model='username' class='form-control'
                    id='username' placeholder='Enter username' name='username'>
                  </div>
                </div>
                <div class='form-group'>
                  <label class='control-label col-sm-2' for='password'>Password:</label>
                  <div class='col-sm-10'>          
                    <input type='password' v-model='password' class='form-control'
                    id='password' placeholder='Enter password' name='password'>
                  </div>
                </div>
                <div class='form-group'>        
                  <div class='col-sm-offset-2 col-sm-10'>
                    <button type='submit' class='btn btn-info pull-right'>Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
    <footer-section/>
  </div>
</template>

<script>
import Alert from './Alert';
import FooterSection from './FooterSection';
import Spinner from './Spinner';

export default {
  name: "MainPage",
  data: function() {
    return {
      username: '',
      password: '',
      alertStyleClass: 'alert-danger',
    };
  },
  components: {
    'alert': Alert,
    'footer-section': FooterSection,
    'spinner': Spinner,
  },
  methods: {
    login: function () {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      }).then(() => {
        console.log('then');
        if(this.$store.getters.isLoggedIn) {
          this.$router.push('/home');
        }
      });
    }
  }
};
</script>


<style scoped>
.main-page-section {
  padding-top: 85px;
  padding-bottom: 85px;
}
.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.row > [class*="col-"] {
  display: flex;
  flex-direction: column;
}
.margin {
  margin-bottom: 45px;
}
.bg-left {
  background-color: #1abc9c; /* Green */
  color: #ffffff;
}
.bg-right {
  background-color: #474e5d; /* Dark Blue */
  color: #ffffff;
}
#main-page img {
  margin: auto;
  display: inline;
}
.form-container {
  margin: auto;
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
}
#main-page form {
  padding-top: 30px;
}
</style>

