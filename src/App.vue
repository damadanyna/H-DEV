<template>
<div class=" bg-stone-950 flex flex-col  w-full h-full duration-1000">
    <headerChat></headerChat>
    <router-view></router-view> 
</div>
</template>

<script>  
import headerChat from './components/contact/headerChat.vue';
export default {
    components :{ 
        headerChat
    },
    data() {
        return {};
    },
 
    methods: {
        // setSocket() {
        //   this.$http.get('/api/check')
        // },
        async checkIfLooged() {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const rep = await this.$http.get('/api/check', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }) 
                    this.$store.state.user = rep.data.user
                    return true;
                } catch (error) {
                    return false;
                }
            }
        }
    },
    mounted() {
        const init = async () => {
            const isLoggedIn = await this.checkIfLooged();
            if (isLoggedIn) {
                this.$router.replace({
                    name: 'accueil'
                })
            } else {
                this.$router.replace({
                    name: 'login'
                })
            }
        }
        setTimeout(() => {
            init(); 
        }, 200);


     

    },
};
</script>

<style>
 
</style>
