<template>
  <div>
    <h1>Login Page</h1>
      <div class =  'fields'>
        Username: <input type = 'text' placeholder = 'username'>
        Password:  <input type = 'text' placeholder = 'password'>
      </div>
      <p> Sign up for account <router-link to = '/signup'> here </router-link> </p>  
  </div>
</template>


<style>
.fields{
    display: flex; 
    flex-direction: column;
    width: 400px;
    position: relative; 
    left: 500px;
}
</style>

