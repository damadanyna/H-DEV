<template>
<div class=" overflow-auto overflow-x-hidden w-full h-full">
    <accueilView></accueilView>
    <horizontalBarVue></horizontalBarVue>
    <aboutVue></aboutVue>
</div>
</template>

<script>
import horizontalBarVue from './components/horizontalBar.vue'
import aboutVue from './view/aboutView.vue';
import accueilView from './view/accueilView.vue';
export default {
    name: 'App',

    data() {
        return {}
    },

    components: {
        accueilView,
        horizontalBarVue,
        aboutVue
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
