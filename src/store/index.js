import Vue from 'vue';
import Vuex from 'vuex';
import { stat } from 'fs';
//import * as getters from './getters';
//import * as actions from './actions';
//import * as mutations from './mutators';

Vue.use(Vuex);

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";
const LOGOUT = "LOGOUT";

const store = new Vuex.Store({
  state: {
      isLoggedIn: !!localStorage.getItem("token"),
      currentUsername: '',
      isLoginFailed: false,
  },
  mutations: {
    [LOGIN] (state) {
      state.pending = true;
    },
    [LOGIN_SUCCESS] (state, username) {
      state.isLoggedIn = true;
      state.currentUsername = username;
      state.pending = false;
      state.isLoginFailed = false;
    },
    [LOGIN_FAILURE] (state) {
      state.isLoginFailed = true;
      state.isLoggedIn = false;
      state.currentUsername = '';
      state.pending = false;
    },
    [LOGOUT](state) {
      state.isLoggedIn = false;
      state.currentUsername = '';
    }
  },
  actions: {
    login({ commit }, creds) {
      commit(LOGIN); // show spinner
      console.log(JSON.stringify(creds));
      if(creds.username === 'admin' && creds.password === 'admin') {
        return new Promise(resolve => {
          setTimeout(() => {
            const uuidv4 = require('uuid/v4');
            localStorage.setItem("token", uuidv4());
            commit(LOGIN_SUCCESS, creds.username);
            resolve();
          }, 1000);
        });
      } else {
        return new Promise(resolve => {
          setTimeout(() => {
            commit(LOGIN_FAILURE);
            resolve();
          }, 1000);
        });
      }
    },
    logout({ commit }) {
      localStorage.removeItem("token");
      commit(LOGOUT);
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn;
     },
    currentUsername: state => {
      return state.currentUsername;
     },
    isLoginFailed: state => {
      return state.isLoginFailed;
     }
  },
  plugins: process.env.NODE_ENV !== 'production'
  //    ? [createLogger()]
    ? []
    : [],
});

export default store;
