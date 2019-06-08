<template>
  <div class="hello">
    You are logged in!
    <div class = 'listOne'>
      <div> 
        Purchase:<input type = 'text' class = 'enter' placeholder = 'purchase' v-model = 'item'>
        Price: <input type = 'text' placeholder = 'price' v-model = 'price'>
        <input type = 'submit' value = "Enter" v-on:click = "addItem">
      </div>  
      <div class = 'transaction' v-for = 'transaction, index in transactions'>
        <div class = 'item'> {{transaction["item"]}} </div>
        <div class = 'price'> {{transaction["price"]}} </div>
        <input type = 'submit' value = "Delete" v-on:click = "deleteItem(transaction['.key'])"> 
      </div>
    </div>
  </div>
</template>

<script>
import db from '../main.js';
import firebase from 'firebase';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }, 
  data() {
    return {
      transactions : [],
      item: '', 
      price: ''
    }
  }, 
  firestore(){
    return {
       transactions : db.collection("purchases")
    }
  }, 
  methods : {
    addItem(){
      db.collection('purchases').add({item: this.item, price: this.price});
      this.item  = '';
      this.price = '';
    },
    deleteItem(id){
      db.collection('purchases').doc(id).delete();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.enter{
  width: 200px;
}

.transaction{
  display: flex; 
  flex-direction: row;
  border: 1px solid black;
  width: 300px;
  justify-content: space-evenly;
}

.listOne{
  width: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
}

</style>
