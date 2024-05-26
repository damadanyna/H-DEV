<template>
<div class=" flex justify-between text-white w-full items-end py-2  pr-3 bg-stone-950">
    <div>
        <div class=" px-2 ml-3 items-center flex rounded-lg bg-stone-600">
            <i class="fas fa-user-astronaut"></i>
            <span class=" ml-2 " v-text=" this.$store.state.user.user_name"> </span>
        </div>
    </div>
    <div class="flex items-centre ">
        <!-- fas fa-house-chimney -->
        <router-link :to="item.url" v-for="item, i in menuList" :key="i" class="   bg-stone-800 mr-3 px-2 items-center flex rounded-full py-[.57rem]">
            <i :class="item.ico "></i>
            <div class=" realtive ">
                <span v-if=" item.label!=0" class=" absolute w-5 h-5  -ml-1 bg-red-600 items-center text-sm justify-center flex rounded-full" v-text=" item.label"></span>
            </div>
        </router-link>
 
        <button @click="logOut()" class=" bg-stone-800 px-2  items-center flex rounded-full py-[.57rem]">
            <i class="fas fa-magnifying-glass "></i>
        </button>
        <!-- <i class="fas fa-ellipsis-vertical text-xl"></i> -->
    </div>
</div>
</template>

<script>

import io from 'socket.io-client'
var socket = io('http://localhost:4044')
export default {
    data() {
        return { 
            menuList: [ 
                {
                    ico: 'fas fa-user-group ',
                    url: '/',
                    label: []
                },
                {
                    ico: 'fas fa-message',
                    url: '/login',
                    label: []
                },
                {
                    ico: 'fas fa-bell',
                    url: '/notification',
                    label: []
                }
            ],
        }
    },
    methods: {
        backTo() {
            this.$router.replace({
                path: '/'
            })
        },
        logOut() {
            this.$http.get("/api/logout").then(() => {
                window.location.reload()
            })
        }
    },
    mounted() {

        setTimeout(() => { 
            this.$http.get('/api/get_notification/' + this.$store.state.user.user_id).then((rep) => {
               this.menuList[2].label = rep.data.notif 
               console.log(rep.data); 
            }) 
            socket.on(`set_notif_to_${this.$store.state.user.user_id}`, (rep) => {
               this.menuList[2].label = rep.notif 

            })
        }, 500);

        // console.log(this.$store.state.user);
    }
}
</script>
