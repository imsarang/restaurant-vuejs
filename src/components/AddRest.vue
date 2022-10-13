<template>
    <HeaderComp/>
    <h1>Add Restaurent Page</h1>
    <form class="add">
        <input type='text' placeholder="Name of restaurent" v-model="restaurant.name" name="name"/>
        <input type='text' placeholder="Address" v-model="restaurant.address" name="address"/>
        <input type='text' placeholder="Contact" v-model="restaurant.contact" name="contact"/>
        <button type="button" @click="handleAdd">Add New Restaurent</button>
    </form>
</template>

<script>
import axios from 'axios';
import HeaderComp from './HeaderComp.vue';
export default {
    name: "AddRest",
    components: { HeaderComp },
    data(){
        return{
            restaurant:{
                name:"",
                address:"",
                contact:""
            }
        }
    },
    methods:{
        async handleAdd(){
            let result = await axios.post("http://localhost:3000/restaurant",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact
            })
            if(result.status == 201){
                alert('New Restaurent Added')
            }
        }
    }
}
</script>

<style>

</style>