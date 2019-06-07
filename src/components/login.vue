<template>
  <div>
    <h1>Login Page</h1>
      <div class =  'fields'>
        Email: <input type = 'text' placeholder = 'email' v-model = 'email'>
        Password:  <input type = 'text' placeholder = 'password' v-model = 'password'>
        <input type = 'submit' value = "Sign In" v-on:click = 'loginUser'>
      </div>
      <p> Sign up for account <router-link to = '/signup'> here </router-link> </p>  
  </div>
</template>

<script>
import firebase from 'firebase';

export default{
    data(){
        return {
            email: '', 
            password : ''
        }
    }, 
    methods : {
      loginUser : function(){
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
              alert('You are logged in!');
              this.$router.push({name : "Home"})
          })
          .catch((err) => {
              alert('Error is' + err)
          })
      }
    }
}
</script>

<style>
.fields{
    display: flex; 
    flex-direction: column;
    width: 400px;
    position: relative; 
    left: 500px;
}
</style>

