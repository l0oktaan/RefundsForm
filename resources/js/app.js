
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

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
import Index from './views/Index'
import Menu from './views/index/Menu'
import Add from './views/index/Add'
import List from './views/index/List'
const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            component: Home          
        },
        {
            path: '/index',
            component: Index,
            mode: 'history',
            children: [
                {
                    path: '',
                    name: 'menu',
                    component: Menu
                },
                {
                    path: '/index/add',
                    name: 'add',
                    component: Add
                },
                {
                    path: '/index/list',
                    name: 'list',
                    component: List
                }
            ]
        }      
    ]
});

Vue.component('example-component', require('./components/ExampleComponent.vue'));


const app = new Vue({
    el: '#app',
    components: { App },
    router
});
