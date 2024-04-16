<template>
<!-- <div id="container" class=" overflow-auto overflow-x-hidden w-full h-full"> -->
    <accueilView id="header_page"  class=" w-full overflow-hidden  "></accueilView>
    <!-- <aboutVue class="h-[110vh] mt-20  "></aboutVue> -->
    <horizontalBarVue id="nav_bars_h"></horizontalBarVue>
    <ourPortFolioView id="accueil" class=" overflow-hidden relative "></ourPortFolioView>
    <portfolioView id="service" class=" overflow-hidden"></portfolioView>
    <!-- <testMonialViewVue class=" h-[100vh]  mt-[11rem] "></testMonialViewVue> -->
    <contactView id="contact" class=" overflow-hidden"></contactView>
    <menuView class="bg-[#201F33]  overflow-hidden"></menuView>
<!-- </div> -->
</template>

<script>
import accueilView from './view/accueilView.vue';
import horizontalBarVue from './components/horizontalBar.vue';
// import aboutVue from './view/aboutView.vue';
import portfolioView from './view/portfolioView.vue';
import ourPortFolioView from './view/ourPortFolioView.vue';
// import testMonialViewVue from './view/testMonialView.vue';
import contactView from './view/contactView.vue';
import menuView from './view/menuView.vue'
export default {
    name: 'App',

    data() {
        return {}
    },

    components: {
        accueilView,
        horizontalBarVue,
        //aboutVue,
        portfolioView,
        ourPortFolioView,
        //testMonialViewVue,
        contactView,
        menuView
    },
    mounted() { 
        window.addEventListener('scroll',()=>{
            var elt_ =document.getElementById('nav_bars_h')
            if (window.scrollY>=window.innerHeight) { 
                elt_.style.position='fixed';
                elt_.style.top='0'
            }
            else if (window.scrollY<window.innerHeight) { 
                elt_.style.position='unset';
                elt_.style.top='0'
            } 
        })

    },
    updated() {}

}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
