import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import firebase from 'firebase/app';
import config from './components/firebase.config';
import 'firebase/firestore';
import VueFireStore from 'vue-firestore';

Vue.config.productionTip = false;

var firebaseApp = firebase.initializeApp(config);

Vue.use(VueFireStore);


var db = firebaseApp.firestore();
export default db;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
