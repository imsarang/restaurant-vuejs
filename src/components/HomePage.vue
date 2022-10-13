<template>
    <HeaderComp/>
    <h1>Hello {{name}}! Welcome to Home Page</h1>
    <div class='main-page'>
        <div v-for="item in restaurents" :key="item.id">
        <RestaurentCard :id='item.id' :name='item.name' :contact='item.contact' :address='item.address'/>
    </div>
    </div>
    
</template>

<script>
import HeaderComp from './HeaderComp.vue'
import RestaurentCard from './RestaurentCard.vue'
import axios from 'axios'
export default {
    name: "HomePage",
    components:{
    HeaderComp,
    RestaurentCard
},
    data(){
        return {
            name:'',
            restaurents :[]
        }
    },
    async mounted(){
        let user = localStorage.getItem('user-info')
        if(!user){
            this.$router.push({name:'SignUp'})
        }
        user = JSON.parse(user)
        // console.log(JSON.parse(user).name);
        this.name = user.name

        let result = await axios.get(' http://localhost:3000/restaurant')
        // console.log(result.data);
        this.restaurents = result.data
    },
}
</script>

<style>
.main-page{
    width:100%;
    display:flex;
    flex-wrap: wrap;
}
.main-page div{
    padding:1%;
}
</style>