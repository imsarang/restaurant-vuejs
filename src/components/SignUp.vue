<template>
  <img class='logo' alt="logo" src="../assets/logo.png">
    <h1>Sign Up</h1>
    <!-- input fields -->
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name"/>
        <input type="text" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Password"/>
        <button v-on:click="signup">Sign Up</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>

</template>

<script>
import axios from 'axios'

export default{
    name:'SignUp',
    data(){
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signup(){
            // console.log('signup',this.name,this.email)
            const result =await axios.post("http://localhost:3000/users",{
                email:this.email,
                name:this.name,
                password:this.password
            })

            // storing in localstorage
            if(result.status==201){
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'HomePage'})
            }   
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info')
        if(user){
            this.$router.push({name:'HomePage'})
        }
    }
}
</script>

<style>

</style>