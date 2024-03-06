<template>
<div :class="this.$store.state.indeOfTheme==0?'bg_search_l':'bg_search_d'" class=" absolute top-0 left-0 w-full h-full duration-500 z-50 flex items-start justify-end" @click="closeU()">
    <div :class="this.$store.state.indeOfTheme==0?' bg-white  border px-5 border-green-500 pt-3':' bg-dark border text-white px-5 border-green-500 pt-3'" class="  mt-14 mr-2 flex flex-col rounded-lg">
        <div class="flex flex-row my-1 items-center">
            <i class="fas fa-gears text-xl"></i>
            <span class=" ml-2">Paramètre</span>
        </div>
        <div class="flex flex-row my-1 items-center border-t py-2" @click="logOut()">
            <i class="fas fa-power-off text-xl"></i>
            <span class=" ml-2">Déconnexion</span>
        </div>
    </div>
</div>
</template>

<script> 
export default {
    components: { 
    },
    data() {
        return {  

        }
    },
    methods: {

        setImg(img) {
            return require('../assets/produits/' + img)
        },
       
        hidePopup() {
            this.$store.state.hidePopup = true
        },
        closeU(){
            this.$store.state.hidePopupUser = true
        },
        logOut() {
             window.localStorage.setItem('*_*', JSON.stringify({
                 isLg: false
             }))
             this.$store.state.logged = false
         },
    },
    mounted() {
        setTimeout(() => {
            this.listData = this.$store.state.generalData
        }, 2000);
    },
    updated() { 
    }
}
</script>

<style scoped>
.bg_search_l {
    background: rgba(0, 0, 0, 0.616);
    backdrop-filter: blur(3px);
}

.bg_search_d {
    background: rgba(248, 248, 248, 0); 
}
</style>
