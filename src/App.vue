<template>
<div class=" overflow-auto overflow-x-hidden w-full h-full">
    <accueilView></accueilView>
    <horizontalBarVue></horizontalBarVue>
    <aboutVue></aboutVue>
    <portfolioView></portfolioView>
    <ourPortFolioView></ourPortFolioView>
    <testMonialViewVue></testMonialViewVue>
</div>
</template>

<script>
import accueilView from './view/accueilView.vue';
import horizontalBarVue from './components/horizontalBar.vue';
import aboutVue from './view/aboutView.vue';
import portfolioView from './view/portfolioView.vue';
import ourPortFolioView from './view/ourPortFolioView.vue';
import testMonialViewVue from './view/testMonialView.vue'
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
        testMonialViewVue
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
