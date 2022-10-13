<template>
    <div class="nav">
        <router-link to='/'>Home</router-link>
        <router-link to='/add'>Add Restaurent</router-link>
        <!-- <router-link to='/update'>Update Restaurent</router-link> -->
        <a href='#' @click="handleLogout">Logout</a>
    </div>
</template>

<script>
export default {
    name:'HeaderComp',
    components:{
        
    },
    methods:{
        async handleLogout(){
            localStorage.removeItem("user-info")
            this.$router.push({name:'SignUp'})
        }
    }
}
</script>

<style>
.nav{
    background-color: #333;
    overflow:hidden;
}

.nav a{
    float:left;
    color:#f2f2f2;
    text-align:center;
    padding:10px 14px;
    text-decoration:none;
    font-size:16px;
    margin-right:4px
}

.nav a:hover{
    background-color:#ddd;
    color:#222;
    transition:0.5s;
    transform:scale(1.1);
}
</style>