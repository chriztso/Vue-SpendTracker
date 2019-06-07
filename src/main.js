import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import firebase from 'firebase';
import config from './components/firebase.config';

Vue.config.productionTip = false;

firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
