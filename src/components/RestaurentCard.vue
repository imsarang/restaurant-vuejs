<template>
    <router-link :to="'/update/'+id" class="card-route">
        <div class="card">
        <div>
            <img :src="image"/>
        </div>
        <div class="content">
            <div class="name">{{name}}</div>
            <div class="address">{{address}}</div>
            <div class="address">{{contact}}</div>
        </div>
    </div>
    </router-link>
</template>

<script>
import rest1 from '../assets/rest1.jpg'
export default {
    name:"RestaurentCard",
    props:{
        id:Number,
        name:String,
        contact:String,
        address:String
    },
    data(){
        return {
            image : rest1
        }
    },
}
</script>

<style>
a{
    text-decoration: none;
    color:black
}
.card{
    width:400px;
    height: 400px;
    border:1px solid black;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px rgb(194, 188, 188);
}
.card div img{
    width:100%;
}
.name{
    font-size: 35px;
    font-weight: 700;
    /* float:left; */
}
.content{
    display:block
}
.card:hover{
    transform:scale(1.05);
    transition: 0.5s;
    box-shadow:2px 5px 5px 5px rgb(99, 89, 89)
}
</style>