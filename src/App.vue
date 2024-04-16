<template>
<div id="container" class=" overflow-auto overflow-x-hidden w-full h-full">
    <accueilView class=" w-full  "></accueilView>
    <horizontalBarVue></horizontalBarVue>
    <!-- <aboutVue class="h-[110vh] mt-20  "></aboutVue> -->
    <ourPortFolioView id="accueil" class=" "></ourPortFolioView>
    <portfolioView id="service" class=""></portfolioView>
    <!-- <testMonialViewVue class=" h-[100vh]  mt-[11rem] "></testMonialViewVue> -->
    <contactView id="contact" class=""></contactView>
    <menuView class="bg-[#201F33]"></menuView>
</div>
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

    },
    updated() {}

}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
