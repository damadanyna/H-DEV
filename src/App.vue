<template>
<div class=" flex w-full h-full">
    <notify_ id="note_" class=""></notify_>
    <div v-if="this.$store.state.logged == true" class=" w-full h-full">
        <div></div>
        <horizontal_bar class=" shadow-lg"></horizontal_bar>
        <div class=" flex flex-row h-full " :class=" this.$store.state.theme[this.$store.state.indeOfTheme].bg ">
            <navBar></navBar>
            <router-view></router-view>
        </div>
    </div>

    <login_Vue class="w-full " v-else></login_Vue>
</div>
<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import horizontal_bar from './components/horizontalBar.vue'
import navBar from './components/navBar.vue'
import login_Vue from './view/auth/login_.vue'
import notify_ from '@/components/notify_'

export default {
    name: 'App',

    data() {
        return {
            theme: this.$store.state.theme,
            i_: this.$store.state.indeOfTheme 
        }
    },

    components: {
        horizontal_bar,
        navBar,
        login_Vue,
        notify_
    },
    mounted() {
        document.getElementById('c_load').style.display = 'none'
    },
    beforeMount() {

        var data = JSON.parse(window.localStorage.getItem('*_*')) ? JSON.parse(window.localStorage.getItem('*_*')) : '';
        this.$store.state.logged = data.isLg;
    },
    updated(){ 
        this.theme= this.$store.state.theme
            this.i_= this.$store.state.indeOfTheme 
    }

}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
