<template>
<div class=" flex justify-between text-white w-full items-end py-2  pr-3 bg-stone-950">
    <div>
    </div>
    <div class="flex items-centre ">
        <!-- fas fa-house-chimney -->
        <router-link :to="item.url" v-for="item, i in menuList" :key="i" class="   bg-stone-800 mr-3 px-2 items-center flex rounded-full py-[.57rem]">
            <i :class="item.ico "></i>
        </router-link>
        

        <button @click="logOut()" class=" bg-stone-800 px-2  mr-3 items-center flex rounded-full py-[.57rem]">
            <i class="fas fa-bell"></i>
        </button>
        <button @click="logOut()" class=" bg-stone-800 px-2  mr-3 items-center flex rounded-full py-[.57rem]">
            <i class="fas fa-power-off "></i>
        </button>
        <i class="fas fa-ellipsis-vertical text-xl"></i>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            menuList:[
                { 
                    ico:'fas fa-house-chimney ',
                    url:'/'
                },
                { 
                    ico:'fas fa-user-group ',
                    url:'/contact'
                },
                { 
                    ico:'fas fa-message',
                    url:'/login'
                }
            ]
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
    mounted(){
        console.log(this.$store.state.user);
    }
}
</script>
