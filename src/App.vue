<template>
<div class=" overflow-auto overflow-x-hidden w-full h-full">
    <accueilView></accueilView>
    <horizontalBarVue></horizontalBarVue>
    <accueilView></accueilView>

</div>
</template>

<script>
import horizontalBarVue from './components/horizontalBar.vue'
import accueilView from './view/accueilView.vue';
export default {
    name: 'App',

    data() {
        return {}
    },

    components: {
        accueilView,
        horizontalBarVue
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
