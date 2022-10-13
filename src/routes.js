import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/LoginPage.vue'
import { createRouter,createWebHistory } from 'vue-router'
import AddRest from './components/AddRest.vue'
import UpdateRest from './components/UpdateRest.vue'
const routes=[
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'LoginPage',
        component:LoginPage,
        path:'/login'
    },
    {
        name:"AddRest",
        component:AddRest,
        path:'/add'
    },
    {
        name:'UpdateRest',
        component:UpdateRest,
        path:'/update/:id'
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router