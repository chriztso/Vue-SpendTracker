<template>
  <div class = 'signup'>
    <h1> Create account </h1>
      Email <input type = 'text' placeholder = 'username' v-model = 'email'> 
      Password <input type = 'text' placeholder = 'password' v-model = 'password'>    
      <input type = 'submit' value = 'Create account' v-on:click = 'createUser'>
  </div>
</template>

<script>
import firebase from 'firebase';

export default{
    data() {
        return {
            email : '', 
            password : ''
        }
    }, 
    methods : {
        createUser : function(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then((user) => {
                alert('Your account has been created!');
                this.$router.push({name : 'Login'})
            })
            .catch((err) => {
                alert('Error : ' + err);
            })
        }
    }
}
</script>

<style>
.signup{
    display: flex; 
    flex-direction: column;
    width: 400px; 
    position: relative; 
    left: 500px;
}
</style>