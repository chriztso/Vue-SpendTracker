import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/login.vue';
import Signup from './components/signup.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/', 
            name:  'Login', 
            component : Login
        }, 
        {
            path: '/signup', 
            name:  'Signup', 
            component : Signup
        }, 

    ]
})