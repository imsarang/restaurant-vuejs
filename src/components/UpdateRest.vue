<template>
    <HeaderComp/>
    <h1>Update Restaurent Page</h1>
    <form class="add">
        <input type='text' placeholder="Name of restaurent" v-model="restaurant.name" name="name"/>
        <input type='text' placeholder="Address" v-model="restaurant.address" name="address"/>
        <input type='text' placeholder="Contact" v-model="restaurant.contact" name="contact"/>
        <button type="button" @click="handleUpdate">Update</button>
        <button class="remove" type="button" @click="handleDelete">Remove Restaurant</button>
    </form>
</template>

<script>
import axios from 'axios';
import HeaderComp from './HeaderComp.vue';
export default {
    name: "UpdateRest",
    components: { HeaderComp },
    data(){
        return {
            restaurant:{
                name:"",
                address:"",
                contact:""
            }
        }
    },
    async mounted(){
        let user = localStorage.getItem("user-info")
        if(!user) {
            this.$router.push({name:"Signup"})
        }
        let result = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id)
        if(!result){
            alert('No Restaurant present')
        }
        result = result.data
        this.restaurant.name = result.name
        this.restaurant.address = result.address
        this.restaurant.contact = result.contact
    },
    methods:{
        async handleUpdate(){
            let result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact
            })
            if(result)
            this.$router.push({name:"HomePage"})
        },
        async handleDelete(){
            let result = await axios.delete("http://localhost:3000/restaurant/"+this.$route.params.id)
            if(result){
                alert("Restaurant Removed")
                this.$router.push({name:"HomePage"})
            }
        }
    }
}
</script>

<style>
.remove{
    background-color:red;
    margin-left:2%;
}
</style>