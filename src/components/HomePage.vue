<template>
  <div>
    <div class="hello">
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
      <div class = 'spendChart'>
        <div>
          <p>Spending</p>
          Month: <input type = 'text' v-model= 'month'>
          Amount: <input type = 'text' v-model= 'amount'> <br>
          <input type = "submit" value = "Enter spend" v-on:click = "addMonthlySpend"> 
        </div>
        <div >
          <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
        </div>
      </div>
    </div>
    <input type = 'submit' value = "Logout" v-on:click = 'logoutUser'>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import db from '../main.js';
import firebase from 'firebase';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }, 
  components: {
    apexchart : VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        xaxis: {
          categories: [],
        },
      },
      series: [{
        name: 'series-1',
        data: []
      }], 
      transactions : [],
      item: '', 
      price: '', 
      month: '', 
      amount: '', 
      graphType : []
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
    }, 
    addMonthlySpend(){
      this.chartOptions.xaxis.categories.push(this.month);
      this.series[0].data.push(this.amount);
      this.month =  "";
      this.amount = "";
    }, 
    logoutUser(){
      firebase.auth().signOut()
      .then(() => {
        alert('Logged out!');
        this.$router.push({name : 'Login'});
      })
      .catch((err) => {
        alert('Error is ' + err);
      })
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

.hello{
  display: flex; 
  flex-direction: row;
}

.spendChart{
  display: flex; 
  flex-direction: column;
  height: 500px;
  width: 500px;
  margin-left: 100px;
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
}

</style>
