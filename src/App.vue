<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Login from './components/login.vue';
import Signup from './components/signup.vue';

export default {
  name: 'app',
  components: {
    Login,
    Signup
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
