
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import axios from 'axios'
import VueAxios from 'vue-axios'
//axios.defaults.baseURL = 'http://kru-santi.com';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('#_token').getAttribute('value');
Vue.use(VueAxios, axios)
window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import VueSwal from 'vue-swal'
Vue.use(VueSwal)

import Vuex from 'vuex'
Vue.use(Vuex)

import App from './views/App'
import Home from './views/Home'
const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            component: Home          
        },        
    ]
});

Vue.component('example-component', require('./components/ExampleComponent.vue'));


const app = new Vue({
    el: '#app',
    components: { App },
    router
});
