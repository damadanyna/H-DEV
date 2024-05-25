<template>
<div class=" bg-stone-950 flex   w-full h-full duration-1000">
    <router-view></router-view>
</div>
</template>

<script>
export default {
    data() {
        return {};
    },

    components: {},
    methods: {
        // setSocket() {
        //   this.$http.get('/api/check')
        // },
        async checkIfLooged() {
            const token = localStorage.getItem('token');
            console.log(token);
            if (token) {
                try {
                      await this.$http.get('/api/check', {
                        headers: {'Authorization':`Bearer ${token}`}
                    }) 
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
                // this.$store.state.user=rep.data.data
                this.$router.replace({
                    name: 'accueil'
                })
            } else {
                this.$router.replace({
                    name: 'login'
                })
            }
        }
        init();
 
        
        this.$http.get('/api/get_notification/' + this.$store.state.user.user_id).then((rep) => {
            console.log('REP: ', rep.data);
        })
    },
};
</script>

<style>
 
</style>
