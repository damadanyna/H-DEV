<template>
<div class=" overflow-auto overflow-x-hidden w-full h-full">
    <accueilView class=" w-full h-full"></accueilView>
    <horizontalBarVue></horizontalBarVue>
    <aboutVue class="h-[110vh] mt-20  "></aboutVue>
    <portfolioView class="h-[120vh]"></portfolioView>
    <ourPortFolioView class=" mt-52 "></ourPortFolioView>
    <testMonialViewVue class=" h-[100vh]  mt-[11rem] "></testMonialViewVue>
    <contactView class=" h-[92%] mt-[30vh]"></contactView>
</div>
</template>

<script>
import accueilView from './view/accueilView.vue';
import horizontalBarVue from './components/horizontalBar.vue';
import aboutVue from './view/aboutView.vue';
import portfolioView from './view/portfolioView.vue';
import ourPortFolioView from './view/ourPortFolioView.vue';
import testMonialViewVue from './view/testMonialView.vue';
import contactView from './view/contactView.vue';
export default {
    name: 'App',

    data() {
        return {}
    },

    components: {
        accueilView,
        horizontalBarVue,
        aboutVue,
        portfolioView,
        ourPortFolioView,
        testMonialViewVue,
        contactView
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
