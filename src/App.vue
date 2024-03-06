<template>
<div class=" flex w-full h-full duration-1000" :class="this.$store.state.theme[this.$store.state.indeOfTheme].bg">
 
    <notify_ id="note_" class=""></notify_>
    <popRecherche_ v-if="this.$store.state.hidePopup==false"> </popRecherche_>
    <popupDec v-if="this.$store.state.hidePopupUser==false"></popupDec>
    <div v-if="this.$store.state.logged == true" class=" w-full h-full">
        <div></div>
        <horizontal_bar :class="this.$store.state.theme[this.$store.state.indeOfTheme].bg_h_nav"></horizontal_bar>
        <div class=" flex flex-row h-full ">
            <navBar></navBar>
            <router-view></router-view>
        </div>
    </div>  

    <login_Vue class="w-full " v-else></login_Vue>
</div>
<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script> 
import popRecherche_ from './components/popRecherche_.vue'
import popupDec from './components/poputDecnx.vue'
import horizontal_bar from './components/horizontalBar.vue'
import navBar from './components/navBar.vue'
import login_Vue from './view/auth/login_.vue'
import notify_ from '@/components/notify_'

export default {
    name: 'App',

    data() {
        return {}
    },

    components: {
        popRecherche_,
        horizontal_bar,
        navBar,
        login_Vue,
        notify_,popupDec
    },
    mounted() {
        document.getElementById('c_load').style.display = 'none'
        // console.log(this.$store.state.theme[this.$store.state.indeOfTheme]);

        // var actRout= document.querySelector('.router-link-exact-active ') 
        // actRout.style.color="#00c93c";
        //     color: #00c93c;  
        // border-left: 2px solid #00c93c;
        // background-color: rgb(237, 253, 237);
        // animation: animeit 500 forwards;
    },
    beforeMount() {

        var data = JSON.parse(window.localStorage.getItem('*_*')) ? JSON.parse(window.localStorage.getItem('*_*')) : '';
        this.$store.state.logged = data.isLg;
    },
    updated() {
        // this.theme= this.$store.state.theme
        //     this.i_= this.$store.state.indeOfTheme 
    }

}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
